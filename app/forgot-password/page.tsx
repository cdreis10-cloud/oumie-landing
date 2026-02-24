'use client'
import { useState } from 'react'
import { GraduationCap, Mail, Loader2, ArrowLeft, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const API_URL = 'https://oumie-backend.onrender.com'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await fetch(`${API_URL}/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

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
          {submitted ? (
            <div style={{ textAlign: 'center' }}>
              <CheckCircle size={48} style={{ color: '#4ade80', margin: '0 auto 16px' }} />
              <h2 style={{ fontSize: '20px', marginBottom: '12px' }}>Check your email</h2>
              <p style={{ color: '#737373', marginBottom: '24px', lineHeight: '1.6' }}>
                If <strong style={{ color: '#ffffff' }}>{email}</strong> has an Oumie account, you'll receive a reset link within a few minutes.
              </p>
              <p style={{ color: '#525252', fontSize: '13px' }}>Don't see it? Check your spam folder.</p>
            </div>
          ) : (
            <>
              <h1 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px', textAlign: 'center' }}>Forgot password?</h1>
              <p style={{ color: '#737373', fontSize: '14px', textAlign: 'center', marginBottom: '28px' }}>Enter your email and we'll send you a reset link</p>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '14px', color: '#a3a3a3', marginBottom: '8px' }}>Email address</label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#525252' }} />
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="your@university.edu"
                      required
                      style={{ width: '100%', padding: '12px 14px 12px 44px', backgroundColor: '#0a0a0a', border: '1px solid #262626', borderRadius: '8px', color: '#ffffff', fontSize: '15px', boxSizing: 'border-box' }}
                    />
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
                  {loading ? <><Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> Sending...</> : 'Send reset link'}
                </button>
              </form>
            </>
          )}
        </div>

        <p style={{ textAlign: 'center', marginTop: '24px', color: '#525252', fontSize: '14px' }}>
          <Link href="/login" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <ArrowLeft size={14} /> Back to sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
