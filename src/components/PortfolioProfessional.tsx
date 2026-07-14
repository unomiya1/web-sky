import Navbar from './Navbar'
import ContactFooter from './ContactFooter'
import { defaultHomepageData } from '../api/client'
import baritoPacificLogo from '../assets/porto_profesional/barito pacific.png'
import stirEducationLogo from '../assets/porto_profesional/stir.webp'
import firstmediaLogo from '../assets/porto_profesional/first media.webp'
import baktiBaritoLogo from '../assets/porto_profesional/bakti barito.png'
import bulogLogo from '../assets/porto_profesional/bulog.png'
import chandraLogo from '../assets/porto_profesional/chandra asri.svg'
import pertaminaLogo from '../assets/porto_profesional/pertamina lubi.png'
import bptaperaLogo from '../assets/porto_profesional/bptapera.png'
import rspremierLogo from '../assets/porto_profesional/rs premiere j.png'
import ameroLogo from '../assets/porto_profesional/amero.png'
import SMILogo from '../assets/porto_profesional/SMI.webp'
import ifgLogo from '../assets/porto_profesional/ifg.png'
import kemluLogo from '../assets/porto_profesional/Kemlu.png'
import dprLogo from '../assets/porto_profesional/DPR.png'
import BRILogo from '../assets/porto_profesional/BRI.svg'
import asabriLogo from '../assets/porto_profesional/asabri.png'
import medinaLogo from '../assets/porto_profesional/medina.jpeg'
import hondaLogo from '../assets/porto_profesional/honda.png'
import royenLogo from '../assets/porto_profesional/royen.png'
import netLogo from '../assets/porto_profesional/net.webp'
import labschoolLogo from '../assets/porto_profesional/labschool.png'
import askridaLogo from '../assets/porto_profesional/askrida.png'
import ciscologo from '../assets/porto_profesional/cisco.png'
import faveLogo from '../assets/porto_profesional/fave.webp'
import kabinetLogo from '../assets/porto_profesional/kabinet.jpeg'
import idemitsuLogo from '../assets/porto_profesional/idemitsu.png'
import kpcpenLogo from '../assets/porto_profesional/KPCPEN.png'
import lokaLogo from '../assets/porto_profesional/loka.png'

type PortfolioCard = {
  id: number
  title: string
  subtitle: string
  image?: string
  url?: string
  bold?: boolean
}

