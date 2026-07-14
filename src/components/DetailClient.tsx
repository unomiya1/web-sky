import Navbar from './Navbar'
import ContactFooter from './ContactFooter'
import { defaultHomepageData } from '../api/client'

const yearOrder = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026']

const clientImages = import.meta.glob('../assets/client/detail/*/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const groupedClientImages = Object.entries(clientImages).reduce<Record<string, string[]>>((acc, [path, src]) => {
  const match = path.match(/\/detail\/([^/]+)\//)
  const year = match?.[1]

  if (year && yearOrder.includes(year)) {
    acc[year] = [...(acc[year] ?? []), src]
  }

  return acc
}, {})

const years = yearOrder.filter((year) => (groupedClientImages[year] ?? []).length > 0)

export default function DetailClient() {
  const links = defaultHomepageData.nav_links.map((link) => ({
    ...link,
    href: link.href.startsWith('#')
      ? `${import.meta.env.BASE_URL}${link.href}`
      : link.href,
  }))

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-800">
      <Navbar links={links} bgColor="#0D1B2A" logoHref={`${import.meta.env.BASE_URL}#home`} />

      <main className="pt-44 lg:pt-56 pb-0">
        <section className="mx-auto max-w-7xl px-6 lg:px-10 mb-16">
          <div className="mb-16 text-center">
            <h1 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">Our Clients</h1>
            <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600">
              We're proud to have earned the trust of these companies.
            </p>
          </div>

          <div className="space-y-14">
            {years.map((year) => (
              <section key={year} className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-8 lg:p-10">
                <div className="mb-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-slate-300" />
                  <div className="rounded-full border border-slate-300 bg-slate-50 px-5 py-2 text-lg font-semibold uppercase tracking-[0.25em] text-slate-700">
                    {year}
                  </div>
                  <div className="h-px flex-1 bg-slate-300" />
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                  {(groupedClientImages[year] ?? []).sort().map((image, index) => (
                    <figure
                      key={`${year}-${index}`}
                      className="flex w-full max-w-[180px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50/80 p-6 transition-transform duration-200 hover:-translate-y-1"
                    >
                      <img src={image} alt={`${year} client ${index + 1}`} className="h-24 w-full object-contain" />
                    </figure>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <ContactFooter data={defaultHomepageData} />
      </main>
    </div>
  )
}
