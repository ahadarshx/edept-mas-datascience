import { BookOpen } from 'lucide-react'
import { Section, Eyebrow } from '../components/Section'
import { CTASection } from '../components/CTASection'
import { Reveal } from '../components/Reveal'
import { CountUp } from '../components/CountUp'
import { tracks } from '../data/content'

const trackImages = {
  india: 'images/mahindra-university/4.jpg',
  usa: 'images/illinois-tech/3.jpg',
}

const stats = [
  { value: 33, suffix: '', label: 'Total Credits' },
  { value: 2, suffix: '', label: 'Countries' },
  { value: 2, suffix: '', label: 'Global Credentials' },
]

export function Program() {
  return (
    <>
      <Section className="!pb-10 md:!pb-14">
        <Eyebrow>Curriculum</Eyebrow>
        <h1 className="mt-3 font-serif tracking-tight text-balance text-4xl md:text-5xl leading-[1.1] text-neutral-900">
          Two credentials, one seamless curriculum.
        </h1>
        <div className="mt-10 grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:gap-x-12 sm:gap-y-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="transition-transform duration-300 hover:-translate-y-0.5">
              <p className="font-serif text-4xl tracking-tight text-neutral-900">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-neutral-500">{s.label}</p>
            </Reveal>
          ))}
        </div>
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
