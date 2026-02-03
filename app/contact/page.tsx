'use client'
import { useState } from 'react'
import { GraduationCap, Mail, MessageSquare, Send, CheckCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // In production, this would send to your backend or email service
    // For now, we'll simulate a submission
    await new Promise(resolve => setTimeout(resolve, 1000))

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
          <h1 className="text-2xl font-bold mb-4">Message Sent!</h1>
          <p className="text-neutral-400 mb-8">
            Thanks for reaching out. We&apos;ll get back to you within 24-48 hours.
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
            <a href="mailto:support@oumie.com" className="text-neutral-400 text-sm hover:text-white">
              support@oumie.com
            </a>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <MessageSquare className="text-purple-400 mb-2" size={24} />
            <h3 className="font-semibold mb-1">Response Time</h3>
            <p className="text-neutral-400 text-sm">Within 24-48 hours</p>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
            <GraduationCap className="text-green-400 mb-2" size={24} />
            <h3 className="font-semibold mb-1">University Partnerships</h3>
            <a href="mailto:partnerships@oumie.com" className="text-neutral-400 text-sm hover:text-white">
              partnerships@oumie.com
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
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-neutral-400 mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="you@university.edu"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm text-neutral-400 mb-2">What&apos;s this about?</label>
            <select
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            >
              <option value="general">General Question</option>
              <option value="bug">Bug Report</option>
              <option value="feature">Feature Request</option>
              <option value="account">Account Issue</option>
              <option value="university">University Partnership</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-neutral-400 mb-2">Message</label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              placeholder="Tell us what's on your mind..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
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
            <a href="mailto:support@oumie.com" className="text-blue-400 hover:text-blue-300">
              support@oumie.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
