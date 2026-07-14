import { useEffect, useState } from 'react'
import type { HomepageData } from '../types/homepage'
import heroImage1 from '../assets/Homepage/Alia Hospital.webp'
import heroImage2 from '../assets/Homepage/IMG-20251020-WA0113.webp'
import heroImage3 from '../assets/Homepage/Kementrans2.webp'
import heroImage4 from '../assets/Homepage/Kementrans.webp'
import heroImage5 from '../assets/Homepage/loka sehat.webp'
import Navbar from './Navbar'

interface HeroProps {
  data: HomepageData
}

const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5]

export default function Hero({ data }: HeroProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % heroImages.length)
    }, 4000)
    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 80)
    return () => window.clearTimeout(id)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center text-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        {heroImages.map((image, index) => {
          const isActive = index === activeImageIndex
          return (
            <div
              key={`${image}-${index}`}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${isActive
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-110'
                }`}
              style={{ backgroundImage: `url(${image})` }}
              aria-hidden="true"
            />
          )
        })}
      </div>
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

      <Navbar links={data.nav_links} />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24">
        <h1
          style={{ animationDelay: '0.1s' }}
          className={`text-3xl font-extrabold uppercase leading-tight tracking-wide sm:text-4xl md:text-5xl lg:text-6xl ${mounted ? 'in-view animate-from-top' : 'animate-from-top'}`}
        >
          {data.hero_title}
        </h1>
        <p
          style={{ animationDelay: '0.25s' }}
          className={`mt-4 text-sm font-medium uppercase tracking-[0.35em] text-white/90 sm:text-base md:mt-6 ${mounted ? 'in-view animate-from-top' : 'animate-from-top'}`}
        >
          {data.hero_subtitle}
        </p>
        <a
          href={data.cta_link}
          style={{ animationDelay: '0.4s' }}
          className={`mt-8 inline-block rounded-md bg-sky-teal px-8 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-sky-teal-dark md:mt-10 md:px-10 md:py-3.5 md:text-base ${mounted ? 'in-view animate-from-top' : 'animate-from-top'}`}
        >
          {data.cta_text}
        </a>
      </div>
    </section>
  )
}
