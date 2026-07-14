import type { ReactElement, CSSProperties } from 'react'
import adilaImage from '../assets/our team/adila.jpeg'
import rindyImage from '../assets/our team/rindy-clean.png'
import zadaImage from '../assets/our team/zada2-clean.png'
import akhdanImage from '../assets/our team/akhdan-clean.png'
import ririImage from '../assets/our team/riri1.png'
import oditImage from '../assets/our team/odit1.png'
import danangImage from '../assets/our team/danang1.png'
import aditImage from '../assets/our team/adit1.png'
import { useInView } from '../hooks/useInView'

type Member = {
  name?: string
  role?: string
  image?: string
  imageStyle?: CSSProperties
}

const defaultMembers: Member[] = [
  { name: 'Riri', role: 'CEO', image: ririImage },
  { name: 'Odit', role: 'Creative Director', image: oditImage },
  { name: 'Danang', role: 'Senior Consultant', image: danangImage},
  { name: 'Adit', role: 'Marketing Manager', image: aditImage },
  { name: 'Adila', role: 'Video Producer', image: adilaImage },
  { name: 'Rindy', role: 'Creative Producer', image: rindyImage },
  { name: 'Zada', role: 'Videographer', image: zadaImage },
  { name: 'Akhdan', role: 'Client Service Manager', image: akhdanImage },
]


function MemberCard({ member, pairIndex }: { member: Member; pairIndex: number }) {
  const [ref, inView] = useInView(0.1)
  const delay = `${pairIndex * 0.15}s`

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ animationDelay: delay }}
      className={`flex flex-col items-center text-center animate-from-bottom ${inView ? 'in-view' : ''}`}
    >
      <div className="w-full max-w-xs">
        <div className="aspect-[3/4] w-full overflow-hidden rounded-md bg-gray-200">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover transition-transform duration-300 ease-out hover:scale-105"
              style={member.imageStyle}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-gray-500">
              Add photo
            </div>
          )}
        </div>
      </div>

      <div className="mt-3">
        <div className="text-sm font-medium text-gray-900">{member.name}</div>
        <div className="mt-1 text-xs text-gray-600">{member.role}</div>
      </div>
    </div>
  )
}

export default function OurTeam({
  members = defaultMembers,
}: {
  members?: Member[]
}): ReactElement {
  const [titleRef, titleInView] = useInView(0.2)

  return (
    <section id="team" className="bg-neutral-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`mb-12 text-center lg:mb-14 animate-from-top ${titleInView ? 'in-view' : ''}`}
        >
          <h2 className="text-2xl font-medium tracking-wide text-gray-900 md:text-3xl">
            Our Team
          </h2>
          <div className="mx-auto mt-4 h-1 w-14 bg-sky-teal" />
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {members.map((m, idx) => (
            // pairIndex groups cards in pairs: 0,1 → 0 | 2,3 → 1 | 4,5 → 2 …
            <MemberCard key={idx} member={m} pairIndex={Math.floor(idx / 2)} />
          ))}
        </div>
      </div>
    </section>
  )
}
