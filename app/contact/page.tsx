'use client'
import { useState } from 'react'
import { GraduationCap, Mail, MessageSquare, Send, CheckCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const API_URL = 'https://oumie-backend.onrender.com'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!subject) return
    setLoading(true)
    try {
      await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      })
    } catch {
      // proceed regardless
    }
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-400" size={32} />
          </div>
          <h1 className="text-2xl font-bold mb-4">Message received.</h1>
          <p className="text-neutral-400 mb-8">
            We will get back to you within 24–48 hours.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <GraduationCap className="text-blue-500" size={32} />
          <span className="text-2xl font-bold">Oumie</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">Contact Support</h1>
        <p className="text-neutral-400 mb-8">
          Have a question, found a bug, or want to share feedback? We&apos;d love to hear from you.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <Mail className="text-blue-400 mb-2" size={24} />
            <h3 className="font-semibold mb-1">Email Us</h3>
            <a href="mailto:support@oumie.app" className="text-neutral-400 text-sm hover:text-white">
              support@oumie.app
            </a>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <MessageSquare className="text-purple-400 mb-2" size={24} />
            <h3 className="font-semibold mb-1">Response Time</h3>
            <p className="text-neutral-400 text-sm">Within 24–48 hours</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <GraduationCap className="text-green-400 mb-2" size={24} />
            <h3 className="font-semibold mb-1">University Partnerships</h3>
            <a href="mailto:partnerships@oumie.app" className="text-neutral-400 text-sm hover:text-white">
              partnerships@oumie.app
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-6">Send us a message</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-neutral-400 mb-2">Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-neutral-400 mb-2">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="you@university.edu"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm text-neutral-400 mb-2">What&apos;s this about?</label>
            <div className="flex gap-3">
              {['General Question', 'Bug Report', 'University Partnership'].map(opt => (
                <div
                  key={opt}
                  onClick={() => setSubject(opt)}
                  className={`flex-1 p-4 rounded-lg border cursor-pointer transition-colors text-sm font-medium text-center ${
                    subject === opt
                      ? 'border-blue-500 bg-blue-500/10 text-white'
                      : 'border-neutral-800 bg-neutral-800 text-neutral-400 hover:border-neutral-600'
                  }`}
                >
                  {opt}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-neutral-400 mb-2">Message</label>
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              placeholder="Tell us what's on your mind..."
            />
          </div>

          <button
            type="submit"
            disabled={loading || !subject}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              'Sending...'
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-neutral-500 text-sm">
            For urgent issues, email us directly at{' '}
            <a href="mailto:support@oumie.app" className="text-blue-400 hover:text-blue-300">
              support@oumie.app
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
