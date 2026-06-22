'use client'

import { Syne } from 'next/font/google'
import { Inter } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import { useState } from 'react'

const syne = Syne({ subsets: ['latin'], weight: ['700', '800'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] })
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'] })

export default function LoginPage() {
  const [role, setRole] = useState<'insurer' | 'insured'>('insured')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const isInsurer = role === 'insurer'
  const accent = isInsurer ? '#6366F1' : '#10B981'
  const accentHover = isInsurer ? '#4F46E5' : '#059669'
  const accentBg = isInsurer ? '#EEF2FF' : '#D1FAE5'
  const accentText = isInsurer ? '#3730A3' : '#065F46'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // wire to supabase auth here
  }

  return (
    <main className={`${inter.className} bg-white min-h-screen text-[#0D1B2E] flex flex-col`}>

      {/* ── NAV ───────────────────────────────────────────────────────── */}
      <nav className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <a href="/" className={`${syne.className} text-xl font-extrabold tracking-tight text-[#0D1B2E] hover:opacity-80 transition-opacity`}>
            Veris<span style={{ color: accent }}>.</span>
          </a>
          <a href="/" className="text-sm text-gray-400 hover:text-[#0D1B2E] transition-colors">
            ← Back to home
          </a>
        </div>
      </nav>

      {/* ── BODY ──────────────────────────────────────────────────────── */}
      <div className="flex flex-1 min-h-0">

        {/* Left panel — branding */}
        <div className="hidden lg:flex flex-col justify-between w-[45%] bg-gray-50 border-r border-gray-100 px-14 py-16">
          <div>
            <span
              className={`${mono.className} inline-block text-[11px] font-medium tracking-widest uppercase px-3 py-1.5 rounded-full mb-10`}
              style={{ background: accentBg, color: accentText }}
            >
              {isInsurer ? 'Insurer portal' : 'Claimant portal'}
            </span>
            <h2 className={`${syne.className} text-4xl font-extrabold leading-tight text-[#0D1B2E] mb-4`}>
              {isInsurer
                ? <>Your claims<br />pipeline,<br />at a glance<span style={{ color: accent }}>.</span></>
                : <>Track your<br />claim in<br />real time<span style={{ color: accent }}>.</span></>
              }
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mt-4">
              {isInsurer
                ? 'Review AI decisions, fraud signals, coverage analysis, and full audit trails — all in one place.'
                : 'Submit, upload documents, and follow your claim from intake to decision. No calls, no waiting.'
              }
            </p>
          </div>

          {/* Mini feature list */}
          <div className="space-y-4">
            {(isInsurer
              ? ['Claims pipeline & status', 'Fraud scoring + signals', 'AI decision reasoning', 'Full audit trail']
              : ['Submit a claim in minutes', 'Upload supporting documents', 'Track status in real time', 'View full decision summary']
            ).map(f => (
              <div key={f} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: accentBg }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2 2 4-4" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm text-gray-500">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right panel — form */}
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-16">
          <div className="w-full max-w-sm">

            {/* Role toggle */}
            <div className="flex bg-gray-100 rounded-full p-1 mb-8">
              {(['insured', 'insurer'] as const).map(r => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className="flex-1 text-sm font-semibold py-2 rounded-full transition-all duration-200"
                  style={role === r
                    ? { background: '#fff', color: accent, boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }
                    : { background: 'transparent', color: '#9CA3AF' }
                  }
                >
                  {r === 'insured' ? 'I\'m a claimant' : 'I\'m an insurer'}
                </button>
              ))}
            </div>

            {/* Heading */}
            <div className="mb-8">
              <h1 className={`${syne.className} text-2xl font-extrabold text-[#0D1B2E] mb-1`}>
                Welcome back
              </h1>
              <p className="text-sm text-gray-400">
                Sign in to your {role === 'insured' ? 'claimant' : 'insurer'} account
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className={`${mono.className} block text-[11px] text-gray-400 tracking-widest uppercase mb-1.5`}>
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0D1B2E] placeholder-gray-300 outline-none transition-all"
                  onFocus={e => e.target.style.borderColor = accent}
                  onBlur={e => e.target.style.borderColor = '#E5E7EB'}
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className={`${mono.className} block text-[11px] text-gray-400 tracking-widest uppercase`}>
                    Password
                  </label>
                  <a href="/forgot-password" className="text-xs" style={{ color: accent }}>
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#0D1B2E] placeholder-gray-300 outline-none transition-all pr-11"
                    onFocus={e => e.target.style.borderColor = accent}
                    onBlur={e => e.target.style.borderColor = '#E5E7EB'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(v => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors"
                    tabIndex={-1}
                  >
                    {showPassword
                      ? <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>
                      : <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    }
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-white text-sm font-semibold transition-colors mt-2"
                style={{ background: accent }}
                onMouseEnter={e => (e.currentTarget.style.background = accentHover)}
                onMouseLeave={e => (e.currentTarget.style.background = accent)}
              >
                Sign in
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-gray-100" />
              <span className={`${mono.className} text-[11px] text-gray-300`}>or</span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            {/* SSO placeholder */}
            <button
              className="w-full py-3 rounded-xl border border-gray-200 text-sm text-gray-500 font-medium flex items-center justify-center gap-2 hover:border-gray-300 hover:text-[#0D1B2E] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <p className="text-center text-xs text-gray-400 mt-6">
              Don&apos;t have an account?{' '}
              <a href="/contact" className="font-medium" style={{ color: accent }}>
                Contact your insurer
              </a>
            </p>

          </div>
        </div>
      </div>
    </main>
  )
}