import { FieldGrid, TextareaField, SubHeading } from '../../components/form/Field'

const MIN_SOP_WORDS = 500

function countWords(text) {
  return text.trim().split(/\s+/).filter(Boolean).length
}

function validateSopLength(e) {
  const words = countWords(e.target.value)
  e.target.setCustomValidity(words < MIN_SOP_WORDS ? `Statement of Purpose must be at least ${MIN_SOP_WORDS} words (currently ${words}).` : '')
}

export function EssaysStep({ values = {} }) {
  return (
    <>
      <SubHeading>Statement of Purpose</SubHeading>
      <FieldGrid cols={1}>
        <TextareaField
          ref={(el) => el && validateSopLength({ target: el })}
          name="sop"
          label="Statement of Purpose"
          required
          rows={10}
          defaultValue={values.sop}
          placeholder="In 500–800 words, address: (1) Your academic background and how it prepared you for Data Science; (2) Specific areas of Data Science that interest you and why; (3) Your short-term and long-term career goals; (4) Why you chose this Mahindra–Illinois Tech pathway; (5) Any research, projects, or internships relevant to your goals."
          helper="Required: minimum 500 words (up to 800). Illinois Tech reviews this carefully. Be specific about faculty or research interests at Illinois Tech if relevant."
          onInput={validateSopLength}
        />
      </FieldGrid>

      <SubHeading>Short Answer Questions</SubHeading>
      <FieldGrid cols={1}>
        <TextareaField
          name="essay_career_plans"
          label="What are your career plans after completing the MAS in Data Science?"
          required
          defaultValue={values.essay_career_plans}
          placeholder="150–200 words..."
        />
        <TextareaField
          name="essay_explain"
          label="Is there anything in your academic record or application that requires explanation?"
          hint="(Optional: e.g. grade dip, gap year)"
          defaultValue={values.essay_explain}
          placeholder="Briefly explain any extenuating circumstances if applicable..."
        />
      </FieldGrid>
    </>
  )
}
