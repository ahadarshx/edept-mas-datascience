import { FieldGrid, TextField, RadioGroup, CheckGroup } from '../../components/form/Field'

const DECLARATIONS = [
  'All information provided in this application is true, accurate, and complete to the best of my knowledge.',
  'All documents submitted are authentic and have not been altered or falsified. I understand that submission of false documents constitutes academic fraud and will result in immediate disqualification and may be reported to relevant authorities.',
  'I have not been academically dismissed or disciplined by any institution and I have disclosed all institutions attended.',
  'I understand that conditional admission (for final-year students) is subject to satisfactory completion of my current degree with the required minimum score.',
  'I acknowledge that meeting minimum eligibility criteria does not guarantee admission. Selection decisions are at the sole discretion of Mahindra University and/or Illinois Institute of Technology, Chicago.',
  'I agree to provide financial documentation and bank statements confirming funding capability when requested.',
  'I consent to edept, Mahindra University, and Illinois Institute of Technology sharing my application data for the purpose of processing this admission.',
  'I understand that application fees are non-refundable.',
]

export function DeclarationStep({ values = {} }) {
  return (
    <>
      <div className="rounded-xl border-[0.5px] border-neutral-200 bg-neutral-50 p-6 text-[13px] leading-relaxed text-neutral-700">
        <p className="mb-3 font-medium text-neutral-900">I, the undersigned, hereby declare that:</p>
        <ol className="list-decimal space-y-2.5 pl-5">
          {DECLARATIONS.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ol>
      </div>

      <FieldGrid className="mt-6">
        <TextField name="signature" label="Full Legal Name (as signature)" required defaultValue={values.signature} placeholder="Type your full legal name to sign" />
        <TextField name="declaration_date" label="Date of Declaration" type="date" required defaultValue={values.declaration_date} />
        <RadioGroup
          span={2}
          name="intake"
          label="Preferred Intake"
          required
          defaultValue={values.intake}
          options={[
            { value: 'spring-2027', label: 'Spring 2027 (January)' },
            { value: 'fall-2027', label: 'Fall 2027 (August / September)' },
            { value: 'spring-2028', label: 'Spring 2028 (January)' },
          ]}
        />
        <CheckGroup
          span={2}
          name="heard_about"
          label="How did you hear about this program?"
          options={['edept website', 'Social media', 'College / University fair', 'Faculty referral', 'Current/Former student', 'Online advertisement', 'Other']}
        />
      </FieldGrid>

      <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-xl border-[0.5px] border-neutral-200 bg-white p-4 text-sm text-neutral-700">
        <input type="checkbox" name="agree" required className="mt-0.5 h-4 w-4 accent-[#12539f]" />
        <span>
          I have read, understood, and agree to the above declaration. <span className="text-danger">*</span>
        </span>
      </label>
    </>
  )
}
