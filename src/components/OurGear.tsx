import fx3 from '../assets/gear/sony fx3.jpg'
import a7iv from '../assets/gear/sony a7 mark iv.jpg'
import zv from '../assets/gear/sony zv-e10.webp'
import a6300 from '../assets/gear/sony a6300.jpg'

import l24_105 from '../assets/gear/sony 24-105mm f4.0.webp'
import l70_200 from '../assets/gear/sony 70-200mm f2.8 gm.avif'
import l16_35 from '../assets/gear/sony 16-35mm f.2.8 gm.png'
import l50_12 from '../assets/gear/sony 50mm f1.2 gm.webp'
import l24_70 from '../assets/gear/sony 24-70mm f2.8gm.webp'

import l18_105 from '../assets/gear/sony 18-105mm f4.0.webp'
import l50_18 from '../assets/gear/sony 50mm f1.8.jpg'
import l11 from '../assets/gear/sony 11mm f1.8.jpeg'
import l16_50 from '../assets/gear/sony 16-50mm f3.5.jpeg'
import l28_70 from '../assets/gear/sony 28-70mm f3.5.jpg'

import gimbalPro from '../assets/gear/DJI RS3 Pro.jpg'
import gimbalMini from '../assets/gear/DJI RS3 mini.jpg'
import droneMini from '../assets/gear/dji mini 3.png'
import hollyland from '../assets/gear/hollyland lark mark 2.jpg'
import shootgun from '../assets/gear/shootgun mic.jpg'
import godox from '../assets/gear/godox sl300.jpeg'
import premierePro from '../assets/gear/premiere pro.webp'
import afterEffect from '../assets/gear/after effect.webp'
import davinciResolve from '../assets/gear/davinci resolve.png'
import capcut from '../assets/gear/capcut.png'
import Navbar from './Navbar'
import ContactFooter from './ContactFooter'
import { defaultHomepageData } from '../api/client'

