import type { HomepageData } from '../types/homepage'
import gearBg from '../assets/about us/gear background.jpeg'

export default function MiniAboutFromData({ }: { data: HomepageData }) {
  const base = import.meta.env.BASE_URL

  const gearHref = `${base}our-gear`

  return (
    <section className="relative py-8">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${gearBg})` }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 flex justify-center">
        <a
          href={gearHref}
          className="inline-flex items-center rounded-md bg-sky-teal px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-teal-dark"
        >
          Our Gear
        </a>
      </div>
    </section>
  )
}
