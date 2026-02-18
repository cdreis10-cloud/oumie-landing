'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { GraduationCap, Mail, Lock, Eye, EyeOff, User, CheckCircle, ArrowRight, ArrowLeft, Loader2, Bookmark, ExternalLink } from 'lucide-react'
import Link from 'next/link'

type Step = 'email' | 'verify' | 'details' | 'success'

interface University {
  name: string
  shortName: string
  id: number | null
}

export default function Signup() {
  const [step, setStep] = useState<Step>('email')
  const [email, setEmail] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [university, setUniversity] = useState<University | null>(null)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [pinDashboard, setPinDashboard] = useState(true)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [devCode, setDevCode] = useState('')
  const [dashboardUrl, setDashboardUrl] = useState('https://student.oumie.app')

  const API_URL = 'https://oumie-backend.onrender.com'
  const DASHBOARD_URL = 'https://student.oumie.app'

  // Step 1: Check email and send verification
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // First check if email is valid .edu
      const checkResponse = await fetch(`${API_URL}/auth/check-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      const checkData = await checkResponse.json()

      if (!checkData.isValid) {
        setError('Please use your university .edu email address')
        setLoading(false)
        return
      }

      setUniversity(checkData.university)

      // Send verification code
      const sendResponse = await fetch(`${API_URL}/auth/send-verification`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      const sendData = await sendResponse.json()

      if (!sendResponse.ok) {
        throw new Error(sendData.error || 'Failed to send verification code')
      }

      // For development, store the code
      if (sendData.devCode) {
        setDevCode(sendData.devCode)
      }

      setStep('verify')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  // Step 2: Verify code
  const handleVerifySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch(`${API_URL}/auth/verify-code`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code: verificationCode })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Invalid verification code')
      }

      setStep('details')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  // Step 3: Complete signup
  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters')
      return
    }

    setLoading(true)

    try {
      const response = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          password,
          university: university?.name,
          universityDomain: email.split('@')[1]
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Signup failed')
      }

      // Store auth data for dashboard
      localStorage.setItem('oumie_token', data.token)
      localStorage.setItem('oumie_refresh_token', data.refreshToken)
      localStorage.setItem('oumie_user', JSON.stringify(data.user))

      // Store auth data that extension can access
      localStorage.setItem('oumie_auth_email', email)
      localStorage.setItem('oumie_auth_ready', 'true')

      // Push auth to extension if installed
      try {
        const EXTENSION_ID = 'mbnjcoiabhfimfpoeeeonfoppfblioka'
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const cr = (window as any).chrome
        if (cr?.runtime?.sendMessage) {
          cr.runtime.sendMessage(EXTENSION_ID, {
            action: 'setAuth',
            token: data.token,
            refreshToken: data.refreshToken,
            user: data.user
          }, () => {
            // Ignore errors — extension may not be installed
            if (cr.runtime.lastError) { /* noop */ }
          })
        }
      } catch (_e) {
        // Extension not installed or not available
      }

      // Build dashboard URL with tokens for cross-domain auth
      const params = new URLSearchParams({
        token: data.token,
        refresh: data.refreshToken,
        user: JSON.stringify(data.user)
      })
      setDashboardUrl(`${DASHBOARD_URL}?${params.toString()}`)

      setStep('success')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  // Password strength checker
  const getPasswordStrength = () => {
    let strength = 0
    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[a-z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    return strength
  }

  const passwordStrength = getPasswordStrength()

  // Success screen
  if (step === 'success') {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <div className="w-full max-w-md text-center">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-400" size={40} />
          </div>

          <h1 className="text-3xl font-bold mb-2">You're all set!</h1>
          <p className="text-neutral-400 mb-8">
            Welcome to Oumie, {name}! Your account is ready.
          </p>

          {university && (
            <div className="bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-3 rounded-lg mb-6 text-sm">
              <GraduationCap className="inline mr-2" size={16} />
              {university.name}
            </div>
          )}

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 mb-6 text-left">
            <h3 className="font-semibold mb-4">Next steps:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-sm flex-shrink-0">1</div>
                <p className="text-neutral-300 text-sm">Open the Oumie extension in Chrome - you're now signed in!</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-sm flex-shrink-0">2</div>
                <p className="text-neutral-300 text-sm">Start studying - we'll track your time automatically</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-sm flex-shrink-0">3</div>
                <p className="text-neutral-300 text-sm">Check your dashboard anytime to see your progress</p>
              </div>
            </div>
          </div>

          {pinDashboard && (
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 mb-6">
              <p className="text-sm text-neutral-400 mb-2">
                <Bookmark className="inline mr-1" size={14} />
                Tip: Press <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-xs">Ctrl+D</kbd> (or <kbd className="bg-neutral-800 px-1.5 py-0.5 rounded text-xs">Cmd+D</kbd> on Mac) to bookmark your dashboard!
              </p>
            </div>
          )}

          <a
            href={dashboardUrl}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-xl transition-colors flex items-center justify-center gap-2 mb-4"
          >
            Go to Student Dashboard
            <ExternalLink size={18} />
          </a>

          <p className="text-neutral-500 text-sm">
            You can close this tab and use the Oumie extension anytime
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-2">
            <GraduationCap className="text-blue-500" size={40} />
            <span className="text-3xl font-bold">Oumie</span>
          </Link>
          <p className="text-neutral-500">Join your university's study community</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {['email', 'verify', 'details'].map((s, i) => (
            <div key={s} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step === s
                  ? 'bg-blue-600 text-white'
                  : ['email', 'verify', 'details'].indexOf(step) > i
                    ? 'bg-green-600 text-white'
                    : 'bg-neutral-800 text-neutral-500'
              }`}>
                {['email', 'verify', 'details'].indexOf(step) > i ? <CheckCircle size={16} /> : i + 1}
              </div>
              {i < 2 && <div className={`w-12 h-0.5 mx-1 ${
                ['email', 'verify', 'details'].indexOf(step) > i ? 'bg-green-600' : 'bg-neutral-800'
              }`} />}
            </div>
          ))}
        </div>

        {/* Card */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8">

          {/* Step 1: Email */}
          {step === 'email' && (
            <>
              <h1 className="text-xl font-semibold mb-2 text-center">Enter your university email</h1>
              <p className="text-neutral-500 text-sm text-center mb-6">
                We'll send you a verification code
              </p>

              {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg mb-6 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleEmailSubmit}>
                <div className="mb-6">
                  <label className="block text-sm text-neutral-400 mb-2">University Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="you@university.edu"
                      required
                    />
                  </div>
                  <p className="text-xs text-neutral-500 mt-2">Must be a .edu email address</p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? <Loader2 className="animate-spin" size={18} /> : <ArrowRight size={18} />}
                  {loading ? 'Sending...' : 'Continue'}
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-neutral-500">
                Already have an account?{' '}
                <Link href="/login" className="text-blue-400 hover:text-blue-300">
                  Sign in
                </Link>
              </div>
            </>
          )}

          {/* Step 2: Verify */}
          {step === 'verify' && (
            <>
              <h1 className="text-xl font-semibold mb-2 text-center">Check your email</h1>
              <p className="text-neutral-500 text-sm text-center mb-6">
                We sent a 6-digit code to <span className="text-white">{email}</span>
              </p>

              {university && (
                <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg mb-6 text-sm text-center">
                  <CheckCircle className="inline mr-2" size={16} />
                  {university.name}
                </div>
              )}

              {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg mb-6 text-sm">
                  {error}
                </div>
              )}

              {/* DEV ONLY - remove in production */}
              {devCode && (
                <div className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 px-4 py-3 rounded-lg mb-6 text-sm">
                  <strong>Dev Mode:</strong> Your code is {devCode}
                </div>
              )}

              <form onSubmit={handleVerifySubmit}>
                <div className="mb-6">
                  <label className="block text-sm text-neutral-400 mb-2">Verification Code</label>
                  <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white text-center text-2xl tracking-widest placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="000000"
                    maxLength={6}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || verificationCode.length !== 6}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2 mb-4"
                >
                  {loading ? <Loader2 className="animate-spin" size={18} /> : <CheckCircle size={18} />}
                  {loading ? 'Verifying...' : 'Verify Email'}
                </button>

                <button
                  type="button"
                  onClick={() => setStep('email')}
                  className="w-full text-neutral-400 hover:text-white py-2 flex items-center justify-center gap-2"
                >
                  <ArrowLeft size={16} />
                  Use different email
                </button>
              </form>
            </>
          )}

          {/* Step 3: Details */}
          {step === 'details' && (
            <>
              <h1 className="text-xl font-semibold mb-2 text-center">Complete your profile</h1>
              <p className="text-neutral-500 text-sm text-center mb-6">
                Almost there! Just a few more details.
              </p>

              {university && (
                <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg mb-6 text-sm text-center">
                  <CheckCircle className="inline mr-2" size={16} />
                  {university.name}
                </div>
              )}

              {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg mb-6 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSignupSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-neutral-400 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-neutral-400 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-lg pl-10 pr-12 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>

                  {/* Password strength indicator */}
                  <div className="mt-2">
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3, 4].map((level) => (
                        <div
                          key={level}
                          className={`h-1 flex-1 rounded ${
                            passwordStrength >= level
                              ? passwordStrength <= 1 ? 'bg-red-500'
                                : passwordStrength <= 2 ? 'bg-yellow-500'
                                : passwordStrength <= 3 ? 'bg-blue-500'
                                : 'bg-green-500'
                              : 'bg-neutral-700'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-neutral-500">
                      {password.length < 8 ? 'At least 8 characters' :
                       passwordStrength < 4 ? 'Add uppercase, lowercase, and numbers' :
                       'Strong password!'}
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-neutral-400 mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>

                {/* Pin Dashboard Option */}
                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="pinDashboard"
                    checked={pinDashboard}
                    onChange={(e) => setPinDashboard(e.target.checked)}
                    className="w-4 h-4 rounded border-neutral-600 bg-neutral-800 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="pinDashboard" className="text-sm text-neutral-400">
                    Show me how to pin the Student Dashboard to my bookmarks
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading || passwordStrength < 4}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-medium py-3 rounded-lg transition-colors mt-6"
                >
                  {loading ? 'Creating account...' : 'Create Account'}
                </button>
              </form>
            </>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-neutral-600 text-sm mt-8">
          By signing up, you agree to our{' '}
          <Link href="/privacy" className="text-neutral-400 hover:text-white">
            Privacy Policy
          </Link>
          {' '}and{' '}
          <Link href="/terms" className="text-neutral-400 hover:text-white">
            Terms of Service
          </Link>
        </p>
      </div>
    </div>
  )
}
