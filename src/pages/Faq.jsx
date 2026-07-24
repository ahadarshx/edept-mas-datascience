import { Section, Eyebrow } from '../components/Section'
import { FAQAccordion } from '../components/FAQAccordion'
import { CTASection } from '../components/CTASection'
import { faqs } from '../data/content'

export function Faq() {
  return (
    <>
      <Section className="!pb-10 md:!pb-14">
        <Eyebrow>FAQ</Eyebrow>
        <h1 className="mt-3 font-serif tracking-tight text-balance text-4xl md:text-5xl leading-[1.1] text-neutral-900">
          Frequently Asked Questions
        </h1>
      </Section>

      <Section className="!pt-0">
        <FAQAccordion faqs={faqs} />
      </Section>

      <CTASection />
    </>
  )
}
