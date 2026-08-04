import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Section, Eyebrow } from '../components/Section'
import { Button } from '../components/Button'
import { PersonalStep } from './apply/PersonalStep'
import { AcademicStep } from './apply/AcademicStep'
import { TestScoresStep } from './apply/TestScoresStep'
import { FinancialStep } from './apply/FinancialStep'
import { EssaysStep } from './apply/EssaysStep'
import { RecommendationsStep } from './apply/RecommendationsStep'
import { DocumentsStep } from './apply/DocumentsStep'
import { DeclarationStep } from './apply/DeclarationStep'

const STEPS = [
  { key: 'personal', label: 'Personal Info', title: 'Personal Information', subtitle: 'As it appears on your passport / government-issued ID', Component: PersonalStep },
  { key: 'academic', label: 'Academic History', title: 'Academic History', subtitle: 'All post-secondary education, most recent first', Component: AcademicStep },
  { key: 'testScores', label: 'Test Scores', title: 'Test Scores', subtitle: 'English proficiency required for Illinois Tech · GRE optional', Component: TestScoresStep },
  { key: 'financial', label: 'Financial Plan', title: 'Financial Plan & Funding Capability', subtitle: 'Both institutions require evidence of ability to fund education and living costs', Component: FinancialStep },
  { key: 'essays', label: 'Statement & Essays', title: 'Statement of Purpose & Short Essays', subtitle: 'Help both admissions committees understand your goals and fit for this program', Component: EssaysStep },
  { key: 'recommendations', label: 'Recommendations', title: 'Letters of Recommendation', subtitle: 'Optional · 1 Faculty · 1 Academic or Professional', Component: RecommendationsStep },
  { key: 'documents', label: 'Documents', title: 'Document Checklist & Uploads', subtitle: 'PDF or high-resolution image · Max 5 MB per file', Component: DocumentsStep },
  { key: 'declaration', label: 'Declaration', title: 'Declaration & Certification', subtitle: 'Please read carefully before submitting', Component: DeclarationStep },
]

// FormData collapses repeated keys to the last value; multi-selects (like the
// "how did you hear about us" checkboxes) need the full list instead.
function formDataToObject(formData) {
  const obj = {}
  for (const key of new Set(formData.keys())) {
    const all = formData.getAll(key)
    obj[key] = all.length > 1 ? all : all[0]
  }
  return obj
}

export function Apply() {
  const [stepIndex, setStepIndex] = useState(0)
  const [data, setData] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const step = STEPS[stepIndex]
  const isLast = stepIndex === STEPS.length - 1

  function handleSubmitStep(e) {
    e.preventDefault()
    const stepValues = formDataToObject(new FormData(e.currentTarget))
    const next = { ...data, [step.key]: stepValues }
    setData(next)

    if (isLast) {
      // TODO: POST `next` to the CRM intake endpoint once it's provided.
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setStepIndex((i) => i + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  function handleBack() {
    setStepIndex((i) => Math.max(0, i - 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (submitted) {
    return (
      <Section className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-muted/40 text-accent">
          <CheckCircle2 size={32} />
        </div>
        <h1 className="mt-6 font-serif text-4xl tracking-tight text-neutral-900">Application received</h1>
        <p className="mx-auto mt-4 max-w-md text-neutral-600 leading-relaxed">
          Thank you for applying to the MAS in Data Science pathway. An edept counsellor will review your application and reach out within 3–5 business days.
        </p>
        <div className="mt-8">
          <Button to="/">Back to Home</Button>
        </div>
      </Section>
    )
  }

  const Component = step.Component

  return (
    <>
      <Section className="!pb-6 md:!pb-8">
        <Eyebrow>Pathway Application</Eyebrow>
        <h1 className="mt-3 font-serif tracking-tight text-balance text-4xl md:text-5xl leading-[1.1] text-neutral-900">
          MAS in Data Science Application
        </h1>
        <p className="mt-4 max-w-xl text-neutral-600 leading-relaxed">
          Mahindra University → Illinois Institute of Technology, Chicago. Complete all 8 sections below; you can move back and forth freely before submitting.
        </p>
      </Section>

      <Section className="!pt-0">
        {/* Progress */}
        <div className="mb-10">
          <div className="flex items-baseline justify-between font-mono text-[11px] uppercase tracking-widest text-neutral-500">
            <span>
              Step {stepIndex + 1} of {STEPS.length}
            </span>
            <span className="text-accent">{step.label}</span>
          </div>
          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-neutral-200">
            <div
              className="h-full rounded-full bg-accent transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ width: `${((stepIndex + 1) / STEPS.length) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmitStep} key={step.key}>
          <div className="mb-8 flex items-start gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-sm text-white">{stepIndex + 1}</span>
            <div>
              <h2 className="font-serif text-2xl tracking-tight text-neutral-900">{step.title}</h2>
              <p className="mt-1 text-sm text-neutral-500">{step.subtitle}</p>
            </div>
          </div>

          <Component values={data[step.key] || {}} />

          <div className="mt-10 flex items-center justify-between border-t-[0.5px] border-neutral-200 pt-6">
            {stepIndex > 0 ? (
              <Button type="button" variant="outline" onClick={handleBack}>
                Back
              </Button>
            ) : (
              <span />
            )}
            <Button type="submit" variant={isLast ? 'savings' : 'primary'}>
              {isLast ? 'Submit Application' : 'Continue'}
            </Button>
          </div>
        </form>
      </Section>
    </>
  )
}