export default function PortfolioProfessional() {
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
      title: 'Yayasan Bakti Barito',
      subtitle: 'Company Video Profile',
      image: baktiBaritoLogo,
      url: 'https://youtu.be/x-hccMo-Yo4',
      bold: true,
    },

    {
      id: 2,
      title: 'STIR Education',
      subtitle: 'Commercial Documentary Video',
      image: stirEducationLogo,
      url: 'https://youtu.be/ahwTTLZrwRY',
      bold: true,
    },

    {
      id: 3,
      title: 'TV Series',
      subtitle: '"Story behind the food"',
      image: firstmediaLogo,
      url: 'https://youtu.be/sgHRpyft5uw',
      bold: true,
    },

    {
      id: 4,
      title: 'Barito Pacific',
      subtitle: 'Company Video Profile',
      image: baritoPacificLogo,
      url: 'https://youtu.be/gYWl3kLcTys',
      bold: true,
    },

    {
      id: 5,
      title: 'Bulog',
      subtitle: 'Commercial Documentary Video',
      image: bulogLogo,
      url: 'https://youtu.be/mHYWJ8765xQ',
      bold: true,
    },

    {
      id: 6,
      title: 'STIR Education',
      subtitle: 'Commercial Documentary Video',
      image: stirEducationLogo,
      url: 'https://youtu.be/IhMzm0IQaa4',
      bold: true,
    },

    {
      id: 7,
      title: 'Chandra Asri Pacific',
      subtitle: 'Company Video Profile',
      image: chandraLogo,
      url: 'https://youtu.be/_aXX_wwvMGY',
      bold: true,
    },

    {
      id: 8,
      title: 'Yayasan Bakti Barito',
      subtitle: 'Commercial Documentary Video',
      image: baktiBaritoLogo,
      url: 'https://youtu.be/wtOi9tNhel4',
      bold: true,
    },

    {
      id: 9,
      title: 'Pertamina Lubricants',
      subtitle: 'Product Video',
      image: pertaminaLogo,
      url: 'https://youtu.be/FcptFpk9oPw',
      bold: true,
    },

    {
      id: 10,
      title: 'Tapera',
      subtitle: 'Company Video Profile',
      image: bptaperaLogo,
      url: 'https://youtu.be/ZHD8rT666mY',
      bold: true,
    },

    {
      id: 11,
      title: 'RS Premier Jatinegara',
      subtitle: 'Company Video Profile',
      image: rspremierLogo,
      url: 'https://youtu.be/cpceN0bI0CA',
      bold: true,
    },

    {
      id: 12,
      title: 'Yayasan Bakti Barito',
      subtitle: 'Short Film',
      image: baktiBaritoLogo,
      url: 'https://youtu.be/9iyAhk-qoEw',
      bold: true,
    },

    {
      id: 13,
      title: 'Amero Jewellry',
      subtitle: 'Commercial Documentary Video',
      image: ameroLogo,
      url: 'https://youtu.be/tLDsTnz6sK0',
      bold: true,
    },

    {
      id: 14,
      title: 'RS Premier Jatinegara',
      subtitle: 'Short Film',
      image: rspremierLogo,
      url: 'https://youtu.be/Jht9Bhmb_sM',
      bold: true,
    },

    {
      id: 15,
      title: 'Chandra Asri Pacific',
      subtitle: 'Commercial Documentary Video',
      image: chandraLogo,
      url: 'https://youtu.be/38qMec0vlJw',
      bold: true,
    },

    {
      id: 16,
      title: 'Sarana Multi Infrastruktue',
      subtitle: 'Commercial Documentary Video',
      image: SMILogo,
      url: 'https://youtu.be/sGSkia-7TzA',
      bold: true,
    },

    {
      id: 17,
      title: 'Chandra Asri Pacific',
      subtitle: 'Commercial Documentary Video',
      image: chandraLogo,
      url: 'https://youtu.be/c7zQACi6-H4',
      bold: true,
    },

    {
      id: 18,
      title: 'Indoenesia Financial Group',
      subtitle: 'Commercial Documentary Video',
      image: ifgLogo,
      url: 'https://youtu.be/YpptqV5hcKY',
      bold: true,
    },

    {
      id: 19,
      title: 'Kementerian Luar Negeri',
      subtitle: 'Commercial Documentary Video',
      image: kemluLogo,
      url: 'https://youtu.be/oEl5MbXVcHI',
      bold: true,
    },

    {
      id: 20,
      title: 'Dewan Perwakilan Rakyat RI',
      subtitle: 'PSA Video',
      image: dprLogo,
      url: 'https://youtu.be/aeyh2WK9Gt8',
      bold: true,
    },

    {
      id: 21,
      title: 'Bank Rakyat Indonesia',
      subtitle: 'Event Documentary Video',
      image: BRILogo,
      url: 'https://youtu.be/2VsAqcLe52g',
      bold: true,
    },

    {
      id: 22,
      title: 'ASABRI',
      subtitle: 'Company Video Profile',
      image: asabriLogo,
      url: 'https://youtu.be/H7fAevGRHXQ',
      bold: true,
    },

    {
      id: 23,
      title: 'Medina Houseware',
      subtitle: 'Brand Activation Video',
      image: medinaLogo,
      url: 'https://youtu.be/BpLjJx-oRlE',
      bold: true,
    },

    {
      id: 24,
      title: 'Honda Indonesia',
      subtitle: 'Product Video',
      image: hondaLogo,
      url: 'https://www.youtube.com/watch?v=FQ91GnjQ9nc',
      bold: true,
    },

    {
      id: 25,
      title: 'Royal Enfield',
      subtitle: 'Event Documentary Video',
      image: royenLogo,
      url: 'https://youtu.be/I4JxFDhQNrI',
      bold: true,
    },

    {
      id: 26,
      title: 'TV Series',
      subtitle: 'Cullinary Video Series',
      image: netLogo,
      url: 'https://youtu.be/CROQdxp4zzk',
      bold: true,
    },

    {
      id: 27,
      title: 'Labschool Cibubur',
      subtitle: 'Company Video Profile',
      image: labschoolLogo,
      url: 'https://youtu.be/TfYBaC5lDoQ',
      bold: true,
    },

    {
      id: 28,
      title: 'ASKRIDA',
      subtitle: 'Company Video Profile',
      image: askridaLogo,
      url: 'https://youtu.be/TNihuQ0x9-k',
      bold: true,
    },

    {
      id: 29,
      title: 'Cisco',
      subtitle: 'Product Video',
      image: ciscologo,
      url: 'https://youtu.be/1GQNpCSKNZU',
      bold: true,
    },

    {
      id: 30,
      title: 'Fave Indonesia',
      subtitle: 'Product Video',
      image: faveLogo,
      url: 'https://youtu.be/Gke2Vq9Uw-g',
      bold: true,
    },

    {
      id: 31,
      title: 'Chandra Asri Pacific',
      subtitle: 'Commercial Documentary Video',
      image: chandraLogo,
      url: 'https://youtu.be/VCItEeI0pVM',
      bold: true,
    },

    {
      id: 32,
      title: 'Seketariat Kabinet RI',
      subtitle: 'PSA Video',
      image: kabinetLogo,
      url: 'https://youtu.be/2Ufmug6dO3k',
      bold: true,
    },

    {
      id: 33,
      title: 'Idemitsu',
      subtitle: 'Brand Activation Video',
      image: idemitsuLogo,
      url: 'https://youtu.be/q5Tgop5OpIA',
      bold: true,
    },

    {
      id: 34,
      title: 'KPCPEN',
      subtitle: 'PSA Video',
      image: kpcpenLogo,
      url: 'https://youtu.be/kMGZ7qp_Ixo',
      bold: true,
    },

    {
      id: 35,
      title: 'TV Series',
      subtitle: 'Dunia Gen Z',
      image: lokaLogo,
      url: 'https://youtu.be/J3ii8slPLEA',
      bold: true,
    },

    {
      id: 36,
      title: 'TV Series',
      subtitle: 'Jejak Waktu',
      image: lokaLogo,
      url: 'https://youtu.be/kH-y3quthwo',
      bold: true,
    }

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
