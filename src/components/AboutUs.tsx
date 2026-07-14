import type { HomepageData } from '../types/homepage'
import { useInView } from '../hooks/useInView'

interface AboutUsProps {
  title: string
  content: string
  image: string
}

export default function AboutUs({ title, content, image }: AboutUsProps) {
  const [titleRef, titleInView] = useInView(0.2)
  const [textRef, textInView] = useInView(0.2)
  const [imgRef, imgInView] = useInView(0.2)

  return (
    <section id="about" className="bg-neutral-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {}
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`mb-12 text-center lg:mb-14 animate-from-top ${titleInView ? 'in-view' : ''}`}
        >
          <h2 className="text-2xl font-medium tracking-wide text-gray-900 md:text-3xl">
            {title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-14 bg-sky-teal" />
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {}
          <div
            ref={textRef as React.RefObject<HTMLDivElement>}
            style={{ animationDelay: '0.1s' }}
            className={`animate-from-left ${textInView ? 'in-view' : ''}`}
          >
            <p className="text-base leading-relaxed text-gray-800 md:text-lg md:leading-8">
              {content}
            </p>
          </div>

          {}
          <div
            ref={imgRef as React.RefObject<HTMLDivElement>}
            style={{ animationDelay: '0.1s' }}
            className={`overflow-hidden animate-from-right ${imgInView ? 'in-view' : ''}`}
          >
            <img
              src={image}
              alt="Sky Pictures production team"
              className="h-full w-full object-cover object-right"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export function AboutUsFromData({ data }: { data: HomepageData }) {
  return (
    <AboutUs
      title={data.about_title}
      content={data.about_content}
      image={data.about_image}
    />
  )
}

export function AboutUsWithActions({ data }: { data: HomepageData }) {
  return (
    <AboutUs title={data.about_title} content={data.about_content} image={data.about_image} />
  )
}
