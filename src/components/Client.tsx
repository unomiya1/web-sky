import type { HomepageData } from '../types/homepage'
import clientBackground from '../assets/client/client sky ls.jpg'

export default function ClientFromData({ data }: { data: HomepageData }) {
  return (
    <a href="/detail-client" className="block">
      <section
        id="clients"
        className="relative overflow-hidden bg-cover bg-center py-20 text-white transition-opacity duration-200 hover:opacity-95"
        style={{
          backgroundImage: `url(${clientBackground})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex min-h-[320px] items-center justify-center">
            <div className="max-w-3xl text-center">
              <h2 className="text-4xl font-semibold tracking-wide text-white md:text-5xl">
                {data.client_section_title}
              </h2>
            </div>
          </div>
        </div>
      </section>
    </a>
  )
}
