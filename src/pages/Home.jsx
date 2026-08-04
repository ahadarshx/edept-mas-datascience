import { useEffect, useRef, useState } from 'react'
import { MapPin, TrendingDown, GraduationCap, Wallet, LifeBuoy, ArrowRight } from 'lucide-react'
import { Button } from '../components/Button'
import { Section, Eyebrow, SectionHeading } from '../components/Section'
import { PointCard } from '../components/Card'
import { PartnerLogo } from '../components/Logo'
import { CTASection } from '../components/CTASection'
import { CareerOutcomes } from '../components/CareerOutcomes'
import { CountUp } from '../components/CountUp'
import { Reveal } from '../components/Reveal'
import { LogoMarquee } from '../components/LogoMarquee'
import { HeroSavingsCard } from '../components/HeroSavingsCard'
import { GlowOrb } from '../components/GlowOrb'
import { BrochureButton } from '../components/BrochureButton'
import { Highlight } from '../components/Highlight'
import { BoardingPass } from '../components/BoardingPass'
import { pillars, cost } from '../data/content'

const fmt = (n) => `$${n.toLocaleString('en-US')}`

const pillarIcons = [GraduationCap, Wallet, LifeBuoy]

const galleryImages = [
  { src: 'images/illinois-tech/12.jpg', alt: 'Illinois Institute of Technology campus life' },
  { src: 'images/illinois-tech/21.jpg', alt: 'Illinois Institute of Technology students on campus' },
  { src: 'images/illinois-tech/7.jpg', alt: 'Illinois Institute of Technology campus life' },
  { src: 'images/illinois-tech/22.jpg', alt: 'Illinois Institute of Technology students on campus' },
]

const campusGalleryImages = [
  { src: 'images/illinois-tech/13.jpg', alt: 'Illinois Institute of Technology campus architecture' },
  { src: 'images/illinois-tech/14.jpg', alt: 'Illinois Institute of Technology campus life' },
  { src: 'images/illinois-tech/20.jpg', alt: 'Illinois Institute of Technology students on campus' },
  { src: 'images/illinois-tech/21.jpg', alt: 'Illinois Institute of Technology students on campus' },
  { src: 'images/illinois-tech/23.jpg', alt: 'Illinois Institute of Technology students on campus' },
  { src: 'images/illinois-tech/24.jpg', alt: 'Illinois Institute of Technology students on campus' },
]

