'use client'

import { Syne } from 'next/font/google'
import { Inter } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import { useEffect, useState } from 'react'

const syne = Syne({ subsets: ['latin'], weight: ['700', '800'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] })
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'] })

const CLAIM_ENTRIES = [
  { time: '09:14:02', id: 'CLM-2041', status: 'ok',        msg: 'Storm damage claim received' },
  { time: '09:14:04', id: 'CLM-2041', status: 'ok',        msg: 'Documents verified' },
  { time: '09:14:06', id: 'CLM-2041', status: 'ok',        msg: 'Weather records confirmed' },
  { time: '09:14:08', id: 'CLM-2041', status: 'approved',  msg: 'Claim approved · $42,800 · ref #4471' },
  { time: '09:21:11', id: 'CLM-2198', status: 'ok',        msg: 'Equipment breakdown claim received' },
  { time: '09:21:13', id: 'CLM-2198', status: 'ok',        msg: 'Diagnostic report reviewed' },
  { time: '09:21:15', id: 'CLM-2198', status: 'approved',  msg: 'Claim approved · $18,400 · ref #4472' },
  { time: '09:33:22', id: 'CLM-2301', status: 'ok',        msg: 'Liability claim received' },
  { time: '09:33:24', id: 'CLM-2301', status: 'escalated', msg: 'Referred to specialist · ref #4473' },
]

const STATUS_COLORS: Record<string, { dot: string; text: string; bg: string }> = {
  ok:        { dot: '#059669', text: '#065F46', bg: '#ECFDF5' },
  approved:  { dot: '#16A34A', text: '#14532D', bg: '#F0FDF4' },
  escalated: { dot: '#D97706', text: '#92400E', bg: '#FFFBEB' },
  denied:    { dot: '#DC2626', text: '#7F1D1D', bg: '#FEF2F2' },
}

const COVERAGE_TYPES = [
  { label: 'Property',              icon: '🏢', desc: 'Buildings, assets, and physical infrastructure against damage, theft, and loss.' },
  { label: 'Equipment',             icon: '⚙️', desc: 'Mechanical and electrical breakdown coverage for critical operational assets.' },
  { label: 'Public Liability',      icon: '🤝', desc: 'Protection against third-party injury or property damage claims.' },
  { label: 'Business Interruption', icon: '📊', desc: 'Revenue protection when operations are suspended by a covered event.' },
  { label: 'Cargo & Transit',       icon: '🚢', desc: 'End-to-end coverage for goods in transit across road, rail, and sea.' },
]

const WHY = [
  {
    title: 'Claims resolved, not delayed',
    body:  'Most claims are assessed and decided within hours, not weeks. Every step of your claim is logged and trackable from submission to settlement.',
  },
  {
    title: 'A clear record, always',
    body:  'You never have to wonder what happened to your claim. Every decision comes with a full explanation — accessible to you, your broker, or your legal team.',
  },
  {
    title: 'Built for businesses that cannot afford to wait',
    body:  'Downtime costs money. Our claims process is designed around the reality that operational disruption compounds the longer a claim takes to resolve.',
  },
]

