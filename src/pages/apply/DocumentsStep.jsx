import { FieldGrid, UploadField, SubHeading } from '../../components/form/Field'

export function DocumentsStep() {
  return (
    <>
      <SubHeading>Required Documents</SubHeading>
      <FieldGrid>
        <UploadField name="doc_passport" label="Passport (Identity Page)" required />
        <UploadField
          name="doc_degree_certificate"
          label="Undergraduate Degree Certificate / Provisional Certificate"
          required
          helper="If final-year: upload enrolment certificate + latest transcript."
        />
        <UploadField name="doc_transcripts" label="All Official Transcripts (Semester-wise)" required helper="Combined PDF preferred." />
        <UploadField name="doc_resume" label="Resume / CV" required helper="Maximum 2 pages. Include education, projects, internships, skills." />
        <UploadField
          name="doc_english_score"
          label="English Proficiency Score Report"
          required
          helper="Or medium-of-instruction certificate if claiming English waiver."
        />
        <UploadField name="doc_bank_statement" label="Bank Statement / Financial Evidence" required helper="Last 3–6 months. Must show sufficient funds for education + living costs." />
      </FieldGrid>

      <SubHeading>Conditional / Additional Documents</SubHeading>
      <FieldGrid>
        <UploadField name="doc_gre" label="GRE Score Report" hint="(if submitting)" />
        <UploadField name="doc_loan_letter" label="Education Loan Sanction Letter" hint="(if applicable)" />
        <UploadField name="doc_employer_noc" label="Employer NOC / Sponsorship Letter" hint="(if sponsored)" />
        <UploadField name="doc_publications" label="Publication / Research Papers" hint="(if any)" />
      </FieldGrid>

      <p className="mt-6 text-xs text-neutral-500">PDF or high-resolution image · Max 5 MB per file.</p>
    </>
  )
}
