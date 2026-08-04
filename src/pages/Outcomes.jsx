import { Briefcase, DollarSign, ClipboardCheck, Globe2 } from 'lucide-react'
import { Section, Eyebrow, SectionHeading } from '../components/Section'
import { StatBand } from '../components/StatBand'
import { CTASection } from '../components/CTASection'
import { Reveal } from '../components/Reveal'
import { outcomeStats, outcomeEmployerLogos, outcomeEmployersNoLogo, outcomesSource } from '../data/content'

const statIcons = [Briefcase, DollarSign, ClipboardCheck, Globe2]

export function Outcomes() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <img
          src="images/illinois-tech/14.jpg"
          alt="Illinois Institute of Technology campus"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/35" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-32 md:pb-20">
          <Eyebrow>Outcomes</Eyebrow>
          <h1 className="mt-3 max-w-xl font-serif tracking-tight text-balance text-4xl md:text-5xl leading-[1.1] text-neutral-50">
            Where Illinois Tech Graduates Go Next
          </h1>
          <p className="mt-4 max-w-lg text-neutral-300 leading-relaxed">
            Your MAS is conferred by Illinois Institute of Technology, so it carries the same career outcomes reported across Illinois Tech&rsquo;s graduate programs.
          </p>
        </div>
      </section>

      <StatBand items={outcomeStats.map((s, i) => ({ ...s, icon: statIcons[i] }))} source={outcomesSource} />

      <Section containerClassName="text-center">
        <SectionHeading
          className="mx-auto"
          eyebrow="Where Graduates Land"
          title="A Track Record Across Companies of Every Size"
          body="Illinois Tech graduates go on to start-ups, early-stage companies, and Fortune 500 corporations alike."
        />
        <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {outcomeEmployerLogos.map((logo) => (
            <div key={logo.name} className="flex h-12 w-28 shrink-0 items-center justify-center" title={logo.name}>
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-9 max-w-full object-contain grayscale transition-[filter] duration-300 hover:grayscale-0"
              />
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap justify-center gap-3">
          {outcomeEmployersNoLogo.map((name) => (
            <span
              key={name}
              className="rounded-full border-[0.5px] border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-transform duration-300 hover:scale-105 hover:border-accent hover:text-accent"
            >
              {name}
            </span>
          ))}
        </Reveal>
      </Section>

      <CTASection />
    </>
  )
}
