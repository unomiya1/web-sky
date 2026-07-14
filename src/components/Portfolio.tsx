import { useState } from 'react'
import type { HomepageData } from '../types/homepage'
import professionalImage from '../assets/portofolio/profesional.jpg'
import socialMediaImage from '../assets/portofolio/social media content.jpeg'
import loopProfesional from '../assets/portofolio/loop video/loop_profesional.mp4'
import loopSosmed from '../assets/portofolio/loop video/loop_sosmed.mp4'

export default function PortfolioFromData({ data }: { data: HomepageData }) {
  const [activeTag, setActiveTag] = useState(data.portfolio_tags[0])

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-cover bg-center py-28 text-white scroll-mt-24"
      style={{
        backgroundImage: `url(${activeTag === 'Social Media Content' ? socialMediaImage : professionalImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(15,23,42,0.5),_rgba(15,23,42,0.6))]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="flex flex-col justify-center gap-8 text-left">
            <div className="max-w-xl">
              <h2 className="text-4xl font-semibold tracking-wide text-white md:text-5xl">
                {data.portfolio_title}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                {data.portfolio_subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-start">
              {data.portfolio_tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  className={`rounded-full border px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition ${activeTag === tag
                    ? 'border-sky-teal bg-sky-teal text-slate-950'
                    : 'border-sky-teal/40 bg-sky-teal/10 text-sky-teal hover:bg-sky-teal/20'
                    }`}
                >
                  {tag}
                </button>
              ))}
            </div>

          </div>

          <div className={`mx-auto w-full ${activeTag === 'Social Media Content' ? 'max-w-xs' : 'max-w-2xl'}`}>
            <div className="relative h-[32rem] overflow-hidden rounded-3xl border border-white/10 shadow-xl shadow-slate-950/40">
              <video
                key={activeTag}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              >
                <source
                  src={activeTag === 'Social Media Content' ? loopSosmed : loopProfesional}
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="mt-6 flex justify-center">
              <a
                href={activeTag === 'Professional video' ? `${import.meta.env.BASE_URL}porto-professional` : `${import.meta.env.BASE_URL}portososmed`}
                className="inline-flex rounded-full border border-sky-teal bg-sky-teal/10 px-8 py-3 text-sm font-semibold text-sky-teal transition hover:bg-sky-teal/20"
              >
                View more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
