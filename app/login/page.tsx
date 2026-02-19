'use client'
import { useState } from 'react'
import { GraduationCap, Mail, Lock, Eye, EyeOff, Loader2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const API_URL = 'https://oumie-backend.onrender.com'
  const DASHBOARD_URL = 'https://student.oumie.app'

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Login failed')
      }

      // Store auth data
      localStorage.setItem('oumie_token', data.token)
      localStorage.setItem('oumie_refresh_token', data.refreshToken)
      localStorage.setItem('oumie_user', JSON.stringify(data.user))
      localStorage.setItem('oumie_auth_email', email)
      localStorage.setItem('oumie_auth_ready', 'true')

      // Push auth to extension if installed, then redirect
      const params = new URLSearchParams({
        token: data.token,
        refresh: data.refreshToken,
        user: JSON.stringify(data.user)
      })
      const redirectUrl = `${DASHBOARD_URL}?${params.toString()}`

      const doRedirect = () => { window.location.href = redirectUrl }

      try {
        const EXTENSION_ID = 'mbnjcoiabhfimfpoeeeonfoppfblioka'
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const cr = (window as any).chrome
        if (cr?.runtime?.sendMessage) {
          console.log('[Oumie] Sending auth to extension...')
          cr.runtime.sendMessage(EXTENSION_ID, {
            action: 'setAuth',
            token: data.token,
            refreshToken: data.refreshToken,
            user: data.user
          }, (response: unknown) => {
            if (cr.runtime.lastError) {
              console.warn('[Oumie] Extension message error:', cr.runtime.lastError.message)
            } else {
              console.log('[Oumie] Extension auth set:', response)
            }
            doRedirect()
          })
          // Fallback: redirect after 1s even if extension doesn't respond
          setTimeout(doRedirect, 1000)
        } else {
          doRedirect()
        }
      } catch (_e) {
        // Extension not installed
        doRedirect()
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
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
          <p className="text-neutral-500">Welcome back!</p>
        </div>

        {/* Card */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8">
          <h1 className="text-xl font-semibold mb-6 text-center">Sign in to your account</h1>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm text-neutral-400 mb-2">Email</label>
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
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2 mt-6"
            >
              {loading ? <Loader2 className="animate-spin" size={18} /> : <ArrowRight size={18} />}
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-neutral-500">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-blue-400 hover:text-blue-300">
              Sign up free
            </Link>
          </div>
        </div>

        <p className="text-center text-neutral-600 text-sm mt-8">
          <Link href="/" className="text-neutral-400 hover:text-white">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  )
}
