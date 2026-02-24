'use client'
import { useState, useEffect, Suspense } from 'react'
import { GraduationCap, Lock, Eye, EyeOff, Loader2, CheckCircle, XCircle } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const API_URL = 'https://oumie-backend.onrender.com'

function ResetPasswordForm() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [verifying, setVerifying] = useState(true)
  const [tokenValid, setTokenValid] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!token) {
      setVerifying(false)
      setTokenValid(false)
      return
    }
    fetch(`${API_URL}/auth/verify-reset-token/${token}`)
      .then(r => r.json())
      .then(data => {
        setTokenValid(data.valid)
        setVerifying(false)
      })
      .catch(() => {
        setTokenValid(false)
        setVerifying(false)
      })
  }, [token])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password.length < 8) {
      setError('Password must be at least 8 characters')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setLoading(true)
    try {
      const response = await fetch(`${API_URL}/auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword: password })
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Reset failed')
      setSuccess(true)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (verifying) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <Loader2 size={32} style={{ color: '#3b82f6', animation: 'spin 1s linear infinite', margin: '0 auto' }} />
        <p style={{ color: '#737373', marginTop: '16px' }}>Verifying your reset link...</p>
      </div>
    )
  }

  if (!tokenValid) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <XCircle size={48} style={{ color: '#ef4444', margin: '0 auto 16px' }} />
        <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>Link Invalid or Expired</h2>
        <p style={{ color: '#737373', marginBottom: '24px' }}>This reset link is no longer valid. Reset links expire after 1 hour.</p>
        <Link href="/forgot-password" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 600 }}>
          Request a new reset link →
        </Link>
      </div>
    )
  }

  if (success) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <CheckCircle size={48} style={{ color: '#4ade80', margin: '0 auto 16px' }} />
        <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>Password Reset!</h2>
        <p style={{ color: '#737373', marginBottom: '24px' }}>Your password has been updated successfully.</p>
        <Link href="/login" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 600 }}>
          Sign in with new password →
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', fontSize: '14px', color: '#a3a3a3', marginBottom: '8px' }}>New Password</label>
        <div style={{ position: 'relative' }}>
          <Lock size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#525252' }} />
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="At least 8 characters"
            required
            style={{ width: '100%', padding: '12px 44px', backgroundColor: '#0a0a0a', border: '1px solid #262626', borderRadius: '8px', color: '#ffffff', fontSize: '15px', boxSizing: 'border-box' }}
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#525252' }}>
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontSize: '14px', color: '#a3a3a3', marginBottom: '8px' }}>Confirm New Password</label>
        <div style={{ position: 'relative' }}>
          <Lock size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#525252' }} />
          <input
            type={showConfirm ? 'text' : 'password'}
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
            style={{ width: '100%', padding: '12px 44px', backgroundColor: '#0a0a0a', border: '1px solid #262626', borderRadius: '8px', color: '#ffffff', fontSize: '15px', boxSizing: 'border-box' }}
          />
          <button type="button" onClick={() => setShowConfirm(!showConfirm)} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#525252' }}>
            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {error && (
        <div style={{ backgroundColor: '#1a0a0a', border: '1px solid #7f1d1d', borderRadius: '8px', padding: '12px', marginBottom: '20px', color: '#f87171', fontSize: '14px' }}>
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        style={{ width: '100%', padding: '14px', backgroundColor: '#3b82f6', color: '#ffffff', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
      >
        {loading ? <><Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> Resetting...</> : 'Reset Password'}
      </button>
    </form>
  )
}

export default function ResetPassword() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ width: '100%', maxWidth: '440px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '8px' }}>
            <GraduationCap size={32} style={{ color: '#3b82f6' }} />
            <span style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff' }}>Oumie</span>
          </div>
          <p style={{ color: '#737373', fontSize: '14px' }}>Your academic performance companion</p>
        </div>

        <div style={{ backgroundColor: '#171717', borderRadius: '16px', padding: '40px', border: '1px solid #262626' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px', textAlign: 'center' }}>Set new password</h1>
          <p style={{ color: '#737373', fontSize: '14px', textAlign: 'center', marginBottom: '28px' }}>Choose a strong password for your account</p>
          <Suspense fallback={<div style={{ color: '#737373', textAlign: 'center' }}>Loading...</div>}>
            <ResetPasswordForm />
          </Suspense>
        </div>

        <p style={{ textAlign: 'center', marginTop: '24px', color: '#525252', fontSize: '14px' }}>
          Remember your password?{' '}
          <Link href="/login" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 500 }}>Sign in</Link>
        </p>
      </div>
    </div>
  )
}
