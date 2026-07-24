import { BookOpen } from 'lucide-react'
import { Section, Eyebrow } from '../components/Section'
import { CTASection } from '../components/CTASection'
import { Reveal } from '../components/Reveal'
import { tracks, degreeName } from '../data/content'

const trackImages = {
  india: 'images/mahindra-university/4.jpg',
  usa: 'images/illinois-tech/3.jpg',
}

export function Program() {
  return (
    <>
      <Section className="!pb-10 md:!pb-14">
        <Eyebrow>Curriculum</Eyebrow>
        <h1 className="mt-3 font-serif tracking-tight text-balance text-4xl md:text-5xl leading-[1.1] text-neutral-900">
          One degree, split across two campuses.
        </h1>
        <p className="mt-4 max-w-xl text-neutral-600 leading-relaxed">
          The {degreeName} is a single 33-credit curriculum. Your first 9 credits transfer in fully from Mahindra University, and the remaining 24 are completed on campus at Illinois Institute of Technology, Chicago.
        </p>
      </Section>

      <Section className="!pt-0" containerClassName="space-y-20">
        {tracks.map((t, i) => (
          <Reveal key={t.key} delay={i * 100} className="grid md:grid-cols-[1fr_1.4fr] gap-x-12 gap-y-6">
            <div>
              <div className="group mb-5 overflow-hidden rounded-xl border-[0.5px] border-neutral-200">
                <img
                  src={trackImages[t.key]}
                  alt={t.institution}
                  className="h-40 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:rotate-1"
                />
              </div>
              <p className="font-mono uppercase tracking-widest text-[10px] text-accent">
                Semester {i === 0 ? '1' : '2 – 4'}
              </p>
              <h2 className="mt-2 font-serif text-3xl tracking-tight text-neutral-900">{t.institution}</h2>
              <p className="mt-1 text-sm font-medium text-savings">{t.duration}</p>
              <p className="mt-4 text-neutral-600 leading-relaxed">{t.body}</p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3 content-start">
              {t.courses.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-2.5 rounded-xl border-[0.5px] border-neutral-200 px-4 py-3 text-sm text-neutral-700 transition-colors duration-300 hover:border-accent"
                >
                  <BookOpen size={15} className="mt-0.5 shrink-0 text-accent" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </Section>

      <CTASection />
    </>
  )
}
