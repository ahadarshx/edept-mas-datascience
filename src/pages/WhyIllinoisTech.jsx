import {
  TrendingUp,
  DollarSign,
  GraduationCap,
  Globe,
  Wallet,
  PiggyBank,
  ArrowRightLeft,
  Plane,
  Rocket,
  BadgeCheck,
  Briefcase,
  Factory,
  Library,
  HandCoins,
  Target,
} from 'lucide-react'
import { Section, Eyebrow, SectionHeading } from '../components/Section'
import { PointCard } from '../components/Card'
import { CTASection } from '../components/CTASection'
import { Reveal } from '../components/Reveal'
import { whyUs, whyPathway, whyIllinois } from '../data/content'

const whyUsIcons = [TrendingUp, DollarSign, GraduationCap, Globe]
const whyPathwayIcons = [Wallet, PiggyBank, ArrowRightLeft, Plane, Rocket, BadgeCheck]
const whyIllinoisIcons = [Briefcase, Factory, Library, HandCoins, Target]

export function WhyIllinoisTech() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <img
          src="images/illinois-tech/9.jpg"
          alt="Illinois Institute of Technology campus"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-32 md:pb-20">
          <Eyebrow>Why Illinois Tech, Chicago?</Eyebrow>
          <h1 className="mt-3 max-w-2xl font-serif tracking-tight text-balance text-4xl md:text-5xl leading-[1.1] text-neutral-50">
            The U.S. leads data science. Chicago is where the industry actually is.
          </h1>
        </div>
      </section>

      <Section>
        <SectionHeading eyebrow="Why the United States" title="Global Center for Data & AI" />
        <div className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-10">
          {whyUs.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <PointCard title={p.title} body={p.body} icon={whyUsIcons[i]} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading eyebrow="Why the 1+1 Pathway" title="Every advantage of a U.S. degree, none of the two-year price tag" />
        <div className="mt-12 grid md:grid-cols-3 gap-x-10 gap-y-10">
          {whyPathway.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <PointCard title={p.title} body={p.body} icon={whyPathwayIcons[i]} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Campus life strip */}
      <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {['images/illinois-tech/12.jpg', 'images/illinois-tech/7.jpg', 'images/illinois-tech/10.jpg', 'images/illinois-tech/13.jpg'].map(
          (src) => (
            <div key={src} className="group overflow-hidden aspect-square">
              <img
                src={src}
                alt="Illinois Institute of Technology campus life"
                className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:rotate-1"
              />
            </div>
          ),
        )}
      </Reveal>

      <Section>
        <SectionHeading
          eyebrow="Why Chicago"
          title="Illinois combines career opportunity, applied learning, and student-friendly living"
          body="Making it an ideal location for building a future-ready data science career."
        />
        <div className="mt-12 mx-auto max-w-3xl divide-y-[0.5px] divide-neutral-200 border-y-[0.5px] border-neutral-200">
          {whyIllinois.map((p, i) => {
            const Icon = whyIllinoisIcons[i]
            return (
              <Reveal key={p.title} delay={i * 70} className="group flex items-start gap-5 py-6 transition-colors duration-300 hover:bg-neutral-50/60">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-muted/40 text-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-serif text-lg tracking-tight text-neutral-900">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <CTASection />
    </>
  )
}
