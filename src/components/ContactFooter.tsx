import type { HomepageData } from '../types/homepage'
import contactBg from '../assets/icon contact/bg contact.svg'
import locIcon from '../assets/icon contact/loc.png'
import waIcon from '../assets/icon contact/wa.png'
import igIcon from '../assets/icon contact/ig.png'
import mailIcon from '../assets/icon contact/mail.png'

export default function ContactFooter({ data }: { data: HomepageData }) {
  return (
    <section id="contact" className="scroll-mt-24 text-white">
      <div className="relative isolate overflow-hidden bg-sky-teal px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
        <img
          src={contactBg}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/35" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-wide text-white md:text-4xl">
                {data.contact_title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-100 md:text-lg">
                {data.contact_subtitle}
              </p>
              <div className="mt-10 space-y-4 text-sm text-slate-100 sm:text-base">
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <img src={locIcon} alt="Location" className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">Address</p>
                    <p className="mt-1 text-slate-100">{data.contact_address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <img src={waIcon} alt="WhatsApp" className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">WhatsApp</p>
                    <a href={`https://wa.me/${data.contact_whatsapp}`} className="mt-1 block text-slate-100 hover:text-white">
                      {data.contact_whatsapp_display}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <img src={igIcon} alt="Instagram" className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">Instagram</p>
                    <a href={`https://instagram.com/${data.contact_instagram}`} className="mt-1 block text-slate-100 hover:text-white">
                      @{data.contact_instagram}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <img src={mailIcon} alt="Email" className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a href={`mailto:${data.contact_email}`} className="mt-1 block text-slate-100 hover:text-white">
                      {data.contact_email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-8 text-slate-100 shadow-2xl shadow-slate-950/20 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white">{data.footer_title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-100">{data.footer_description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-950 px-6 py-4 text-center text-sm text-slate-400 sm:px-10 lg:px-16">
        {data.footer_copy}
      </div>
    </section>
  )
}
