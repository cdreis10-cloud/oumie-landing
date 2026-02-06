'use client'

import { useState } from 'react'
import {
  GraduationCap,
  BarChart3,
  Clock,
  Trophy,
  Brain,
  Shield,
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Menu,
  X,
  Play
} from 'lucide-react'

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      icon: Zap,
      title: "Automatic Tracking",
      description: "Oumie runs quietly in the background, automatically logging your study sessions without any manual input required.",
      color: "text-blue-400"
    },
    {
      icon: BarChart3,
      title: "Learning Insights",
      description: "Get deep analytics on your study patterns, peak performance hours, and subject-specific progress over time.",
      color: "text-purple-400"
    },
    {
      icon: Trophy,
      title: "Gamified Progress",
      description: "Earn badges, hit streaks, and level up as you study. Stay motivated with achievements that celebrate your consistency.",
      color: "text-yellow-400"
    },
    {
      icon: Users,
      title: "Class Communities",
      description: "Connect with classmates, share study strategies, and collaborate on courses through built-in community features.",
      color: "text-green-400"
    },
    {
      icon: Brain,
      title: "Burnout Prevention",
      description: "AI-powered burnout detection monitors your study intensity and recommends breaks before you hit the wall.",
      color: "text-red-400"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data stays yours. End-to-end encryption and strict privacy policies ensure your study data is never shared.",
      color: "text-teal-400"
    }
  ]

  const steps = [
    {
      number: "01",
      title: "Download & Sign Up",
      description: "Create your free account in under 30 seconds. Connect your student email to verify your status.",
      icon: GraduationCap
    },
    {
      number: "02",
      title: "Study Naturally",
      description: "Open a textbook, watch a lecture, or work on assignments. Oumie tracks everything automatically in the background.",
      icon: Clock
    },
    {
      number: "03",
      title: "See Your Progress",
      description: "Check your personalized dashboard for insights, streaks, and recommendations tailored to your learning style.",
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
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Oumie</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a>
              <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">How It Works</a>
              <a href="#universities" className="text-gray-400 hover:text-white transition-colors text-sm">For Universities</a>
              <a href="https://oumie-dashboard.vercel.app/login" className="text-gray-400 hover:text-white transition-colors text-sm">Login</a>
              <a
                href="https://oumie-dashboard.vercel.app/signup"
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
            <a href="https://oumie-dashboard.vercel.app/login" className="block text-gray-400 hover:text-white text-sm">Login</a>
            <a
              href="https://oumie-dashboard.vercel.app/signup"
              className="block bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg text-center transition-colors"
            >
              Get Started Free
            </a>
          </div>
        )}
      </nav>

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

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Oumie automatically tracks your study sessions, reveals your learning patterns,
            and helps you avoid burnout — all without lifting a finger.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://oumie-dashboard.vercel.app/signup"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors flex items-center gap-2 text-lg"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </a>
            <button className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:border-white/60 transition-colors">
                <Play className="w-5 h-5 ml-0.5" />
              </div>
              <span className="text-sm font-medium">Watch Demo</span>
            </button>
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
                  <div className="bg-white/10 rounded-md px-3 py-1 text-sm text-gray-500 text-center">oumie-dashboard.vercel.app</div>
                </div>
              </div>
              <div className="p-6 grid grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-sm text-gray-500 mb-1">Study Hours</div>
                  <div className="text-2xl font-bold text-blue-400">24.5h</div>
                  <div className="text-xs text-green-400 mt-1">↑ 12% this week</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-sm text-gray-500 mb-1">Current Streak</div>
                  <div className="text-2xl font-bold text-yellow-400">🔥 7 days</div>
                  <div className="text-xs text-gray-500 mt-1">Personal best!</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-sm text-gray-500 mb-1">Level</div>
                  <div className="text-2xl font-bold text-purple-400">Lvl 12</div>
                  <div className="text-xs text-gray-500 mt-1">42% to next level</div>
                </div>
                <div className="col-span-2 bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-sm text-gray-500 mb-3">Weekly Study Hours</div>
                  <div className="flex items-end gap-2 h-16">
                    {[3, 5, 2, 7, 4, 6, 3].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full rounded-t-sm"
                          style={{
                            height: `${(h / 7) * 100}%`,
                            background: i === 3 ? 'linear-gradient(to top, #3b82f6, #8b5cf6)' : 'rgba(255,255,255,0.1)'
                          }}
                        ></div>
                        <span className="text-xs text-gray-600">
                          {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-sm text-gray-500 mb-2">Top Subject</div>
                  <div className="text-sm font-medium text-white">Computer Science</div>
                  <div className="mt-2 w-full bg-white/10 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">68% of study time</div>
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
                href="#"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Contact Sales
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
              href="https://oumie-dashboard.vercel.app/signup"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              Start Tracking Today
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-16 px-6 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Get Started on Mobile</h2>
          <p className="text-neutral-400 mb-8">Scan to create your account</p>
          <div className="inline-block bg-white p-4 rounded-xl">
            <img
              src="/qr-code.png"
              alt="Scan to sign up for Oumie"
              className="w-48 h-48"
            />
          </div>
          <p className="text-neutral-500 text-sm mt-4">
            Works on any device with a camera
          </p>
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
                <li><a href="https://oumie-dashboard.vercel.app/signup" className="text-gray-500 hover:text-white text-sm transition-colors">Sign Up</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">About</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Careers</a></li>
                <li><a href="/contact" className="text-gray-500 hover:text-white text-sm transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">© 2025 Oumie. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
