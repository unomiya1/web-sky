import { useState } from 'react'
import type { HomepageData } from '../types/homepage'
import packageBg from '../assets/services/package bg.jpeg'
import edImage from '../assets/services/non series/ed.jpg'
import psaImage from '../assets/services/non series/psa.jpg'
import vpImage from '../assets/services/non series/vp.jpg'
import sfImage from '../assets/services/non series/sf.jpg'
import bavImage from '../assets/services/non series/bav.jpg'
import cdImage from '../assets/services/non series/cd.jpg'
import cpImage from '../assets/services/non series/cp.jpg'
import lmcImage from '../assets/services/non series/lmc.jpg'
import ytImage from '../assets/services/series/yt.jpg'
import tvImage from '../assets/services/series/tv.jpg'
import dcpImage from '../assets/services/DCP/dcp.jpg'
import dcpBgImage from '../assets/services/DCP/dcp-bg.jpg'
import { useInView } from '../hooks/useInView'

const nonSeriesImages: Record<string, string> = {
  'EVENT DOCUMENTATION': edImage,
  'PUBLIC SERVICE ANNOUNCEMENT': psaImage,
  'VIDEO PRODUCT': vpImage,
  'SHORT MOVIE/DRAMA': sfImage,
  'BRAND ACTIVATION VIDEO': bavImage,
  'COMMERCIAL DOCUMENTARY': cdImage,
  'CORPORATE PROFILE': cpImage,
  'LIVE EVENT MULTICAM VIDEO': lmcImage,
}

const getSeriesHoverImage = (serviceName: string) => {
  const normalizedName = serviceName.toUpperCase()

  if (normalizedName.includes('YOUTUBE')) {
    return ytImage
  }

  if (normalizedName.includes('TV') || normalizedName.includes('TELEVISION')) {
    return tvImage
  }

  return undefined
}

type ServiceItem = { name: string; price?: string; frequency?: string; subtitle?: string; features: string[] }

