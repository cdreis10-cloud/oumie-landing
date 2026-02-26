'use client'

import { useState } from 'react'
import {
  GraduationCap,
  BarChart2,
  Clock,
  Trophy,
  Brain,
  Shield,
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Menu,
  X,
  ChevronDown,
  LogIn,
  LayoutDashboard
} from 'lucide-react'

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [oumieDropdownOpen, setOumieDropdownOpen] = useState(false)

  const features = [
    {
      title: "Automatic Time Tracking",
      description: "Oumie runs silently in the background. Open Canvas, Google Docs, or any study site and your session is logged automatically. No timers, no manual input, no friction.",
      icon: Zap,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
    {
      title: "Assignment Time Predictor",
      description: "Tell Oumie what you have due and it calculates exactly how long it will take — personalized to your study pace. Get a blueprint for when to start and how to finish on time.",
      icon: Brain,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
    },
    {
      title: "Focus Score",
      description: "A personal 0-100 score built from your session depth, consistency, peak hour alignment, and streak. See your personal best and know exactly what to work on.",
      icon: TrendingUp,
      color: "text-green-400",
      bg: "bg-green-400/10",
    },
    {
      title: "Study Pattern Detection",
      description: "Oumie analyzes your sessions to detect whether you are an early bird, night owl, or afternoon grinder — and tells you your procrastination risk based on real behavioral data.",
      icon: BarChart2,
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
    },
    {
      title: "Streaks and Badges",
      description: "Build daily study streaks and earn badges for consistency, deep focus, and hitting personal records. Motivation that is actually tied to your real behavior.",
      icon: Trophy,
      color: "text-orange-400",
      bg: "bg-orange-400/10",
    },
    {
      title: "Privacy First",
      description: "Your data belongs to you. Oumie never sells your individual information. Aggregated and anonymized insights only — you stay in control.",
      icon: Shield,
      color: "text-teal-400",
      bg: "bg-teal-400/10",
    },
  ]

  const steps = [
    {
      number: "01",
      title: "Add to Chrome",
      description: "Install the free Oumie Chrome extension in seconds. No complicated setup, no credit card, no manual configuration.",
      icon: GraduationCap
    },
    {
      number: "02",
      title: "Study Like Normal",
      description: "Open Canvas, Google Docs, or any study site and just work. Oumie runs silently in the background and tracks everything automatically.",
      icon: Clock
    },
    {
      number: "03",
      title: "See How You Actually Work",
      description: "Log into your personal dashboard to see your study patterns, focus score, streaks, and insights built from your real data.",
      icon: TrendingUp
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      school: "Stanford University",
      year: "Junior",
      quote: "Oumie completely changed how I study. I realized I was wasting 2 hours a day on my phone thinking I was studying. Now I actually know where my time goes.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      school: "University of Michigan",
      year: "Sophomore",
      quote: "The burnout prevention feature literally saved my GPA last midterm season. It told me I was overdoing it before I even felt it.",
      rating: 5
    },
    {
      name: "Priya Patel",
      school: "MIT",
      year: "Senior",
      quote: "I love the gamification aspect. Competing with friends on study streaks actually makes me want to study more. It's addictive in a good way.",
      rating: 5
    }
  ]

  const universityBenefits = [
    "Aggregate, anonymized student wellness data",
    "Identify at-risk students before they drop out",
    "Measure effectiveness of academic programs",
    "Promote healthy study habits campus-wide",
    "Free onboarding and white-label options",
    "FERPA compliant and GDPR ready"
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo with Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOumieDropdownOpen(!oumieDropdownOpen)}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Oumie</span>
                <ChevronDown
                  size={16}
                  className={`text-gray-400 transition-transform ${oumieDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown Menu */}
              {oumieDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-neutral-900 border border-white/20 rounded-xl shadow-xl overflow-hidden z-50">
                  <a
                    href="/login"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors"
                  >
                    <LogIn size={18} className="text-blue-400" />
                    <div>
                      <p className="font-medium text-sm">Sign In</p>
                      <p className="text-xs text-gray-500">Access your account</p>
                    </div>
                  </a>
                  <a
                    href="https://student.oumie.app"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors border-t border-white/10"
                  >
                    <LayoutDashboard size={18} className="text-purple-400" />
                    <div>
                      <p className="font-medium text-sm">Student Dashboard</p>
                      <p className="text-xs text-gray-500">View your study stats</p>
                    </div>
                  </a>
                  <a
                    href="/signup"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors border-t border-white/10"
                  >
                    <GraduationCap size={18} className="text-green-400" />
                    <div>
                      <p className="font-medium text-sm">Sign Up Free</p>
                      <p className="text-xs text-gray-500">Create new account</p>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a>
              <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">How It Works</a>
              <a href="#universities" className="text-gray-400 hover:text-white transition-colors text-sm">For Universities</a>
              <a
                href="/signup"
                className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Get Started Free
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-white/10 px-4 py-4 space-y-4">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-gray-400 hover:text-white text-sm">Features</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block text-gray-400 hover:text-white text-sm">How It Works</a>
            <a href="#universities" onClick={() => setMobileMenuOpen(false)} className="block text-gray-400 hover:text-white text-sm">For Universities</a>
            <hr className="border-white/10 my-2" />
            <a href="/login" className="block text-gray-400 hover:text-white text-sm">
              Sign In
            </a>
            <a href="https://student.oumie.app" className="block text-gray-400 hover:text-white text-sm">
              Student Dashboard
            </a>
            <a
              href="/signup"
              className="block bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg text-center transition-colors"
            >
              Get Started Free
            </a>
          </div>
        )}
      </nav>

      {/* Close dropdown when clicking outside */}
      {oumieDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOumieDropdownOpen(false)}
        />
      )}

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Now available for all college students</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Track Smarter.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Study Better.
            </span>
          </h1>

          <p className="text-base font-light italic text-gray-400 mb-6 tracking-wide">(pronounced: O-MEE)</p>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Oumie automatically tracks your study sessions, reveals your learning patterns,
            and helps you avoid burnout — all without lifting a finger.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/signup"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors flex items-center gap-2 text-lg"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-16 relative">
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden max-w-4xl mx-auto">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/10 rounded-md px-3 py-1 text-sm text-gray-500 text-center">student.oumie.app</div>
                </div>
              </div>
              <div className="p-6 grid grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-sm text-gray-500 mb-1">Today</div>
                  <div className="text-2xl font-bold text-blue-400">1 <span className="text-base font-normal">min</span></div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-sm text-gray-500 mb-1">This Week</div>
                  <div className="text-2xl font-bold text-blue-400">1 <span className="text-base font-normal">min</span></div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-sm text-gray-500 mb-1">Total Hours</div>
                  <div className="text-2xl font-bold text-blue-400">2 <span className="text-base font-normal">min</span></div>
                </div>
                <div className="col-span-2 bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-sm text-gray-500 mb-3">This Week</div>
                  <div className="flex items-end gap-2" style={{ height: '64px' }}>
                    {[0, 0, 0, 1, 0, 0, 0].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        {h > 0 ? (
                          <div
                            className="w-full rounded-t-sm bg-blue-500"
                            style={{ height: '100%' }}
                          />
                        ) : (
                          <div className="w-full rounded-t-sm" style={{ height: '3px', background: 'rgba(255,255,255,0.1)' }} />
                        )}
                        <span className="text-xs text-gray-600">
                          {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-sm text-gray-500 mb-2">Recent Sessions</div>
                  <div className="flex items-center gap-2">
                    <span className="text-base">📝</span>
                    <div>
                      <div className="text-xs font-medium text-white">Google Docs</div>
                      <div className="text-xs text-gray-500">1 min · just now</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-b border-white/10 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-sm text-gray-500 mt-1">Students Tracking</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">500K+</div>
              <div className="text-sm text-gray-500 mt-1">Hours Tracked</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-gray-500 mt-1">Universities</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1">
                <span className="text-3xl font-bold text-white">4.9</span>
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              </div>
              <div className="text-sm text-gray-500 mt-1">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Everything you need to
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                master your studies
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Oumie brings together all the tools you need to study smarter, not harder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:bg-white/8 transition-all duration-300"
                >
                  <div className="inline-flex w-12 h-12 rounded-xl bg-white/10 items-center justify-center mb-4">
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/3">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Get started in minutes. No complicated setup, no credit card required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" style={{ left: '16.66%', right: '16.66%' }}></div>

            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="flex flex-col items-center text-center relative">
                  <div className="relative z-10 w-24 h-24 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                    <Icon className="w-10 h-10 text-blue-400" />
                  </div>
                  <div className="text-sm font-mono text-blue-400 font-bold mb-2">{step.number}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Loved by students</h2>
            <p className="text-gray-500 text-lg">Don&apos;t just take our word for it</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-sm font-bold text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.school} · {testimonial.year}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Universities */}
      <section id="universities" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/3">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
                <GraduationCap className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400 font-medium">For Universities</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                Empower your
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  students&apos; success
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Partner with Oumie to give your institution powerful, anonymized insights into student study behavior
                — without compromising privacy.
              </p>

              <div className="space-y-4 mb-8">
                {universityBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* University Demo Dashboard */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-400">University Dashboard</span>
                <span className="text-xs bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full">Live</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-xs text-gray-500 mb-1">Active Students</div>
                    <div className="text-xl font-bold text-white">2,847</div>
                    <div className="text-xs text-green-400">↑ 23% this semester</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-xs text-gray-500 mb-1">Avg Study/Day</div>
                    <div className="text-xl font-bold text-white">3.2h</div>
                    <div className="text-xs text-green-400">↑ 8% vs last year</div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-xs text-gray-500 mb-3">Student Wellness Score</div>
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center">
                      <span className="text-lg font-bold text-green-400">78</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-300 mb-1">Good — Most students are on track</div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-xs text-gray-500 mb-2">Top Studied Subjects</div>
                  <div className="space-y-2">
                    {[
                      { subject: 'Computer Science', pct: 32, color: 'bg-blue-500' },
                      { subject: 'Mathematics', pct: 24, color: 'bg-purple-500' },
                      { subject: 'Physics', pct: 18, color: 'bg-pink-500' }
                    ].map((s, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-xs text-gray-400 w-28 truncate">{s.subject}</span>
                        <div className="flex-1 bg-white/10 rounded-full h-1.5">
                          <div className={`${s.color} h-1.5 rounded-full`} style={{ width: `${s.pct}%` }}></div>
                        </div>
                        <span className="text-xs text-gray-500">{s.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's New */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">What&apos;s New</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-12">Latest updates to Oumie</h2>
          <div className="flex flex-col gap-6">
            {[
              {
                date: "Feb 2026",
                tag: "New Feature",
                tagColor: "text-green-400 bg-green-400/10",
                title: "Assignment Time Predictor",
                description: "Tell Oumie what you have due and it will tell you exactly how long it will take — personalized to how you actually study. Get a day-by-day study plan built from your real data, not generic estimates.",
              },
              {
                date: "Feb 2026",
                tag: "New Feature",
                tagColor: "text-purple-400 bg-purple-400/10",
                title: "Focus Score",
                description: "A personal 0-100 score built from your session depth, consistency, peak hour alignment, and study streak. Track your personal best and see exactly what to improve.",
              },
              {
                date: "Feb 2026",
                tag: "Improvement",
                tagColor: "text-blue-400 bg-blue-400/10",
                title: "Extension Focus Glow",
                description: "Your extension now glows based on your study state — orange when you have not studied and it is getting late, purple during your peak hours, green when you are in a deep session.",
              },
              {
                date: "Jan 2026",
                tag: "Launch",
                tagColor: "text-yellow-400 bg-yellow-400/10",
                title: "Oumie is live",
                description: "Automatic study time tracking, streaks, insights, and a personal dashboard — all free for students. Install the Chrome extension and start tracking in seconds.",
              },
            ].map(({ date, tag, tagColor, title, description }) => (
              <div key={title} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <div className="w-px flex-1 bg-white/10 mt-2" />
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColor}`}>{tag}</span>
                    <span className="text-xs text-gray-600">{date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-pink-600/20 border border-white/10 rounded-3xl p-12 sm:p-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to study{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                smarter?
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Join thousands of students already tracking their way to better grades.
              It&apos;s completely free — no credit card needed.
            </p>
            <a
              href="/signup"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              Start Tracking Today
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Oumie</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                The smart study tracker that helps college students learn better, avoid burnout, and actually enjoy studying.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-500 hover:text-white text-sm transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-500 hover:text-white text-sm transition-colors">How It Works</a></li>
                <li><a href="#universities" className="text-gray-500 hover:text-white text-sm transition-colors">For Universities</a></li>
                <li><a href="/signup" className="text-gray-500 hover:text-white text-sm transition-colors">Sign Up</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="/about" className="text-gray-500 hover:text-white text-sm transition-colors">About</a></li>
                <li><a href="/contact" className="text-gray-500 hover:text-white text-sm transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-gray-600 text-sm">© 2026 Oumie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
