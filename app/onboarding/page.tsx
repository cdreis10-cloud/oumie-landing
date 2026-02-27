'use client'
import { useState } from 'react'
import { CheckCircle, Loader2 } from 'lucide-react'

const API_URL = 'https://oumie-backend.onrender.com'
const DASHBOARD_URL = 'https://student.oumie.app'

const questions = [
  {
    id: 'year_in_school',
    question: "First things first — what year are you in?",
    subtitle: "We'll set the right benchmarks for where you are.",
    options: ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate Student'],
    feedback: (_: string) => ({
      message: "Got it.",
      stat: "We'll calibrate your study benchmarks to match students at your exact level."
    }),
  },
  {
    id: 'major',
    question: "What are you studying?",
    subtitle: "We'll tailor your insights to your field.",
    options: ['STEM', 'Business', 'Liberal Arts', 'Health Sciences', 'Education', 'Other'],
    feedback: (answer: string) => {
      const stats: Record<string, { message: string; stat: string }> = {
        STEM: { message: "STEM — respect.", stat: "STEM students who track their study time average 18% higher GPAs. The data doesn't lie." },
        Business: { message: "Future CEO energy.", stat: "Business students who log sessions consistently are 22% more likely to hit their target GPA." },
        'Liberal Arts': { message: "The thinkers.", stat: "Liberal Arts students who track reading time report 25% less pre-exam anxiety. Less stress, better work." },
        'Health Sciences': { message: "You're going to save lives.", stat: "Health Sciences students who track study time score 20% higher on licensing exams." },
        Education: { message: "Teaching the future.", stat: "Education majors who monitor study patterns score 19% higher on practicums." },
        Other: { message: "Blazing your own trail.", stat: "Regardless of major, students who track study time outperform peers by 15% on average." },
      }
      return stats[answer] ?? stats['Other']
    },
  },
  {
    id: 'study_struggle',
    question: "Real talk — what's your biggest study struggle?",
    subtitle: "Everyone has one. This helps us actually help you.",
    options: ['Procrastination', 'Staying Focused', 'Managing Time', 'Staying Motivated', 'Balancing Work & School', 'All of the above'],
    feedback: (answer: string) => {
      const msgs: Record<string, { message: string; stat: string }> = {
        Procrastination: { message: "You and literally everyone else.", stat: "87% of college students say procrastination is their #1 obstacle. Oumie detects your delay patterns automatically so you can actually see them." },
        'Staying Focused': { message: "Focus is the new superpower.", stat: "73% of students report shorter attention spans than 3 years ago. Tracking your sessions helps you rebuild it intentionally." },
        'Managing Time': { message: "Time blindness is real.", stat: "Students who track time externally are 31% more productive than those who rely on gut feel alone." },
        'Staying Motivated': { message: "Motivation follows action.", stat: "Research shows motivation spikes after starting, not before. Oumie helps you just show up — the rest follows." },
        'Balancing Work & School': { message: "You are carrying a lot.", stat: "64% of college students work while enrolled. Oumie helps you squeeze maximum value from every study minute you have." },
        'All of the above': { message: "We respect the honesty.", stat: "You came to the right place. Oumie was built for exactly this." },
      }
      return msgs[answer] ?? { message: "We hear you.", stat: "Oumie will help you tackle this head-on." }
    },
  },
  {
    id: 'study_time_preference',
    question: "When does your brain actually work?",
    subtitle: "Be honest — when do you actually get things done?",
    options: ['Early Morning', 'Morning', 'Afternoon', 'Evening', 'Late Night'],
    feedback: (answer: string) => {
      const msgs: Record<string, { message: string; stat: string }> = {
        'Early Morning': { message: "Early bird confirmed.", stat: "Cortisol peaks in early morning, giving your brain a natural focus boost. We will track whether that actually holds true for you specifically." },
        Morning: { message: "The sweet spot.", stat: "Most students report peak concentration between 9am and noon. We will verify your personal peak hours with real data." },
        Afternoon: { message: "Post-lunch power.", stat: "Afternoon focus is real once you push past the 2pm slump. We will map your actual focus windows." },
        Evening: { message: "Evening grinder.", stat: "Evening sessions work well for students with busy daytime schedules. We will find your personal sweet spot." },
        'Late Night': { message: "Night owl confirmed.", stat: "31% of college students do their best work after 9pm. We will track when YOUR peak hours actually are — not just what you think they are." },
      }
      return msgs[answer] ?? { message: "Noted.", stat: "We will track your actual peak hours and show you the real data." }
    },
  },
  {
    id: 'study_environment',
    question: "Where do you actually get work done?",
    subtitle: "Your environment matters more than you think.",
    options: ['My Room', 'Library', 'Coffee Shop', 'Campus Common Areas', 'Wherever I can'],
    feedback: (_: string) => ({
      message: "Location logged.",
      stat: "We will help you figure out which environment actually produces your best output — the answer might surprise you."
    }),
  },
  {
    id: 'note_taking',
    question: "How do you take notes?",
    subtitle: "No wrong answers — we just want to understand how you learn.",
    options: ['Typed — always', 'Handwritten — always', 'Mix of both', 'Voice memos', 'I wing it honestly'],
    feedback: (answer: string) => {
      const msgs: Record<string, { message: string; stat: string }> = {
        'Typed — always': { message: "Speed typist.", stat: "Typed notes are faster but handwriting boosts retention by up to 29% for complex material. Worth experimenting with." },
        'Handwritten — always': { message: "Old school and it works.", stat: "Handwriting activates more brain regions during encoding. Studies show 29% better retention for complex topics." },
        'Mix of both': { message: "Best of both worlds.", stat: "Adaptive learners who mix methods tend to retain information more flexibly across different types of material." },
        'Voice memos': { message: "Auditory learner spotted.", stat: "Hearing your own explanations back is one of the most effective recall techniques — massively underused." },
        'I wing it honestly': { message: "Respect for the honesty.", stat: "Building even a minimal note system could significantly improve recall. We will help you track what actually works for you." },
      }
      return msgs[answer] ?? { message: "Noted.", stat: "We will factor this into your study insights." }
    },
  },
  {
    id: 'study_struggle_2',
    question: "What kills your focus the fastest?",
    subtitle: "Knowing your kryptonite is half the battle.",
    options: ['My phone', 'Background noise', 'Stress and anxiety', 'Hunger or fatigue', 'Other people'],
    feedback: (answer: string) => {
      const msgs: Record<string, { message: string; stat: string }> = {
        'My phone': { message: "The most common answer by far.", stat: "The average college student checks their phone 150 times per day. Just being aware of it is a meaningful first step." },
        'Background noise': { message: "Silence is underrated.", stat: "Studies show that even moderate background noise reduces complex cognitive task performance by up to 40%." },
        'Stress and anxiety': { message: "School is a lot.", stat: "Academic anxiety affects 55% of college students. Tracking your patterns helps you identify what triggers it." },
        'Hunger or fatigue': { message: "Your body is talking.", stat: "Glucose depletion reduces prefrontal cortex function — the part of your brain responsible for focus and decision making." },
        'Other people': { message: "Social creatures, all of us.", stat: "Environment design is one of the most underused study tools. Oumie will help you track which settings produce your best work." },
      }
      return msgs[answer] ?? { message: "Noted.", stat: "Knowing what breaks your focus is the first step to protecting it." }
    },
  },
  {
    id: 'study_goal',
    question: "Last one — what do you actually want out of Oumie?",
    subtitle: "This shapes everything we show you.",
    options: ['Improve my GPA', 'Stop procrastinating', 'Study smarter, not harder', 'Build consistent habits', 'Stress less about school'],
    feedback: (_: string) => ({
      message: "That is what we are here for.",
      stat: "Your profile is built. Oumie is ready to go to work."
    }),
  },
]

