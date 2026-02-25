'use client'
import Link from 'next/link'
import { GraduationCap } from 'lucide-react'

export default function About() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#ffffff' }}>
      {/* Nav */}
      <nav style={{ borderBottom: '1px solid #1f1f1f', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1100px', margin: '0 auto' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <GraduationCap size={24} style={{ color: '#3b82f6' }} />
          <span style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff' }}>Oumie</span>
        </Link>
        <Link href="/signup" style={{ padding: '8px 20px', backgroundColor: '#3b82f6', color: '#ffffff', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
          Get Started
        </Link>
      </nav>

      {/* Hero */}
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 24px 60px' }}>
        <p style={{ fontSize: '13px', color: '#3b82f6', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>About Oumie</p>
        <h1 style={{ fontSize: '42px', fontWeight: 800, lineHeight: 1.15, marginBottom: '24px', color: '#ffffff' }}>
          Built by a student who felt invisible in the system.
        </h1>
        <p style={{ fontSize: '18px', color: '#a3a3a3', lineHeight: 1.8 }}>
          Oumie exists because the tools students actually need have never been built. Not really. What exists are grade portals, assignment trackers, and institutional dashboards designed for administrators, not the people doing the actual work.
        </p>
      </div>

      {/* Story */}
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 60px' }}>
        <div style={{ borderLeft: '3px solid #3b82f6', paddingLeft: '28px', marginBottom: '48px' }}>
          <p style={{ fontSize: '16px', color: '#d4d4d4', lineHeight: 1.9, marginBottom: '20px' }}>
            My name is Colin Dreis. I spent five years at the University of Montana playing football and earning my MBA. For most of that time, I was falling behind academically and had no real visibility into why. I knew I was working hard. I just had no way to see where my time was actually going, what was draining me, or when I worked best.
          </p>
          <p style={{ fontSize: '16px', color: '#d4d4d4', lineHeight: 1.9, marginBottom: '20px' }}>
            I built the first version of Oumie out of boredom at work and a genuine desire to build something that would have helped me. The idea started in an entrepreneurship class around a concept for a wearable device that would buzz to keep students on track with assignments. That concept evolved into something more powerful: a platform that automatically tracks how students study and gives them real data about themselves, before the grades come in.
          </p>
          <p style={{ fontSize: '16px', color: '#d4d4d4', lineHeight: 1.9 }}>
            The goal was never to build another corporate edtech product. It was to give students the kind of honest, personal insight that universities have always had about them, but have never shared back.
          </p>
        </div>

        {/* Mission */}
        <div style={{ backgroundColor: '#111111', border: '1px solid #1f1f1f', borderRadius: '16px', padding: '40px', marginBottom: '48px' }}>
          <p style={{ fontSize: '12px', color: '#525252', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Our Mission</p>
          <p style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', lineHeight: 1.5, marginBottom: '16px' }}>
            Save students time. Give them an in-depth analytical look at how they work, before they ever see their grades.
          </p>
          <p style={{ fontSize: '15px', color: '#737373', lineHeight: 1.8 }}>
            Universities are billion-dollar institutions with sophisticated data operations. They track student behavior, predict dropout risk, and make enrollment decisions using analytics that students never see. Oumie flips that. We put the data in the hands of the student first, because understanding how you work is the single most powerful thing you can do for your academic performance.
          </p>
        </div>

        {/* Name origin */}
        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontSize: '12px', color: '#525252', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>The Name</p>
          <p style={{ fontSize: '16px', color: '#d4d4d4', lineHeight: 1.9, marginBottom: '20px' }}>
            Oumie is named after my grandmother, who passed away in 2021. My brother and I called her Oumie because we could never quite say Oma, the Dutch word for grandmother, when we were young. She and my grandfather, who we called Apu, immigrated to the United States from South Africa in the 1970s.
          </p>
          <p style={{ fontSize: '16px', color: '#d4d4d4', lineHeight: 1.9 }}>
            Naming this after her felt right. She believed in showing up, doing the work, and never letting the system tell you what you were worth. That is what Oumie the platform is about too.
          </p>
        </div>

        {/* Values */}
        <div style={{ marginBottom: '48px' }}>
          <p style={{ fontSize: '12px', color: '#525252', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px' }}>What We Believe</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { title: 'Students are not numbers.', body: 'Every student has a unique pattern of focus, motivation, and output. Treating them as enrollment statistics has never made anyone better at learning.' },
              { title: 'Data should work for you, not against you.', body: 'Institutions have always had more information about students than students have about themselves. That imbalance is not neutral. It is a power structure. We are here to rebalance it.' },
              { title: 'Awareness precedes improvement.', body: 'You cannot fix what you cannot see. Before better grades, before better habits, comes honest data about where your time and energy actually go.' },
              { title: 'Simple tools get used.', body: 'Oumie runs in the background. It does not ask you to manually log anything or change your workflow. The less it asks of you, the more useful it becomes.' },
            ].map(({ title, body }) => (
              <div key={title} style={{ borderTop: '1px solid #1f1f1f', paddingTop: '20px' }}>
                <p style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>{title}</p>
                <p style={{ fontSize: '15px', color: '#737373', lineHeight: 1.8 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '48px 0 24px' }}>
          <p style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Ready to see how you actually study?</p>
          <p style={{ fontSize: '15px', color: '#737373', marginBottom: '28px' }}>Free for students. Always.</p>
          <Link href="/signup" style={{ padding: '16px 40px', backgroundColor: '#3b82f6', color: '#ffffff', borderRadius: '10px', textDecoration: 'none', fontSize: '16px', fontWeight: 600 }}>
            Get Started Free
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid #1f1f1f', padding: '24px', textAlign: 'center' }}>
        <p style={{ color: '#525252', fontSize: '13px' }}>
          Built by Colin Dreis. <Link href="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>Back to home</Link>
        </p>
      </div>
    </div>
  )
}
