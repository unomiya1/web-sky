import { useEffect, useState } from 'react'
import { defaultHomepageData, fetchHomepageData } from './api/client'
import { AboutUsFromData } from './components/AboutUs'
import OurGear from './components/OurGear'
import PortfolioProfessional from './components/PortfolioProfessional'
import Portososmed from './components/Portososmed'
import MiniAboutFromData from './components/MiniAbout'
import Hero from './components/Hero'
import OurTeam from './components/OurTeam'
import ServicesFromData from './components/Services'
import PortfolioFromData from './components/Portfolio'
import ClientFromData from './components/Client'
import ContactFooter from './components/ContactFooter'
import DetailClient from './components/DetailClient'
import type { HomepageData } from './types/homepage'

function App() {
  const [homepage, setHomepage] = useState<HomepageData>(defaultHomepageData)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    fetchHomepageData().then(setHomepage)
    const timer = window.setTimeout(() => setIsVisible(true), 30)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    setIsVisible(false)
    const timer = window.setTimeout(() => setIsVisible(true), 120)
    return () => window.clearTimeout(timer)
  }, [window.location.pathname])

  const path = window.location.pathname.replace(import.meta.env.BASE_URL.slice(0, -1), '')

  const content = path === '/our-gear' ? (
    <OurGear />
  ) : path === '/porto-professional' || path === '/porto-profesional' ? (
    <PortfolioProfessional />
  ) : path === '/portososmed' ? (
    <Portososmed />
  ) : path === '/detail-client' ? (
    <DetailClient />
  ) : (
    <>
      <Hero data={homepage} />
      <AboutUsFromData data={homepage} />
      <MiniAboutFromData data={homepage} />
      <OurTeam />
      <ServicesFromData data={homepage} />
      <PortfolioFromData data={homepage} />
      <ClientFromData data={homepage} />
      <ContactFooter data={homepage} />
    </>
  )

  return <main className={`transition-opacity duration-500 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>{content}</main>
}

export default App