const TOTAL = questions.length

export default function Onboarding() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [feedback, setFeedback] = useState<{ message: string; stat: string } | null>(null)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [slideOut, setSlideOut] = useState(false)
  const [done, setDone] = useState(false)
  const [saving, setSaving] = useState(false)

  const current = questions[step]

  const handleSelect = (option: string) => {
    if (selectedOption) return
    const newAnswers = { ...answers, [current.id]: option }
    setAnswers(newAnswers)
    setSelectedOption(option)
    const fb = current.feedback(option) as { message: string; stat: string }
    setFeedback(fb)

    setTimeout(() => {
      setSlideOut(true)
      setTimeout(() => {
        setSlideOut(false)
        if (step < TOTAL - 1) {
          setStep(s => s + 1)
          setSelectedOption(null)
          setFeedback(null)
        } else {
          saveOnboarding(newAnswers)
        }
      }, 300)
    }, 1400)
  }

  const saveOnboarding = async (finalAnswers: Record<string, string>) => {
    setDone(true)
    setSaving(true)
    try {
      const raw = localStorage.getItem('oumie_user')
      const token = localStorage.getItem('oumie_token')
      if (!raw || !token) { window.location.href = DASHBOARD_URL; return }
      const user = JSON.parse(raw)
      await fetch(`${API_URL}/student/${user.id}/onboarding`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          year_in_school: finalAnswers.year_in_school,
          major: finalAnswers.major,
          study_struggle: finalAnswers.study_struggle,
          study_environment: finalAnswers.study_environment,
          study_time_preference: finalAnswers.study_time_preference,
          study_goal: finalAnswers.study_goal,
          note_taking: finalAnswers.note_taking,
          focus_killer: finalAnswers.study_struggle_2,
        }),
      })
    } catch {
      // proceed to dashboard regardless
    } finally {
      setSaving(false)
    }
  }

  if (done) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ textAlign: 'center', maxWidth: '480px', width: '100%' }}>
          {saving ? (
            <>
              <Loader2 size={48} style={{ color: '#3b82f6', margin: '0 auto 24px', animation: 'spin 1s linear infinite', display: 'block' }} />
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Building your profile...</h2>
              <p style={{ color: '#737373' }}>Just a moment.</p>
            </>
          ) : (
            <>
              <div style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: '#14532d', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <CheckCircle size={40} style={{ color: '#4ade80' }} />
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Your profile is ready.</h2>
              <p style={{ color: '#737373', fontSize: '16px', marginBottom: '36px' }}>Time to start tracking.</p>
              <button
                onClick={() => { window.location.href = DASHBOARD_URL }}
                style={{ padding: '16px 40px', backgroundColor: '#3b82f6', color: '#ffffff', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: 600, cursor: 'pointer' }}
              >
                Go to Dashboard
              </button>
            </>
          )}
        </div>
        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </div>
    )
  }

  const progressPct = ((step + 1) / TOTAL) * 100

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', display: 'flex', flexDirection: 'column', padding: '24px' }}>
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutLeft {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(-40px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          0% { transform: scale(1); }
          50% { transform: scale(1.03); }
          100% { transform: scale(1); }
        }
        .option-btn:hover {
          border-color: #3b82f6 !important;
          background-color: #1e2a3a !important;
        }
        .option-selected {
          border-color: #3b82f6 !important;
          background-color: #1e3a5f !important;
          animation: popIn 0.2s ease;
        }
      `}</style>

      {/* Progress */}
      <div style={{ maxWidth: '560px', width: '100%', margin: '0 auto 48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ color: '#525252', fontSize: '13px' }}>Step {step + 1} of {TOTAL}</span>
          <span style={{ color: '#525252', fontSize: '13px' }}>{Math.round(progressPct)}%</span>
        </div>
        <div style={{ height: '3px', backgroundColor: '#1f1f1f', borderRadius: '99px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${progressPct}%`, backgroundColor: '#3b82f6', borderRadius: '99px', transition: 'width 0.5s ease' }} />
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '560px',
          width: '100%',
          margin: '0 auto',
          animation: slideOut ? 'slideOutLeft 0.4s ease forwards' : 'slideInRight 0.4s ease',
        }}
      >
        {feedback ? (
          <div style={{ textAlign: 'center', padding: '20px', animation: 'fadeInUp 0.4s ease' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#14532d', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <CheckCircle size={32} style={{ color: '#4ade80' }} />
            </div>
            <p style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>{feedback.message}</p>
            <p style={{ fontSize: '16px', color: '#a3a3a3', lineHeight: 1.7, maxWidth: '440px' }}>{feedback.stat}</p>
          </div>
        ) : (
          <>
            <h1 style={{ fontSize: '26px', fontWeight: 700, textAlign: 'center', marginBottom: '10px', color: '#ffffff', lineHeight: 1.3 }}>
              {current.question}
            </h1>
            <p style={{ fontSize: '14px', color: '#525252', textAlign: 'center', marginBottom: '32px' }}>
              {current.subtitle}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
              {current.options.map(option => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`option-btn${selectedOption === option ? ' option-selected' : ''}`}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    backgroundColor: '#111111',
                    border: `1px solid ${selectedOption === option ? '#3b82f6' : '#1f1f1f'}`,
                    borderRadius: '10px',
                    color: selectedOption === option ? '#ffffff' : '#d4d4d4',
                    fontSize: '15px',
                    fontWeight: 500,
                    cursor: selectedOption ? 'default' : 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
