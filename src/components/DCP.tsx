import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import ContactFooter from './ContactFooter'
import { defaultHomepageData } from '../api/client'
import dcpBgImage from '../assets/services/DCP/dcp-bg.jpg'
import heroImg1 from '../assets/services/DCP/hero/hero-1.jpg'
import heroImg2 from '../assets/services/DCP/hero/hero-2.jpg'
import heroImg3 from '../assets/services/DCP/hero/hero-3.jpg'
import heroImg4 from '../assets/services/DCP/hero/hero-4.jpg'
import { useInView } from '../hooks/useInView'

const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4]

const dcpFeatures = [
  {
    title: 'DCP Creation',
    description: 'JPEG2000 image encoding, MXF wrapping, CPL and PKL generation, prepared for cinema playback.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0013.5 5.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: '2K / 4K Mastering',
    description: '2K and 4K mastering optimized for digital cinema projection and theatrical delivery.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    title: 'Audio Mastering',
    description: '5.1 and 7.1 channel audio conforming, synchronization, leveling, and theatrical mapping.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
  },
  {
    title: 'Quality Control',
    description: 'Comprehensive technical inspection to verify picture, audio, subtitles, metadata, and DCP integrity before delivery.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Subtitle & Localization',
    description: 'Timed subtitles and localized versions prepared according to the required cinema delivery specification.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
  },
  {
    title: 'KDM & Security',
    description: 'KDM generation and delivery for encrypted DCPs when required by the cinema or distributor.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: 'Delivery & Distribution',
    description: 'DCP packaged on CRU DX115 hard drives or via secure digital delivery, ready for cinema ingest.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
]

  type FeatureVariant = 'dark' | 'light' | 'accent'
 
const featureLayout: Record<
  string,
  { span: string; variant: FeatureVariant; tags?: string[]; stat?: string }
> = {
  'DCP Creation': {
    span: 'sm:col-span-2 lg:col-span-4',
    variant: 'dark',
    tags: ['JPEG2000', 'MXF', 'CPL', 'PKL'],
  },
  '2K / 4K Mastering': { span: 'lg:col-span-2', variant: 'light', stat: '2K / 4K' },
  'Audio Mastering': { span: 'lg:col-span-2', variant: 'light', stat: '5.1 / 7.1' },
  'Quality Control': { span: 'lg:col-span-2', variant: 'light' },
  'Subtitle & Localization': { span: 'lg:col-span-2', variant: 'light' },
  'KDM & Security': { span: 'sm:col-span-2 lg:col-span-2', variant: 'light' },
  'Delivery & Distribution': {
    span: 'sm:col-span-2 lg:col-span-4',
    variant: 'accent',
    tags: ['CRU DX115', 'Secure download'],
  },
}

const variantStyles: Record<
  FeatureVariant,
  { card: string; icon: string; title: string; desc: string; tag: string; stat: string }
> = {
  dark: {
    card: 'border-slate-800 bg-[#0D1B2A] hover:border-sky-teal/60 hover:shadow-xl hover:shadow-sky-teal/10',
    icon: 'bg-sky-teal/15 text-cyan-300 group-hover:bg-sky-teal group-hover:text-white',
    title: 'text-white',
    desc: 'text-slate-400',
    tag: 'bg-sky-teal/15 text-cyan-200',
    stat: 'text-cyan-300',
  },
  light: {
    card: 'border-slate-200 bg-white hover:border-sky-teal/40 hover:shadow-lg hover:shadow-sky-teal/5',
    icon: 'bg-sky-teal/10 text-sky-teal group-hover:bg-sky-teal group-hover:text-white',
    title: 'text-gray-900',
    desc: 'text-gray-600',
    tag: 'bg-slate-100 text-slate-600',
    stat: 'text-sky-teal',
  },
  accent: {
    card: 'border-sky-teal/30 bg-sky-teal/10 hover:border-sky-teal hover:shadow-lg hover:shadow-sky-teal/10',
    icon: 'bg-white text-sky-teal group-hover:bg-sky-teal group-hover:text-white',
    title: 'text-slate-900',
    desc: 'text-slate-700',
    tag: 'bg-white text-slate-700',
    stat: 'text-sky-teal',
  },
}

const workflowSteps = [
  { step: '01', title: 'Submit', description: 'Send your final master file and delivery requirements.' },
  { step: '02', title: 'Technical Check', description: 'We review the source for resolution, color, and audio integrity.' },
  { step: '03', title: 'Mastering', description: 'The DCP is built to spec — image, sound, and subtitles combined.' },
  { step: '04', title: 'Quality Control', description: 'Full playback verification against theatrical standards.' },
  { step: '05', title: 'Review', description: 'You review and approve a test screening or checksum report.' },
  { step: '06', title: 'Delivery', description: 'Final package delivered to cinema, festival, or drive.' },
]

function FeatureCard({ feature, index }: { feature: typeof dcpFeatures[0]; index: number }) {
  const [ref, inView] = useInView(0.1)
  const layout = featureLayout[feature.title] ?? { span: '', variant: 'light' as FeatureVariant }
  const s = variantStyles[layout.variant]
  const isWide = layout.variant !== 'light'

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ animationDelay: `${index * 0.08}s` }}
      className={`group flex flex-col justify-between rounded-3xl border p-6 transition-all duration-300 ease-out hover:-translate-y-1 animate-from-bottom ${
        isWide ? 'min-h-[220px] sm:p-8' : ''
      } ${s.card} ${layout.span} ${inView ? 'in-view' : ''}`}
    >
      <div className="flex items-start justify-between">
        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${s.icon}`}>
          {feature.icon}
        </div>
        {layout.stat && (
          <span className={`text-2xl font-semibold tracking-tight ${s.stat}`}>{layout.stat}</span>
        )}
      </div>
 
      <div className={isWide ? 'mt-10' : 'mt-6'}>
        <h3 className={`mb-2 font-semibold ${isWide ? 'text-xl' : 'text-lg'} ${s.title}`}>{feature.title}</h3>
        <p className={`text-sm leading-relaxed ${isWide ? 'max-w-md' : ''} ${s.desc}`}>{feature.description}</p>
 
        {layout.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {layout.tags.map((tag) => (
              <span key={tag} className={`rounded-md px-2.5 py-1 text-xs font-medium ${s.tag}`}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function WorkflowStep({ step, index }: { step: typeof workflowSteps[0]; index: number }) {
  const [ref, inView] = useInView(0.1)
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ animationDelay: `${index * 0.1}s` }}
      className={`group relative flex items-start gap-5 animate-from-bottom ${inView ? 'in-view' : ''}`}
    >
      <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-sky-teal/30 bg-sky-teal/10 text-lg font-bold text-sky-teal transition-all duration-300 group-hover:border-sky-teal group-hover:bg-sky-teal group-hover:text-white group-hover:shadow-lg group-hover:shadow-sky-teal/25">
        {step.step}
      </div>
      <div className="pt-1">
        <h4 className="text-base font-semibold text-sky-200">{step.title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-sky-100">{step.description}</p>
      </div>
    </div>
  )
}

const masteringOptions = [
  { title: 'DCP 2K', price: 'Rp1.500.000', description: 'Mastering 2K for standard digital cinema projection.' },
  { title: 'DCP 4K', price: 'Rp2.500.000', description: 'Mastering 4K for large screens with maximum detail.', featured: true },
]

const serviceOptions = [
  { title: 'DCP + QC', price: 'Rp2.500.000', description: 'Complete DCP with image, audio, and metadata quality checks.' },
  { title: 'DCP + Subtitle', price: 'Rp2.500.000', description: 'Subtitle integration with timecode according to cinema delivery specifications.' },
  { title: 'DCP + KDM', price: 'Rp3.000.000', description: 'KDM creation for encrypted DCP according to cinema needs.' },
]

const deliveryOptions = [
  { title: 'DCP for Festival', price: 'Rp2.500.000', description: 'Prepared for submission and screening at film festivals.' },
  { title: 'DCP for Cinema', price: 'Rp3.500.000', description: 'Theatrical grade delivery for cinema release.', featured: true },
]

function PricingSectionHeader({ number, label, title, subtitle }: { number: string; label: string; title: string; subtitle: string }) {
  const [ref, inView] = useInView(0.1)
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`mb-10 text-center animate-from-bottom ${inView ? 'in-view' : ''}`}
    >
      <p className="text-sm uppercase tracking-[0.3em] text-sky-teal">Section {number}</p>
      <h3 className="mt-3 text-2xl font-semibold text-gray-900 md:text-3xl">{label}</h3>
      <p className="mt-2 text-base font-medium text-gray-700">{title}</p>
      <p className="mx-auto mt-2 max-w-xl text-sm text-gray-500">{subtitle}</p>
      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-sky-teal" />
    </div>
  )
}

function PriceCard({
  item,
  index,
}: {
  item: { title: string; price: string; description: string; featured?: boolean }
  index: number
}) {
  const [ref, inView] = useInView(0.1)
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ animationDelay: `${index * 0.08}s` }}
      className={`group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-teal hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-teal/20 animate-from-bottom ${
        inView ? 'in-view' : ''
      }`}
    >
      <p className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-white">
        {item.title}
      </p>
      <p className="mt-3 text-3xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-white">
        {item.price}
      </p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-sky-100">
        {item.description}
      </p>
    </div>
  )
}
function PricingArrow() {
  return (
    <div className="my-14 flex justify-center text-slate-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  )
}

// Data spesifikasi yang diperkaya dengan Ikon & Badges
const specGroups = [
  {
    id: 'video',
    title: 'Video Specification',
    subtitle: 'Standard format & resolution mapping',
    badge: 'JPEG 2000 / MXF',
    gridSpan: 'lg:col-span-2', // Bento Grid: Card Utama Lebih Lebar
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0013.5 5.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    details: [
      { label: 'Format & Codec', value: 'DCP (Digital Cinema Package) — JPEG 2000 (MXF)' },
      { label: 'Color Space', value: 'XYZ, 12-bit, 4:4:4', tag: 'XYZ 12-bit' },
      { label: 'Frame Rate', value: '24 fps', tag: '24 fps' },
      { label: 'Bitrate Maximum', value: 'up to 250 Mbps', tag: 'Max 250 Mbps' },
      { label: '2K Flat Resolution', value: '1998 × 1080 px (1.85:1)' },
      { label: '2K Scope Resolution', value: '2048 × 858 px (2.39:1)' },
      { label: '4K Resolution (Optional)', value: '3996 × 2160 (Flat) / 4096 × 1716 (Scope)' },
    ],
  },
  {
    id: 'audio',
    title: 'Audio Specification',
    subtitle: 'Uncompressed surround sound',
    badge: '24-bit / 48 kHz',
    gridSpan: 'lg:col-span-1',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.287a6 6 0 010 7.427M9 9a3 3 0 013 3v0a3 3 0 01-3 3H6a3 3 0 01-3-3v0a3 3 0 013-3h3z" />
      </svg>
    ),
    details: [
      { label: 'Audio Format', value: 'Uncompressed PCM (WAV), 24-bit' },
      { label: 'Sample Rate', value: '48 kHz', tag: '48 kHz' },
      { label: 'Channel Config', value: '5.1 Channel (L, R, C, LFE, Ls, Rs), Stereo, or 7.1' },
      { label: '5.1 Mapping', value: 'L/R/Ls/Rs (SFX & Music), C (Dialog), LFE (Bass/Sub)' },
      { label: 'Target Loudness', value: 'Peak -6 dB, ~ -24 LUFS', tag: '-24 LUFS' },
    ],
  },
  {
    id: 'legal',
    title: 'Package & Legal',
    subtitle: 'Delivery structure & compliance',
    badge: 'SMPTE / Interop',
    gridSpan: 'lg:col-span-3', // Bento Grid: Banner Bawah Menyeluruh
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0012 2.748z" />
      </svg>
    ),
    details: [
      { label: 'File Structure', value: 'AssetMap, PKL, CPL, MXF Video & MXF Audio' },
      { label: 'DCP Standard', value: 'Interop or SMPTE compliance' },
      { label: 'Security / Encryption', value: 'Unencrypted is allowed. KDM (Key Delivery Message) is prepared if the DCP is encrypted.' },
      { label: 'Cinema Censorship', value: 'LSF (Letter of Censor) is mandatory for commercial screenings & professional festivals.' },
    ],
  },
]

function SpecBentoCard({ group, index }: { group: typeof specGroups[0]; index: number }) {
  const [ref, inView] = useInView(0.1)

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ animationDelay: `${index * 0.1}s` }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-md transition-all duration-300 hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10 ${group.gridSpan} animate-from-bottom ${
        inView ? 'in-view' : ''
      }`}
    >
      {/* Background Accent Gradient */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-500/5 blur-3xl transition-all duration-500 group-hover:bg-sky-500/15" />

      <div>
        {/* Header Card */}
        <div className="mb-6 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 backdrop-blur-sm">
              {group.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{group.title}</h3>
              <p className="text-xs text-slate-400">{group.subtitle}</p>
            </div>
          </div>
          <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
            {group.badge}
          </span>
        </div>

        {/* Content Item Grid */}
        <div className={`grid gap-5 ${group.id === 'legal' ? 'md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
          {group.details.map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-800/80 bg-slate-950/40 p-4 transition-colors hover:border-slate-700">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">{item.label}</p>
                {item.tag && (
                  <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-sky-400">
                    {item.tag}
                  </span>
                )}
              </div>
              <p className="mt-1.5 text-sm font-semibold text-slate-100">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SpecsSection() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="specs" className="relative overflow-hidden bg-slate-950 py-24 lg:py-32 text-slate-100">
      {/* Decorative Cinematic Background Glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-full -translate-x-1/2 bg-gradient-to-b from-sky-500/10 via-transparent to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`mb-16 text-center animate-from-bottom ${inView ? 'in-view' : ''}`}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-sky-400">Technical Specifications</p>
          <h2 className="mt-3 text-3xl font-extrabold text-white md:text-5xl">
            Standard DCP Specification
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
            The general DCI-compliant specifications we use to ensure your DCP is ready for flawless playback in commercial theaters and at international film festivals.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-sky-500 shadow-lg shadow-sky-500/50" />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid gap-6 lg:grid-cols-3">
          {specGroups.map((group, idx) => (
            <SpecBentoCard key={group.id} group={group} index={idx} />
          ))}
        </div>

        {/* Dynamic Note Footer */}
        <div className="mt-8 flex items-center gap-3 rounded-2xl border border-sky-500/20 bg-sky-950/30 p-5 backdrop-blur-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          <p className="text-sm leading-relaxed text-slate-300">
            Every cinema or festival may have additional technical requirements. We customize DCP configurations precisely based on your film release objectives.
          </p>
        </div>
      </div>
    </section>
  )
}

function HeroSection({ heroInView, heroRef, whatsappLink }: { heroInView: boolean; heroRef: React.RefObject<Element> | ((node: Element | null) => void); whatsappLink: string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-slate-950" style={{ marginTop: '76px', minHeight: 'calc(100vh - 76px)' }}>
      {/* Background slideshow images */}
      <div className="absolute inset-0">
        {heroImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[2000ms] ease-in-out"
            style={{ opacity: idx === currentImageIndex ? 0.6 : 0 }}
          />
        ))}
        {/* Vignette overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(2, 6, 23, 0.65) 70%, rgba(2, 6, 23, 0.95) 100%)',
          }}
        />
        {/* Bottom gradient for smooth transition to next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div
        ref={heroRef as React.RefObject<HTMLDivElement>}
        className={`relative z-10 mx-auto flex min-h-[calc(100vh-76px)] max-w-7xl items-center px-6 py-20 lg:px-10`}
      >
        <div className={`max-w-2xl animate-from-bottom ${heroInView ? 'in-view' : ''}`}>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-sky-teal">Services</p>
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Digital Cinema
            <span className="mt-2 block text-sky-teal">Package</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
            Convert your video into a standard DCP format for cinema screen playback, ready for professional theatrical distribution and film festival submissions worldwide.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`${import.meta.env.BASE_URL}#services`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
            >
              View All Services
            </a>
          </div>

          {/* Slideshow indicator dots */}
          <div className="mt-10 flex gap-2">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  idx === currentImageIndex ? 'w-8 bg-sky-teal' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Show image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function DCP() {
  const links = defaultHomepageData.nav_links
  const navLinks = links.map((link) => ({
    ...link,
    href: link.href.startsWith('#')
      ? `${import.meta.env.BASE_URL}${link.href}`
      : link.href,
  }))

  const whatsappLink = defaultHomepageData.contact_whatsapp.startsWith('http')
    ? defaultHomepageData.contact_whatsapp
    : `https://wa.me/${defaultHomepageData.contact_whatsapp}`

  const [heroRef, heroInView] = useInView(0.1)
  const [featuresHeaderRef, featuresHeaderInView] = useInView(0.1)
  const [workflowHeaderRef, workflowHeaderInView] = useInView(0.1)
  const [serveHeaderRef, serveHeaderInView] = useInView(0.1)
  const [priceHeaderRef, priceHeaderInView] = useInView(0.1)

  return (
    <div className="flex min-h-screen flex-col bg-neutral-50">
      <Navbar
        links={navLinks}
        bgColor="#0D1B2A"
        logoHref={import.meta.env.BASE_URL}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection heroInView={heroInView} heroRef={heroRef} whatsappLink={whatsappLink} />

        {/* Features Section */}
        <section className="bg-neutral-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div
              ref={featuresHeaderRef as React.RefObject<HTMLDivElement>}
              className={`mb-14 text-center animate-from-bottom ${featuresHeaderInView ? 'in-view' : ''}`}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-sky-teal">What We Offer</p>
              <h2 className="mt-3 text-3xl font-semibold text-gray-900 md:text-4xl">DCP Services</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
                End-to-end Digital Cinema Package creation ensuring your content meets international DCI standards for theatrical exhibition.
              </p>
              <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-sky-teal" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
              {dcpFeatures.map((feature, idx) => (
                <FeatureCard key={feature.title} feature={feature} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-28">
          <div className="absolute inset-0">
            <img
              src={dcpBgImage}
              alt=""
              className="h-full w-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/80" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid items-start gap-16 lg:grid-cols-2">
              <div
                ref={workflowHeaderRef as React.RefObject<HTMLDivElement>}
                className={`animate-from-bottom ${workflowHeaderInView ? 'in-view' : ''}`}
              >
                <p className="text-sm uppercase tracking-[0.3em] text-sky-teal">How It Works</p>
                <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Our Workflow</h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400">
                  A streamlined process from your final master to cinema-ready DCP delivery, with quality assurance at every step.
                </p>

                {/* CTA in workflow */}
                <div className="mt-10">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full bg-sky-teal px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-sky-teal-dark hover:shadow-lg hover:shadow-sky-teal/25"
                  >
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="space-y-8">
                {workflowSteps.map((step, idx) => (
                  <WorkflowStep key={step.step} step={step} index={idx} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className="bg-neutral-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div
              ref={serveHeaderRef as React.RefObject<HTMLDivElement>}
              className={`mb-14 max-w-2xl animate-from-bottom ${serveHeaderInView ? 'in-view' : ''}`}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-sky-teal">Who We Serve</p>
              <h2 className="mt-3 text-3xl font-semibold text-gray-900 md:text-4xl">
                Built for creators, brands, and industry professionals
              </h2>
            </div>

            <div className="grid gap-0 divide-x divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-5">
              {[
                {
                  title: 'Filmmakers',
                  description: 'Get your finished feature or short ready for festival and theatrical screening.',
                },
                {
                  title: 'Production Houses',
                  description: 'Reliable, repeatable DCP delivery across every finished production.',
                },
                {
                  title: 'Film Festivals',
                  description: 'Fast, spec-accurate turnaround for programming deadlines.',
                },
                {
                  title: 'Brands & Agencies',
                  description: 'Cinema-grade delivery for theatrical and large-format advertising.',
                },
                {
                  title: 'Film Community',
                  description: 'Screening groups, cineclubs, and collectives bringing independent films to local screens.',
                },
              ].map((item, idx) => {
                const [ref, inView] = useInView(0.1)
                return (
                  <div
                    key={item.title}
                    ref={ref as React.RefObject<HTMLDivElement>}
                    style={{ animationDelay: `${idx * 0.08}s` }}
                    className={`group p-6 transition-colors duration-300 hover:bg-slate-50 sm:p-8 animate-from-bottom ${inView ? 'in-view' : ''}`}
                  >
                    <h3 className="mb-3 text-base font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Technical Specs Section */}
        <SpecsSection />

        {/* Pricelist Section */}
        <section id="pricing" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            {/* Intro */}
            <div
              ref={priceHeaderRef as React.RefObject<HTMLDivElement>}
              className={`mb-16 text-center animate-from-bottom ${priceHeaderInView ? 'in-view' : ''}`}>
              <p className="text-sm uppercase tracking-[0.3em] text-sky-teal">Packages</p>
              <h2 className="mt-3 text-3xl font-semibold text-gray-900 md:text-4xl">
                Pricing built around your release
              </h2>
            </div>

            {/* Section 01 — DCP Mastering */}
            <PricingSectionHeader
              number="01"
              label="DCP Mastering"
              title="Choose your format"
              subtitle=""
            />
            <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
              {masteringOptions.map((item, idx) => (
                <PriceCard key={item.title} item={item} index={idx}/>
              ))}
            </div>

          <PricingArrow />

          {/* Section 02 — DCP Services */}
          <PricingSectionHeader
            number="02"
            label="OPTIONAL"
            title="ADD-ON SERVICES"
            subtitle="Add services if needed."/>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {serviceOptions.map((item, idx) => (
              <PriceCard key={item.title} item={item} index={idx}/>
            ))}
          </div>

          <PricingArrow />

          {/* Section 03 — Delivery */}
          <PricingSectionHeader
            number="03"
            label="RELEASE & DELIVERY"
            title="Choose your destination"
            subtitle=""
            />
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {deliveryOptions.map((item, idx) => (
              <PriceCard key={item.title} item={item} index={idx} />
            ))}
          </div>

          <PricingArrow />

          {/* Section 04 — CTA */}
          <div className="text-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-teal px-10 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-sky-teal-dark hover:shadow-lg hover:shadow-sky-teal/25"
            >
              Start Your Film
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

        {/* Footer */}
        <div className="mt-0">
          <ContactFooter data={defaultHomepageData} />
        </div>
      </main>
    </div>
  )
}