export default function Home() {
  const [count, setCount] = useState(1)

  useEffect(() => {
    if (count >= CLAIM_ENTRIES.length) return
    const t = setTimeout(() => setCount(c => c + 1), 900)
    return () => clearTimeout(t)
  }, [count])

  return (
    <main className={`${inter.className} bg-white min-h-screen text-[#0D1B2E] overflow-x-hidden`}>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-track {
          animation: ticker 36s linear infinite;
          display: flex;
          width: max-content;
        }
        .ticker-track:hover { animation-play-state: paused; }
        .log-row { transition: opacity 0.4s; }
      `}</style>

      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <nav className="border-b border-[#E8EDF2] bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <span className={`${syne.className} text-xl font-extrabold tracking-tight text-[#0D1B2E]`}>
            Veris<span className="text-[#00C9A7]">.</span>
          </span>
          <div className="flex items-center gap-8">
            <a href="#coverage" className="hidden sm:block text-sm text-[#64748B] hover:text-[#0D1B2E] transition-colors">Coverage</a>
            <a href="#claims"   className="hidden sm:block text-sm text-[#64748B] hover:text-[#0D1B2E] transition-colors">Claims</a>
            <a href="#why"      className="hidden sm:block text-sm text-[#64748B] hover:text-[#0D1B2E] transition-colors">Why Veris</a>
            <a
              href="/login"
              className="text-sm px-5 py-2 rounded-full bg-[#0D1B2E] text-white font-semibold hover:bg-[#1A2D4A] transition-colors"
            >
              Log in
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <span className={`${mono.className} inline-block text-[11px] text-[#00A88A] tracking-widest uppercase bg-[#F0FDF9] border border-[#A7F3D0] px-3 py-1 rounded-full mb-6`}>
            Commercial Insurance
          </span>
          <h1 className={`${syne.className} text-5xl lg:text-[3.5rem] font-extrabold leading-[1.06] tracking-tight mb-6 text-[#0D1B2E]`}>
            Claims resolved.<br />Not just filed<span className="text-[#00C9A7]">.</span>
          </h1>
          <p className="text-[#64748B] text-lg leading-relaxed mb-10 max-w-md">
            Veris processes commercial insurance claims with speed and full transparency — so you always know where your claim stands and why a decision was made.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/login"
              className="px-6 py-3 rounded-full bg-[#0D1B2E] text-white text-sm font-semibold hover:bg-[#1A2D4A] transition-colors"
            >
              Log in to your account
            </a>
            <a
              href="#coverage"
              className="px-6 py-3 rounded-full border border-[#E2E8F0] text-sm text-[#64748B] hover:border-[#0D1B2E] hover:text-[#0D1B2E] transition-colors"
            >
              View coverage →
            </a>
          </div>

          <div className="flex gap-10 mt-12 pt-8 border-t border-[#E8EDF2]">
            {[
              { val: 'Same day', label: 'Average claim decision' },
              { val: 'Full',     label: 'Claim transparency' },
              { val: '24 / 7',   label: 'Portal access' },
            ].map(s => (
              <div key={s.label}>
                <div className={`${syne.className} text-2xl font-bold text-[#00C9A7]`}>{s.val}</div>
                <div className="text-xs text-[#94A3B8] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — light log panel */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] overflow-hidden shadow-sm">
          {/* Panel header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#E2E8F0] bg-white">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00C9A7] animate-pulse" />
              <span className={`${mono.className} text-xs text-[#64748B]`}>veris · claims · live</span>
            </div>
            <span className={`${mono.className} text-[11px] text-[#CBD5E1]`}>today</span>
          </div>
          {/* Log entries */}
          <div className="p-5 space-y-2 min-h-[320px]">
            {CLAIM_ENTRIES.slice(0, count).map((entry, i) => {
              const s = STATUS_COLORS[entry.status] ?? STATUS_COLORS.ok
              return (
                <div
                  key={i}
                  className="log-row flex items-center gap-3 py-1.5 px-3 rounded-lg bg-white border border-[#E2E8F0]"
                  style={{ opacity: i === count - 1 ? 1 : 0.7 }}
                >
                  <span className={`${mono.className} text-[11px] text-[#94A3B8] shrink-0 tabular-nums`}>{entry.time}</span>
                  <span className={`${mono.className} text-[11px] font-medium text-[#3B82F6] shrink-0`}>{entry.id}</span>
                  <span
                    className={`${mono.className} text-[11px] px-2 py-0.5 rounded-full shrink-0`}
                    style={{ background: s.bg, color: s.text }}
                  >
                    ● {entry.status}
                  </span>
                  <span className={`${mono.className} text-[11px] text-[#475569] truncate`}>{entry.msg}</span>
                </div>
              )
            })}
            {count < CLAIM_ENTRIES.length && (
              <span className={`${mono.className} text-xs text-[#CBD5E1] animate-pulse`}>▊</span>
            )}
          </div>
        </div>
      </section>

      {/* ── TICKER ──────────────────────────────────────────────────────── */}
      <div className="border-y border-[#E2E8F0] bg-[#F8FAFC] py-2.5 overflow-hidden">
        <div className="ticker-track">
          {[...CLAIM_ENTRIES, ...CLAIM_ENTRIES].map((e, i) => {
            const s = STATUS_COLORS[e.status] ?? STATUS_COLORS.ok
            return (
              <span key={i} className={`${mono.className} text-[11px] text-[#94A3B8] px-8 shrink-0 whitespace-nowrap`}>
                <span style={{ color: s.dot }}>●</span>
                &nbsp;{e.id} · {e.msg}
              </span>
            )
          })}
        </div>
      </div>

      {/* ── COVERAGE ────────────────────────────────────────────────────── */}
      <section id="coverage" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <p className={`${mono.className} text-[11px] text-[#00A88A] tracking-widest uppercase mb-3`}>Coverage</p>
        <h2 className={`${syne.className} text-3xl font-bold mb-12 text-[#0D1B2E]`}>Built for commercial operations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {COVERAGE_TYPES.map((c) => (
            <div key={c.label} className="rounded-xl border border-[#E2E8F0] bg-white p-6 hover:border-[#00C9A7] hover:shadow-sm transition-all group">
              <div className="text-2xl mb-4">{c.icon}</div>
              <p className={`${syne.className} text-sm font-bold text-[#0D1B2E] mb-2`}>{c.label}</p>
              <p className="text-xs text-[#64748B] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW CLAIMS WORK ─────────────────────────────────────────────── */}
      <section id="claims" className="border-t border-[#E8EDF2] bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <p className={`${mono.className} text-[11px] text-[#00A88A] tracking-widest uppercase mb-3`}>How it works</p>
          <h2 className={`${syne.className} text-3xl font-bold mb-12 text-[#0D1B2E]`}>Three steps. No chasing.</h2>
          <div className="flex flex-col lg:flex-row items-stretch gap-3">
            {[
              { step: '01', label: 'Submit your claim',       desc: 'Log in to your portal, upload your documents, and submit. The whole process takes under ten minutes.' },
              { step: '02', label: 'We review the evidence',  desc: 'Your submission is assessed against your policy and independently verified. Track status in real time.' },
              { step: '03', label: 'Decision and payout',     desc: 'You receive a full written decision with the reasoning behind it. Approved claims are settled without delay.' },
            ].map((s, i) => (
              <div key={s.step} className="flex lg:flex-row flex-col items-stretch flex-1 gap-3">
                <div className="rounded-xl border border-[#E2E8F0] bg-white p-6 flex-1">
                  <p className={`${syne.className} text-4xl font-extrabold text-[#E2E8F0] mb-4`}>{s.step}</p>
                  <p className={`${syne.className} text-sm font-bold text-[#0D1B2E] mb-2`}>{s.label}</p>
                  <p className="text-xs text-[#64748B] leading-relaxed">{s.desc}</p>
                </div>
                {i < 2 && (
                  <div className="text-[#CBD5E1] text-xl self-center hidden lg:block">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY VERIS ───────────────────────────────────────────────────── */}
      <section id="why" className="border-t border-[#E8EDF2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <p className={`${mono.className} text-[11px] text-[#00A88A] tracking-widest uppercase mb-3`}>Why Veris</p>
          <h2 className={`${syne.className} text-3xl font-bold mb-12 text-[#0D1B2E]`}>
            Insurance you can actually hold us to<span className="text-[#00C9A7]">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {WHY.map((p) => (
              <div key={p.title} className="rounded-xl border border-[#E2E8F0] bg-white p-7">
                <div className="w-8 h-0.5 bg-[#00C9A7] mb-5" />
                <h3 className={`${syne.className} text-base font-bold mb-3 text-[#0D1B2E]`}>{p.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="border-t border-[#E8EDF2] bg-[#0D1B2E]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28 text-center">
          <h2 className={`${syne.className} text-4xl lg:text-5xl font-extrabold mb-5 text-white`}>
            Already a policyholder<span className="text-[#00C9A7]">?</span>
          </h2>
          <p className="text-[#8BA4C0] text-lg mb-10 max-w-md mx-auto">
            Log in to file a claim, check your policy, or track an existing submission.
          </p>
          <a
            href="/login"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#00C9A7] text-white font-semibold text-base hover:bg-[#00B494] transition-colors"
          >
            Log in to your account
          </a>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-[#1A2D4A] bg-[#0D1B2E]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex items-center justify-between">
          <span className={`${syne.className} font-extrabold text-white`}>
            Veris<span className="text-[#00C9A7]">.</span>
          </span>
          <span className={`${mono.className} text-xs text-[#3D5870]`}>
            Commercial insurance · Claims portal
          </span>
        </div>
      </footer>
    </main>
  )
}