export function Home() {
  return (
    <>
      {/* Hero: full-bleed photo with an edept-blue overlay, text directly on top. */}
      <section className="relative overflow-hidden">
        <img
          src="images/illinois-tech/15.jpg"
          alt="Illinois Institute of Technology campus at dusk with the Chicago skyline behind it"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/80 to-accent/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-24 md:pt-40 md:pb-32">
          <p className="font-mono uppercase tracking-widest text-[10px] text-savings">A Global Pathway Program by edept</p>
          <h1 className="mt-4 max-w-3xl font-serif tracking-tight text-balance text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-white">
            Master of Applied Science in Data Science
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85 leading-relaxed">
            One semester in India, three in Chicago. Earn a PGP Certificate and a U.S. STEM degree with OPT from Illinois Institute of Technology, at up to{' '}
            <Highlight>&asymp;{cost.allInSavingPct}% lower</Highlight> all-in cost.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/apply" variant="savings">
              Apply Now
            </Button>
            <BrochureButton variant="outline" className="!text-white !border-white/40 hover:!border-white" />
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-3 border-t-[0.5px] border-white/20 pt-8">
            <div className="rounded-lg bg-white px-3 py-2">
              <PartnerLogo name="illinois-tech" className="h-7" />
            </div>
            <div className="rounded-lg bg-white px-3 py-2">
              <PartnerLogo name="mahindra" className="h-7" />
            </div>
          </div>

          <HeroSavingsCard className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 w-72 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[calc(50%+4px)]" />
        </div>
      </section>

      {/* Quick badges */}
      <Section className="!py-10 md:!py-14 border-b-[0.5px] border-neutral-200">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <Badge icon={MapPin}>6 Months in India</Badge>
          <Badge icon={TrendingDown}>
            Save <Highlight>&asymp;{cost.allInSavingPct}% All-In</Highlight> with Living Costs
          </Badge>
          <Badge icon={GraduationCap}>2 Credentials, 1 Pathway</Badge>
        </div>
      </Section>

      {/* Global hybrid model */}
      <Section id="model" containerClassName="text-center">
        <SectionHeading
          className="mx-auto"
          eyebrow="The Model"
          title="A Global Hybrid Master&rsquo;s Model"
          body="Start where it costs less, finish where the degree carries the most weight: one continuous, fully-aligned curriculum."
        />

        <div className="mt-14">
          <BoardingPass />
        </div>

        <div className="mt-10">
          <Button to="/program" variant="outline">
            View Full Curriculum <ArrowRight size={15} className="ml-1" />
          </Button>
        </div>
      </Section>

      {/* Pillars */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-3 gap-x-12 gap-y-10">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="h-full">
              <PointCard title={p.title} body={p.body} icon={pillarIcons[i]} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CampusGallery />

      {/* Bold statement */}
      <Section className="relative overflow-hidden !py-20 md:!py-28 bg-ink" containerClassName="relative text-center">
        <GlowOrb className="-bottom-24 left-1/2 h-80 w-80 -translate-x-1/2" />
        <p className="font-serif tracking-tight text-balance text-3xl md:text-5xl leading-[1.15] text-neutral-50">
          Same professors. Same classrooms. <span className="text-savings">Same degree.</span>
          <br />
          A fraction of the cost.
        </p>
      </Section>

      {/* Cost teaser */}
      <Section id="cost-teaser">
        <div className="grid md:grid-cols-[3fr_2fr] gap-x-12 gap-y-10 items-center">
          <div>
            <Eyebrow>Cost &amp; Savings</Eyebrow>
            <h2 className="mt-3 font-serif tracking-tight text-balance text-3xl md:text-4xl leading-[1.1] text-neutral-900">
              The same 33-credit degree, {fmt(cost.savingUsd)} lighter.
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed max-w-lg">
              Full program at Illinois Tech: {fmt(cost.fullCost)}. The 1+1 pathway: &asymp;{fmt(cost.pathwayTotal)}. Same degree, same university, up to{' '}
              <Highlight>&asymp;{cost.allInSavingPct}% lower</Highlight> all-in cost.
            </p>
            <div className="mt-8">
              <Button to="/admissions" variant="primary">
                See the Full Breakdown <ArrowRight size={15} className="ml-1" />
              </Button>
            </div>
          </div>
          <div className="rounded-3xl bg-ink p-10 text-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:rotate-1">
            <p className="font-mono uppercase tracking-widest text-[10px] text-savings">You Save</p>
            <p className="mt-3 font-serif text-5xl md:text-6xl tracking-tight text-neutral-50">
              <CountUp value={cost.savingUsd} prefix="$" />
            </p>
            <p className="mt-2 text-sm text-neutral-400">
              up to <Highlight>&asymp;{cost.allInSavingPct}% lower</Highlight>, all-in
            </p>
          </div>
        </div>
      </Section>

      {/* Careers */}
      <CareerOutcomes />

      {/* Hiring companies marquee */}
      <Reveal className="bg-white border-y-[0.5px] border-neutral-200 py-10">
        <p className="text-center font-mono uppercase tracking-widest text-[10px] text-neutral-500 mb-8">
          Where Data Science Talent Gets Hired
        </p>
        <LogoMarquee />
      </Reveal>

      {/* Illinois Tech campus gallery */}
      <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {galleryImages.map((img) => (
          <div key={img.src} className="group overflow-hidden aspect-square">
            <img
              src={img.src}
              alt={img.alt}
              className={`h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:rotate-1 ${img.src.endsWith('/22.jpg') ? 'object-[85%_center]' : ''}`}
            />
          </div>
        ))}
      </Reveal>

      <CTASection />
    </>
  )
}

function CampusGallery() {
  const sectionRef = useRef(null)
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let frame
    const update = () => {
      frame = 0
      const section = sectionRef.current
      const viewport = viewportRef.current
      const track = trackRef.current
      if (!section || !viewport || !track) return
      const distance = section.offsetHeight - window.innerHeight
      const progress = Math.min(1, Math.max(0, -section.getBoundingClientRect().top / distance))
      setOffset(progress * (track.scrollWidth - viewport.clientWidth))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <>
      <section ref={sectionRef} data-testid="campus-scroll-gallery" className="hidden h-[400vh] md:block">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-16">
          <div className="mx-auto mb-8 w-full max-w-6xl px-6">
            <Eyebrow>Life at Illinois Tech</Eyebrow>
            <p className="mt-3 max-w-md font-serif text-3xl tracking-tight text-neutral-900">Your next classroom is Chicago.</p>
          </div>
          <div ref={viewportRef} className="overflow-hidden">
            <div ref={trackRef} className="flex gap-4 px-6 will-change-transform" style={{ transform: `translate3d(-${offset}px, 0, 0)` }}>
              {campusGalleryImages.map((img) => (
                <figure key={img.src} className="h-[55vh] w-[68vw] max-w-4xl shrink-0 overflow-hidden rounded-2xl">
                  <img src={img.src} alt={img.alt} className={`h-full w-full object-cover ${img.src.endsWith('/24.jpg') ? 'object-[center_20%]' : ''}`} />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:hidden">
        <div className="px-6"><Eyebrow>Life at Illinois Tech</Eyebrow></div>
        <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2">
          {campusGalleryImages.map((img) => (
            <img key={img.src} src={img.src} alt={img.alt} className="h-72 w-[82vw] shrink-0 snap-center rounded-2xl object-cover" />
          ))}
        </div>
      </section>
    </>
  )
}

function Badge({ icon: Icon, children }) {
  return (
    <div className="flex items-center justify-center gap-2 text-sm font-medium text-neutral-700 transition-transform duration-300 hover:scale-105">
      <Icon size={16} className="text-savings" />
      <span>{children}</span>
    </div>
  )
}
