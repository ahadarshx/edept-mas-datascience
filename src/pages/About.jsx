import {
  Cpu,
  Handshake,
  MapPin,
  FlaskConical,
  Network,
  Laptop,
  Building2,
  Link2,
  Sparkles,
  Globe2,
  LifeBuoy,
  Users,
  BookOpen,
  Trophy,
} from 'lucide-react'
import { Section, Eyebrow, SectionHeading } from '../components/Section'
import { PointCard } from '../components/Card'
import { RankingBand } from '../components/RankingBand'
import { StatBand } from '../components/StatBand'
import { PartnerLogo } from '../components/Logo'
import { CTASection } from '../components/CTASection'
import { Reveal } from '../components/Reveal'
import { illinoisTech, mahindraUniversity, edeptAdvantage, edeptDelivers } from '../data/content'

const illinoisTechIcons = [Cpu, Handshake, MapPin, FlaskConical, Network]
const mahindraIcons = [Laptop, Building2, Link2, Sparkles]
const advantageIcons = [Globe2, Handshake, LifeBuoy]
const statIcons = [Users, Building2, BookOpen, Trophy]

const galleryImages = [
  'images/mahindra-university/2.jpg',
  'images/mahindra-university/3.jpg',
  'images/mahindra-university/5.jpg',
  'images/mahindra-university/7.jpg',
]

function SubPoint({ title, body, icon: Icon }) {
  return (
    <div className="group rounded-lg transition-transform duration-300 hover:-translate-y-0.5">
      <div className="flex items-center gap-2">
        <Icon size={16} className="text-accent transition-transform duration-300 group-hover:scale-110" />
        <h3 className="font-medium text-neutral-900">{title}</h3>
      </div>
      <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">{body}</p>
    </div>
  )
}

export function About() {
  return (
    <>
      <Section className="!pb-10 md:!pb-14">
        <Eyebrow>About the Partnership</Eyebrow>
        <h1 className="mt-3 font-serif tracking-tight text-balance text-4xl md:text-5xl leading-[1.1] text-neutral-900">
          Two universities. Two credentials in one pathway.
        </h1>
      </Section>

      {/* Illinois Tech */}
      <Section className="!pt-0">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-x-12 gap-y-8 items-start">
          <div className="group rounded-xl overflow-hidden border-[0.5px] border-neutral-200">
            <img
              src="images/illinois-tech/2.jpg"
              alt={illinoisTech.name}
              className="h-64 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:rotate-1"
            />
          </div>
          <div>
            <PartnerLogo name="illinois-tech" className="h-10" />
            <h2 className="mt-4 font-serif text-2xl md:text-3xl tracking-tight text-neutral-900">
              {illinoisTech.name}
            </h2>
            <p className="mt-3 text-neutral-600 leading-relaxed">{illinoisTech.about}</p>
          </div>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
          {illinoisTech.points.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <SubPoint title={p.title} body={p.body} icon={illinoisTechIcons[i]} />
            </Reveal>
          ))}
        </div>
      </Section>

      <RankingBand />

      {/* Mahindra University */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-x-12 gap-y-8 items-start">
          <div className="group rounded-xl overflow-hidden border-[0.5px] border-neutral-200">
            <img
              src="images/mahindra-university/1.jpg"
              alt={mahindraUniversity.name}
              className="h-64 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:rotate-1"
            />
          </div>
          <div>
            <PartnerLogo name="mahindra" className="h-10" />
            <h2 className="mt-4 font-serif text-2xl md:text-3xl tracking-tight text-neutral-900">
              {mahindraUniversity.name}
            </h2>
            <p className="mt-3 text-neutral-600 leading-relaxed">{mahindraUniversity.about}</p>
          </div>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8">
          {mahindraUniversity.points.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <SubPoint title={p.title} body={p.body} icon={mahindraIcons[i]} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Campus life gallery */}
      <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {galleryImages.map((src) => (
          <div key={src} className="group overflow-hidden aspect-square">
            <img
              src={src}
              alt="Mahindra University campus life"
              className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:rotate-1"
            />
          </div>
        ))}
      </Reveal>

      <StatBand
        items={mahindraUniversity.stats.map((s, i) => ({ value: s.value, label: s.label, icon: statIcons[i] }))}
        source={mahindraUniversity.statsSource}
      />

      {/* edept advantage */}
      <Section>
        <SectionHeading eyebrow="The edept Advantage" title="Why this pathway, delivered by edept" />
        <div className="mt-12 grid md:grid-cols-3 gap-x-10 gap-y-10">
          {edeptAdvantage.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <PointCard title={p.title} body={p.body} icon={advantageIcons[i]} />
            </Reveal>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap gap-3">
          {edeptDelivers.map((d) => (
            <span
              key={d}
              className="rounded-full bg-accent-muted/40 px-4 py-2 text-sm font-medium text-accent transition-transform duration-300 hover:scale-105"
            >
              {d}
            </span>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  )
}