export default function OurGear() {
  const links = defaultHomepageData.nav_links
  const gearLinks = links.map((link) => ({
    ...link,
    href: link.href.startsWith('#') ? `/${link.href}` : link.href,
  }))

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar links={gearLinks} bgColor="#0D1B2A" logoHref="/#home" />
      <main className="pt-60 lg:pt-72">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-14 text-center">
            <h1 className="text-3xl font-semibold text-gray-900 md:text-4xl">Our Gear</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600">This is what we use for video production</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-gray-900">Tier 1</h2>
              </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-gray-900 text-right">Tier 2</h2>
              </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Left column - Tier 1 with right divider */}
            <div className="pr-8 border-r border-slate-200">
              <section className="mb-8">
                <h3 className="mb-4 text-lg font-medium text-gray-800">Camera</h3>
                <div className="space-y-6">
                  <figure className="flex items-center gap-4">
                    <img src={fx3} alt="Sony FX3" className="h-36 w-36 object-contain" />
                    <figcaption className="text-sm">Sony FX3</figcaption>
                  </figure>
                  <figure className="flex items-center gap-4">
                    <img src={a7iv} alt="Sony A7 mark IV" className="h-36 w-36 object-contain" />
                    <figcaption className="text-sm">Sony A7 mark IV</figcaption>
                  </figure>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="mb-4 text-lg font-medium text-gray-800">Lens</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <img src={l24_105} alt="24-105" className="h-24 w-24 object-contain" />
                    <span className="text-sm">Sony 24-105mm f4.0</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <img src={l70_200} alt="70-200" className="h-24 w-24 object-contain" />
                    <span className="text-sm">Sony 70-200mm f2.8 GM</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <img src={l16_35} alt="16-35" className="h-24 w-24 object-contain" />
                    <span className="text-sm">Sony 16-35mm f2.8 GM</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <img src={l50_12} alt="50mm f1.2" className="h-24 w-24 object-contain" />
                    <span className="text-sm">Sony 50mm f1.2 GM</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <img src={l24_70} alt="24-70" className="h-24 w-24 object-contain" />
                    <span className="text-sm">Sony 24-70mm f2.8 GM</span>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 text-lg font-medium text-gray-800">Gimbal</h3>
                <figure className="flex items-center gap-4">
                  <img src={gimbalPro} alt="DJI RS3 Pro" className="h-48 w-48 object-contain" />
                  <figcaption className="text-sm">DJI RS3 Pro</figcaption>
                </figure>
              </section>
            </div>

            {/* Right column - Tier 2 */}
            <div className="pl-8">
              <section className="mb-8">
                <h3 className="mb-4 text-lg font-medium text-gray-800">Camera</h3>
                <div className="space-y-6">
                  <figure className="flex items-center gap-4">
                    <img src={zv} alt="Sony ZV-E10" className="h-36 w-36 object-contain" />
                    <figcaption className="text-sm">Sony ZV-E10</figcaption>
                  </figure>
                  <figure className="flex items-center gap-4">
                    <img src={a6300} alt="Sony A6300" className="h-36 w-36 object-contain" />
                    <figcaption className="text-sm">Sony A6300</figcaption>
                  </figure>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="mb-4 text-lg font-medium text-gray-800">Lens</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <img src={l18_105} alt="18-105" className="h-24 w-24 object-contain" />
                    <span className="text-sm">Sony 18-105mm f4.0</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <img src={l50_18} alt="50mm f1.8" className="h-24 w-24 object-contain" />
                    <span className="text-sm">Sony 50mm f1.8</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <img src={l11} alt="11mm" className="h-24 w-24 object-contain" />
                    <span className="text-sm">Sony 11mm f1.8</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <img src={l16_50} alt="16-50" className="h-24 w-24 object-contain" />
                    <span className="text-sm">Sony 16-50mm f3.5</span>
                  </li>
                      <li className="flex items-start gap-4">
                        <img src={l28_70} alt="28-70" className="h-24 w-24 object-contain" />
                        <span className="text-sm">Sony 28-70mm f3.5</span>
                      </li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 text-lg font-medium text-gray-800">Gimbal</h3>
                <figure className="flex items-center gap-4">
                  <img src={gimbalMini} alt="DJI RS3 Mini" className="h-48 w-48 object-contain" />
                  <figcaption className="text-sm">DJI RS3 Mini</figcaption>
                </figure>
              </section>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-7xl border-t border-slate-200" />

          <div className="mt-16 space-y-16">
            <section>
              <h3 className="mb-6 text-2xl font-semibold text-gray-900">Drone</h3>
              <div className="flex flex-wrap items-center gap-8">
                <figure className="w-full sm:w-auto text-center">
                  <img src={droneMini} alt="DJI Mini 3" className="h-56 w-full max-w-sm object-contain" />
                  <figcaption className="mt-3 text-sm text-gray-600">DJI Mini 3</figcaption>
                </figure>
              </div>
            </section>

            <section>
              <h3 className="mb-6 text-2xl font-semibold text-gray-900">Audio</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                <figure className="flex flex-col items-center gap-4">
                  <img src={hollyland} alt="Hollyland Lark M2" className="h-48 w-full max-w-xs object-contain" />
                  <figcaption className="text-sm">Hollyland Lark M2</figcaption>
                </figure>
                <figure className="flex flex-col items-center gap-4">
                  <img src={shootgun} alt="Boom microphone" className="h-48 w-full max-w-xs object-contain" />
                  <figcaption className="text-sm">Boom microphone</figcaption>
                </figure>
              </div>
            </section>

            <section>
              <h3 className="mb-6 text-2xl font-semibold text-gray-900">Lighting</h3>
              <div className="flex flex-wrap items-center gap-8">
                <figure className="w-full sm:w-auto text-center">
                  <img src={godox} alt="Godox SL300" className="h-56 w-full max-w-sm object-contain" />
                  <figcaption className="mt-3 text-sm text-gray-600">Godox SL300</figcaption>
                </figure>
              </div>
            </section>

            <section>
              <h3 className="mb-6 text-2xl font-semibold text-gray-900">Software Editing</h3>
              <div className="grid gap-6 sm:grid-cols-4">
                <figure className="flex flex-col items-center gap-2">
                  <img src={premierePro} alt="Adobe Premiere Pro" className="h-24 w-full object-contain" />
                  <figcaption className="text-sm text-gray-600">Adobe Premiere Pro</figcaption>
                </figure>
                <figure className="flex flex-col items-center gap-2">
                  <img src={afterEffect} alt="Adobe After Effects" className="h-24 w-full object-contain" />
                  <figcaption className="text-sm text-gray-600">Adobe After Effects</figcaption>
                </figure>
                <figure className="flex flex-col items-center gap-2">
                  <img src={davinciResolve} alt="DaVinci Resolve" className="h-24 w-full object-contain" />
                  <figcaption className="text-sm text-gray-600">Davinci Resolve</figcaption>
                </figure>
                <figure className="flex flex-col items-center gap-2">
                  <img src={capcut} alt="Capcut" className="h-24 w-full object-contain" />
                  <figcaption className="text-sm text-gray-600">capcut</figcaption>
                </figure>
              </div>
            </section>
          </div>
        </div>

        <ContactFooter data={defaultHomepageData} />
      </main>
    </div>
  )
}
