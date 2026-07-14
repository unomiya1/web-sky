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

export default function ServicesFromData({ data }: { data: HomepageData }) {
  const [activeTab, setActiveTab] = useState<'Package' | 'Series' | 'Non Series'>('Package')
  const [hoveredBackground, setHoveredBackground] = useState<string | null>(null)
  const activePackages =
    activeTab === 'Package'
      ? data.services_packages
      : activeTab === 'Series'
        ? data.services_series
        : data.services_non_series

  return (
    <section
      id="services"
      className={`relative overflow-hidden py-16 text-white ${activeTab === 'Package' ? 'bg-[rgba(15,23,42,0.50)]' : 'bg-neutral-900'
        }`}
      style={
        activeTab === 'Package'
          ? { backgroundImage: `url(${packageBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }
          : undefined
      }
    >
      {activeTab === 'Package' && <div className="absolute inset-0 bg-slate-950/75" />}
      {activeTab !== 'Package' && hoveredBackground && (
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
              onClick={() => setActiveTab(label as 'Package' | 'Series' | 'Non Series')}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${activeTab === label
                ? 'border-sky-teal bg-sky-teal text-white'
                : 'border-white/20 bg-white/10 text-white/80 hover:bg-white/20'
                }`}
            >
              {label}
            </button>
          ))}
        </div>

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
      </div>
    </section>
  )
}
