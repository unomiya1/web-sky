import Navbar from './Navbar'
import ContactFooter from './ContactFooter'
import { defaultHomepageData } from '../api/client'
import aliaLogo from '../assets/porto_sosmed/alia.png'
import tsLogo from '../assets/porto_sosmed/3s.jpeg'
import rspjLogo from '../assets/porto_sosmed/rs premiere j.png'
import columbiaLogo from '../assets/porto_sosmed/columbia asia.png'

type PortfolioCard = {
  id: number
  title: string
  subtitle: string
  image?: string
  url?: string
  bold?: boolean
}

export default function Portososmed() {
  const links = defaultHomepageData.nav_links
  const navLinks = links.map((link) => ({
    ...link,
    href: link.href.startsWith('#')
      ? `${import.meta.env.BASE_URL}${link.href}`
      : link.href,
  }))

  const cards: PortfolioCard[] = [
    {
      id: 1,
      title: 'Alia Hospital',
      subtitle: 'Longform & Youtube Shorts',
      image: aliaLogo,
      url: 'https://youtu.be/bCOvAHkvCnk',
      bold: true,
    },
    {
      id: 2,
      title: '3S Corner',
      subtitle: 'Shorts & Fun Content',
      image: tsLogo,
      url: 'https://www.instagram.com/reel/DaPHBGOPpHv/?igsh=a3R3Y2d3ZzJ4amNt',
      bold: true,
    },
    {
      id: 3,
      title: 'RS Premiere Jatinegara',
      subtitle: 'Longform Youtube Video',
      image: rspjLogo,
      url: 'https://youtu.be/ZSfWlxPi5ow',
      bold: true,
    },
    {
      id: 4,
      title: 'Columbia Asia',
      subtitle: 'Longform Youtube Video',
      image: columbiaLogo,
      url: '#',
      bold: true,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-neutral-50">
      <Navbar
        links={navLinks}
        bgColor="#0D1B2A"
        logoHref={`${import.meta.env.BASE_URL}#home`}
      />

      <main className="flex-1 pt-32 pb-0 lg:pt-36 lg:pb-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-semibold text-gray-900 md:text-4xl">Portofolio</h1>
            <p className="mx-auto mt-5 max-w-md text-sm uppercase tracking-[0.2em] text-slate-500">
              portofolio lists :
            </p>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-sky-teal" />
            <div className="mx-auto mt-6 flex justify-center gap-4">
              <a
                href={`${import.meta.env.BASE_URL}porto-professional`}
                className="rounded-full border border-sky-teal/40 bg-sky-teal/10 px-5 py-2 text-sm font-semibold text-sky-teal transition hover:bg-sky-teal/20"
              >
                Professional video
              </a>
              <a
                href={`${import.meta.env.BASE_URL}portososmed`}
                className="rounded-full border border-sky-teal/40 bg-sky-teal/10 px-5 py-2 text-sm font-semibold text-sky-teal transition hover:bg-sky-teal/20"
              >
                Social Media Content
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {cards.map((c) => (
              <article
                key={c.id}
                className="group flex h-72 flex-col items-center justify-between rounded border border-sky-teal/20 bg-gray-50 p-8 text-center shadow-sm transition-all duration-300 ease-out hover:-translate-y-[7px] hover:border-sky-teal/40 hover:shadow-xl hover:shadow-slate-900/10"
              >
                <div className="space-y-4">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={c.title}
                      className="mx-auto h-20 w-36 rounded object-contain transition-transform duration-300 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <div className="mx-auto h-20 w-36 rounded border border-slate-200 bg-white/60" />
                  )}

                  <div>
                    <h3 className={`text-lg ${c.bold ? 'font-black' : 'font-semibold'} text-gray-900`}>
                      {c.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-600">{c.subtitle}</p>
                  </div>
                </div>

                <div className="mt-4 w-full">
                  <a
                    className="inline-flex mx-auto rounded-full border border-sky-teal/40 px-4 py-1 text-sm font-medium text-sky-teal transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-sky-teal hover:text-white hover:shadow-md"
                    href={c.url ?? '#'}
                    target={c.url ? '_blank' : undefined}
                    rel={c.url ? 'noreferrer noopener' : undefined}
                  >
                    Watch Here
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <ContactFooter data={defaultHomepageData} />
        </div>
      </main>
    </div>
  )
}
