import { Section, Eyebrow } from '../components/Section'
import { CostComparison } from '../components/CostComparison'
import { CTASection } from '../components/CTASection'

export function Cost() {
  return (
    <>
      <Section className="!pb-8 text-center">
        <Eyebrow>Tuition &amp; Estimated Costs</Eyebrow>
        <h1 className="mt-3 mx-auto max-w-2xl font-serif tracking-tight text-balance text-4xl md:text-5xl leading-[1.1] text-neutral-900">
          This is the whole pitch: same degree, real savings.
        </h1>
        <p className="mt-4 mx-auto max-w-xl text-neutral-600 leading-relaxed">
          Firm numbers, not a range: here is exactly what the full Illinois Tech program costs, and what you pay on the 1+1 pathway instead.
        </p>
      </Section>

      <Section className="!pt-0">
        <CostComparison />
      </Section>

      <CTASection />
    </>
  )
}
