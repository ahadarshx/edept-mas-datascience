import { FileText, ClipboardCheck, MailCheck, Plane, BookOpen, Landmark, Award, CheckCircle2 } from 'lucide-react'
import { Section, Eyebrow } from '../components/Section'
import { Timeline } from '../components/Timeline'
import { CTASection } from '../components/CTASection'
import { IntakeCard } from '../components/IntakeCard'
import { Reveal } from '../components/Reveal'
import { admissionCriteria, admissionJourney } from '../data/content'

const journeyIcons = [FileText, ClipboardCheck, MailCheck, Plane, BookOpen, Landmark, Award]

export function Admissions() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <img
          src="images/illinois-tech/10.jpg"
          alt="Students on the Illinois Institute of Technology campus"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/35" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-32 md:pb-20">
          <Eyebrow>Admissions</Eyebrow>
          <h1 className="mt-3 max-w-xl font-serif tracking-tight text-balance text-4xl md:text-5xl leading-[1.1] text-neutral-50">
            Admission Journey with edept
          </h1>
          <p className="mt-4 max-w-lg text-neutral-300 leading-relaxed">
            edept manages a structured, transparent admission and transition process in collaboration with Illinois Institute of Technology and Mahindra University, ensuring students are academically and professionally prepared at every stage.
          </p>
        </div>
      </section>

      <Section containerClassName="grid md:grid-cols-[1fr_2fr] gap-x-16 gap-y-12">
        <div>
          <p className="font-mono uppercase tracking-widest text-[10px] text-accent">Admission Criteria</p>
          <ul className="mt-4 space-y-3">
            {admissionCriteria.map((c, i) => (
              <Reveal key={c} delay={i * 60}>
                <li className="group flex gap-2 rounded-lg text-neutral-600 leading-relaxed transition-transform duration-300 hover:translate-x-1">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent transition-transform duration-300 group-hover:scale-110" />
                  <span>{c}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <div className="mt-10">
            <IntakeCard />
          </div>
        </div>

        <Timeline steps={admissionJourney} icons={journeyIcons} />
      </Section>

      <CTASection />
    </>
  )
}