function ServiceCard({
  service,
  index,
  activeTab,
  nonSeriesHoverImage,
  onMouseEnter,
  onMouseLeave,
}: {
  service: ServiceItem
  index: number
  activeTab: string
  nonSeriesHoverImage?: string
  seriesHoverImage?: string
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  const [ref, inView] = useInView(0.1)
  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      key={service.name}
      style={{ animationDelay: `${index * 0.08}s` }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/20 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-sky-teal/40 hover:shadow-2xl hover:shadow-slate-950/40 animate-from-bottom ${inView ? 'in-view' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {activeTab === 'Non Series' && nonSeriesHoverImage && (
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
          <img
            src={nonSeriesHoverImage}
            alt={service.name}
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>
      )}

      <div className="relative z-10">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.48em] text-sky-teal">{service.name}</p>
          <h3 className="mt-4 text-3xl font-semibold text-white">
            {service.price}
            <span className="text-base font-medium text-slate-400">{service.frequency}</span>
          </h3>
        </div>
        <p className="mb-6 text-sm text-slate-300">{service.subtitle}</p>
        <ul className="space-y-4 text-sm leading-6 text-slate-300">
          {service.features.map((feature) => (
            <li key={feature} className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-teal" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

function DCPCard() {
  const [ref, inView] = useInView(0.1)
  const basePath = import.meta.env.BASE_URL

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 shadow-xl shadow-slate-950/20 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-sky-teal/40 hover:shadow-2xl hover:shadow-sky-teal/10 animate-from-bottom ${inView ? 'in-view' : ''}`}
    >
      {/* Background image with 30% blur - interactive like Non Series */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <img
          src={dcpImage}
          alt="Digital Cinema Package"
          className="h-full w-full object-cover opacity-90"
          style={{ filter: 'blur(8px)' }}
        />
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      <div className="relative z-10 flex flex-col items-center p-8 text-center sm:p-10">
        {/* Image preview - only visible on hover */}
        <div className="mb-8 w-full overflow-hidden rounded-2xl opacity-0 transition-all duration-500 group-hover:opacity-100">
          <img
            src={dcpImage}
            alt="Digital Cinema Package"
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-56"
          />
        </div>

        {/* Title */}
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.48em] text-sky-teal">DCP</p>
          <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Digital Cinema Package</h3>
        </div>

        {/* Description (replaces price) */}
        <p className="mb-8 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
          Convert your video into a standard format for cinema screen playback, ready for various professional applications.
        </p>

        {/* View Detail button */}
        <a
          href={`${basePath}dcp`}
          className="inline-flex items-center gap-2 rounded-full border border-sky-teal/50 bg-sky-teal/10 px-6 py-3 text-sm font-semibold text-sky-teal transition-all duration-300 hover:border-sky-teal hover:bg-sky-teal hover:text-white hover:shadow-lg hover:shadow-sky-teal/25"
        >
          View Detail
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </article>
  )
}

export default function ServicesFromData({ data }: { data: HomepageData }) {
  const [activeTab, setActiveTab] = useState<'Package' | 'Series' | 'Non Series' | 'DCP'>('Package')
  const [hoveredBackground, setHoveredBackground] = useState<string | null>(null)
  const activePackages =
    activeTab === 'Package'
      ? data.services_packages
      : activeTab === 'Series'
        ? data.services_series
        : activeTab === 'Non Series'
          ? data.services_non_series
          : []

  return (
    <section
      id="services"
      className={`relative overflow-hidden py-16 text-white ${activeTab === 'Package' || activeTab === 'DCP' ? 'bg-[rgba(15,23,42,0.50)]' : 'bg-neutral-900'
        }`}
      style={
        activeTab === 'Package'
          ? { backgroundImage: `url(${packageBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }
          : activeTab === 'DCP'
            ? { backgroundImage: `url(${dcpBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }
            : undefined
      }
    >
      {activeTab === 'Package' && <div className="absolute inset-0 bg-slate-950/75" />}
      {activeTab === 'DCP' && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-slate-950/65" style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }} />
        </div>
      )}
      {activeTab !== 'Package' && activeTab !== 'DCP' && hoveredBackground && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src={hoveredBackground}
            alt="Background preview"
            className={`h-full w-full scale-110 object-cover opacity-25 ${activeTab === 'Non Series' ? 'blur-3xl' : ''}`}
          />
          <div className="absolute inset-0 bg-slate-950/35" />
        </div>
      )}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-medium tracking-wide text-white md:text-3xl">
            {data.services_title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-14 bg-sky-teal" />
        </div>

        <div className="mb-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {data.services_option_labels.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => setActiveTab(label as 'Package' | 'Series' | 'Non Series' | 'DCP')}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${activeTab === label
                ? 'border-sky-teal bg-sky-teal text-white'
                : 'border-white/20 bg-white/10 text-white/80 hover:bg-white/20'
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        {activeTab === 'DCP' ? (
          <div className="mx-auto max-w-xl">
            <DCPCard />
          </div>
        ) : (
          <div className={`grid gap-6 ${activeTab === 'Package'
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            : activeTab === 'Series'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
            }`}>
            {activePackages.map((service, idx) => {
              const seriesHoverImage = activeTab === 'Series' ? getSeriesHoverImage(service.name) : undefined
              const nonSeriesHoverImage = activeTab === 'Non Series' ? nonSeriesImages[service.name] : undefined
              return (
                <ServiceCard
                  key={service.name}
                  service={service}
                  index={idx}
                  activeTab={activeTab}
                  nonSeriesHoverImage={nonSeriesHoverImage}
                  seriesHoverImage={seriesHoverImage}
                  onMouseEnter={() => {
                    const targetImage = activeTab === 'Series' ? seriesHoverImage : nonSeriesHoverImage
                    if (targetImage) setHoveredBackground(targetImage)
                  }}
                  onMouseLeave={() => setHoveredBackground(null)}
                />
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

