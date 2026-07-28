import { FieldGrid, TextField, SelectField, SubHeading, InfoBanner, WarningBanner } from '../../components/form/Field'

const TESTS = [
  { key: 'ielts', name: 'IELTS Academic', scorePh: 'e.g. 7.0', sectionPh: 'e.g. 7.0 / 7.0 / 6.5 / 6.5', min: 'Overall 6.5 · Each band ≥ 6.0' },
  { key: 'toefl', name: 'TOEFL iBT', scorePh: 'e.g. 95', sectionPh: 'e.g. 24 / 24 / 24 / 23', min: 'Total ≥ 80 · Each section ≥ 20' },
  { key: 'duolingo', name: 'Duolingo English Test', scorePh: 'e.g. 120', sectionPh: 'Literacy / Comprehension / Conv.', min: 'Overall ≥ 115' },
]

export function TestScoresStep({ values = {} }) {
  return (
    <>
      <SubHeading>English Proficiency Test *</SubHeading>
      <WarningBanner title="Required for Illinois Tech (Phase II)">
        Applicants whose undergraduate instruction was not exclusively in English must submit a valid score. Scores must be dated within 2 years of application. Submit ONE test score minimum.
      </WarningBanner>

      <div className="mt-4 overflow-x-auto rounded-xl border-[0.5px] border-neutral-200">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="bg-neutral-50 text-left">
              {['Test', 'Overall / Total', 'Section Scores', 'Test Date', 'Illinois Tech Minimum'].map((h) => (
                <th key={h} className="border-b-[0.5px] border-neutral-200 px-3 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-neutral-500">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TESTS.map((t) => (
              <tr key={t.key} className="odd:bg-white even:bg-neutral-50/50">
                <td className="border-b-[0.5px] border-neutral-200 px-3 py-2.5 font-medium text-neutral-900">{t.name}</td>
                <td className="border-b-[0.5px] border-neutral-200 px-3 py-2.5">
                  <input
                    name={`${t.key}_overall`}
                    defaultValue={values[`${t.key}_overall`]}
                    placeholder={t.scorePh}
                    className="w-full border-none bg-transparent text-sm focus:outline-none"
                  />
                </td>
                <td className="border-b-[0.5px] border-neutral-200 px-3 py-2.5">
                  <input
                    name={`${t.key}_sections`}
                    defaultValue={values[`${t.key}_sections`]}
                    placeholder={t.sectionPh}
                    className="w-full border-none bg-transparent text-sm focus:outline-none"
                  />
                </td>
                <td className="border-b-[0.5px] border-neutral-200 px-3 py-2.5">
                  <input type="date" name={`${t.key}_date`} defaultValue={values[`${t.key}_date`]} className="w-full border-none bg-transparent text-sm focus:outline-none" />
                </td>
                <td className="border-b-[0.5px] border-neutral-200 px-3 py-2.5 text-xs italic text-neutral-500">{t.min}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-neutral-500">
        Fill only the row applicable. Leave others blank. If English was the exclusive medium of instruction, indicate that in Section 2 and attach a medium-of-instruction certificate.
      </p>

      <FieldGrid className="mt-5">
        <TextField name="test_registration_id" label="Registration / Candidate ID" defaultValue={values.test_registration_id} placeholder="Test registration number" />
        <SelectField
          name="score_sent"
          label="Score Report Sent to Illinois Tech?"
          required
          defaultValue={values.score_sent}
          options={['Yes — sent directly from testing agency (Code: 1318)', 'Not yet — will send before enrollment', 'Not applicable — English medium waiver claimed']}
        />
      </FieldGrid>

      <SubHeading hint="(Optional — submission encouraged but not required)">GRE General Test</SubHeading>
      <InfoBanner>
        This pathway program is GRE Optional. Sharing a strong GRE score can strengthen your application. If submitting, use Illinois Tech code <strong>1318</strong>. Scores must be within 5 years.
      </InfoBanner>

      <FieldGrid cols={3} className="mt-4">
        <TextField name="gre_quant" label="Quantitative Reasoning" type="number" min="130" max="170" defaultValue={values.gre_quant} placeholder="e.g. 163" helper="130–170" />
        <TextField name="gre_verbal" label="Verbal Reasoning" type="number" min="130" max="170" defaultValue={values.gre_verbal} placeholder="e.g. 152" helper="130–170" />
        <TextField name="gre_awa" label="Analytical Writing" type="number" min="0" max="6" step="0.5" defaultValue={values.gre_awa} placeholder="e.g. 4.0" helper="0.0–6.0" />
        <TextField name="gre_total" label="Total (Quant + Verbal)" type="number" min="260" max="340" defaultValue={values.gre_total} placeholder="e.g. 315" helper="Illinois Tech min. for MAS: 292" />
        <TextField name="gre_date" label="Test Date" type="date" defaultValue={values.gre_date} />
        <TextField name="gre_registration_id" label="Registration Number" defaultValue={values.gre_registration_id} placeholder="ETS registration number" />
      </FieldGrid>
    </>
  )
}
