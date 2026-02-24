'use client'
import { useState } from 'react'
import { CheckCircle, Loader2 } from 'lucide-react'

const API_URL = 'https://oumie-backend.onrender.com'
const DASHBOARD_URL = 'https://student.oumie.app'

const questions = [
  {
    id: 'year_in_school',
    question: 'What year are you in?',
    options: ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate Student'],
    feedback: (_: string) =>
      "Perfect. We'll calibrate your study benchmarks to match students at your level.",
  },
  {
    id: 'major',
    question: "What's your field of study?",
    options: ['STEM', 'Business', 'Liberal Arts', 'Health Sciences', 'Education', 'Other'],
    feedback: (answer: string) => {
      const stats: Record<string, string> = {
        STEM: 'STEM students who track their study time average 18% higher GPAs according to university research.',
        Business: 'Business students who log study sessions are 22% more likely to hit their GPA targets.',
        'Liberal Arts': 'Liberal Arts students who track reading time report 25% less pre-exam anxiety.',
        'Health Sciences': 'Health Sciences students who track study time score 20% higher on licensing exams.',
        Education: 'Education majors who monitor their study patterns develop better teaching habits — 19% report higher practicum scores.',
        Other: 'Students across all majors who track their study time consistently outperform peers by 15% on average.',
      }
      return `Great. ${stats[answer] ?? stats['Other']}`
    },
  },
  {
    id: 'study_struggle',
    question: "What's your biggest study challenge?",
    options: ['Procrastination', 'Staying Focused', 'Managing Time', 'Motivation', 'Balancing Work & School'],
    feedback: (answer: string) => {
      const msgs: Record<string, string> = {
        Procrastination: "You're not alone — 87% of college students identify procrastination as their #1 academic obstacle. Oumie detects your patterns automatically.",
        'Staying Focused': 'Focus is the new superpower. 73% of students report shorter attention spans than 3 years ago. Oumie helps you build it back.',
        'Managing Time': 'Time blindness is real. Students who track time externally are 31% more productive than those who rely on intuition alone.',
        Motivation: 'Motivation follows action, not the other way around. Oumie makes starting easier so the momentum builds naturally.',
        'Balancing Work & School': '64% of college students work while enrolled. Oumie helps you squeeze the most out of every available study minute.',
      }
      return msgs[answer] ?? "We've got you covered. Oumie will help you tackle this head-on."
    },
  },
  {
    id: 'study_environment',
    question: 'Where do you study best?',
    options: ['Dorm/Bedroom', 'Library', 'Coffee Shop', 'Classroom', 'Varies'],
    feedback: (_: string) =>
      "Noted. We'll help you identify which environment actually produces your best work based on real data.",
  },
  {
    id: 'study_time_preference',
    question: 'When are you most productive?',
    options: ['Early Morning', 'Morning', 'Afternoon', 'Evening', 'Late Night'],
    feedback: (answer: string) => {
      const msgs: Record<string, string> = {
        'Early Morning': "The early birds have science on their side. Cortisol peaks in early morning, making it your brain's natural power hour. We'll track whether that holds true for you.",
        Morning: 'Morning focus is real — most students report peak concentration between 9am and noon. We\'ll verify your personal peak hours.',
        Afternoon: 'Afternoon energy can be powerful once you push past the midday dip. We\'ll map your actual focus windows.',
        Evening: "Evening study sessions work well for many students. We'll track your patterns to find your personal sweet spot.",
        'Late Night': "Night owls unite. Research shows 31% of college students do their best work after 9pm. We'll track when YOUR peak hours actually are.",
      }
      return msgs[answer] ?? "We'll track your actual peak hours and show you the data."
    },
  },
  {
    id: 'study_goal',
    question: "What's your main goal with Oumie?",
    options: ['Improve My GPA', 'Stop Procrastinating', 'Study Smarter Not Harder', 'Build Better Habits', 'Reduce Stress'],
    feedback: (_: string) => "That's exactly what Oumie is built for. Let's get started.",
  },
]

const TOTAL = questions.length

export default function Onboarding() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  const [saving, setSaving] = useState(false)

  const current = questions[step]

  const handleSelect = (option: string) => {
    if (selectedOption) return
    const newAnswers = { ...answers, [current.id]: option }
    setAnswers(newAnswers)
    setSelectedOption(option)
    setFeedbackMsg(current.feedback(option))

    setTimeout(() => {
      if (step < TOTAL - 1) {
        setStep(s => s + 1)
        setSelectedOption(null)
        setFeedbackMsg(null)
      } else {
        saveOnboarding(newAnswers)
      }
    }, 2000)
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
              <Loader2 size={48} style={{ color: '#3b82f6', margin: '0 auto 24px', animation: 'spin 1s linear infinite' }} />
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
                Go to Dashboard →
              </button>
            </>
          )}
        </div>
        <style>{`
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        `}</style>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', display: 'flex', flexDirection: 'column', padding: '24px' }}>
      {/* Progress bar */}
      <div style={{ maxWidth: '600px', width: '100%', margin: '0 auto 48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ color: '#525252', fontSize: '13px' }}>Step {step + 1} of {TOTAL}</span>
          <span style={{ color: '#525252', fontSize: '13px' }}>{Math.round(((step + 1) / TOTAL) * 100)}%</span>
        </div>
        <div style={{ height: '4px', backgroundColor: '#262626', borderRadius: '99px', overflow: 'hidden' }}>
          <div
            style={{
              height: '100%',
              width: `${((step + 1) / TOTAL) * 100}%`,
              backgroundColor: '#3b82f6',
              borderRadius: '99px',
              transition: 'width 0.4s ease',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', maxWidth: '600px', width: '100%', margin: '0 auto' }}>
        {feedbackMsg ? (
          <div style={{ textAlign: 'center', padding: '20px', animation: 'fadeIn 0.3s ease' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#14532d', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
              <CheckCircle size={36} style={{ color: '#4ade80' }} />
            </div>
            <p style={{ fontSize: '18px', color: '#e5e5e5', lineHeight: '1.7', maxWidth: '480px' }}>{feedbackMsg}</p>
          </div>
        ) : (
          <>
            <h1 style={{ fontSize: '28px', fontWeight: 700, textAlign: 'center', marginBottom: '36px', lineHeight: '1.3', color: '#ffffff' }}>
              {current.question}
            </h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
              {current.options.map(option => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  style={{
                    width: '100%',
                    padding: '18px 24px',
                    backgroundColor: '#171717',
                    border: '1px solid #262626',
                    borderRadius: '12px',
                    color: '#e5e5e5',
                    fontSize: '16px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'border-color 0.15s, background-color 0.15s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#3b82f6'
                    e.currentTarget.style.backgroundColor = '#1e2a3a'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#262626'
                    e.currentTarget.style.backgroundColor = '#171717'
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
