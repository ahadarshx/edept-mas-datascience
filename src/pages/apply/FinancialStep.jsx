import { FieldGrid, TextField, SelectField, TextareaField, RadioGroup, InfoBanner, WarningBanner } from '../../components/form/Field'
import { cost } from '../../data/content'

function PhaseCard({ badge, badgeClass, title, children }) {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border-[0.5px] border-neutral-200">
      <div className="flex items-center gap-3 border-b-[0.5px] border-neutral-200 bg-neutral-50 px-5 py-3">
        <span className={`rounded-full px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest ${badgeClass}`}>{badge}</span>
        <span className="text-sm font-semibold text-neutral-900">{title}</span>
      </div>
      <div className="space-y-5 p-5">{children}</div>
    </div>
  )
}

export function FinancialStep({ values = {} }) {
  return (
    <>
      <InfoBanner title="Why this matters">
        Mahindra University assesses ability to pay program fees. Illinois Tech (F-1 visa) requires a Financial Affidavit of Support covering at least one year of tuition + estimated living expenses (~USD 35,000–45,000/year). Provide details for both phases.
      </InfoBanner>

      <PhaseCard badge="Phase I" badgeClass="bg-emerald-100 text-emerald-800" title="Mahindra University, Hyderabad, India">
        <FieldGrid>
          <TextField name="india_tuition" label="Estimated Annual Tuition (INR)" required defaultValue={values.india_tuition} placeholder="e.g. ₹5,00,000" />
          <TextField name="india_living_cost" label="Estimated Annual Living Cost (INR)" defaultValue={values.india_living_cost} placeholder="e.g. ₹2,40,000" />
          <SelectField
            name="india_funding_source"
            label="Primary Funding Source"
            required
            defaultValue={values.india_funding_source}
            options={['Personal / Family savings', 'Education loan (Indian bank)', 'Employer sponsorship', 'Government scholarship', 'Private scholarship', 'Combination of sources']}
          />
          <TextField name="india_sponsor_name" label="Sponsor Name" hint="(if applicable)" defaultValue={values.india_sponsor_name} placeholder="Parent / Guardian / Employer name" />
          <SelectField
            name="india_sponsor_relationship"
            label="Sponsor's Relationship to Applicant"
            defaultValue={values.india_sponsor_relationship}
            options={['Self', 'Father', 'Mother', 'Spouse', 'Employer', 'Other relative']}
          />
          <SelectField
            name="india_sponsor_income"
            label="Sponsor's Annual Income (INR approx.)"
            defaultValue={values.india_sponsor_income}
            options={['Below ₹5 lakhs', '₹5 – 10 lakhs', '₹10 – 20 lakhs', '₹20 – 50 lakhs', 'Above ₹50 lakhs']}
          />
          <TextField
            span={2}
            name="india_liquid_funds"
            label="Total Liquid Funds Available for Phase I (INR)"
            required
            defaultValue={values.india_liquid_funds}
            placeholder="Total savings / accessible funds for India phase"
            helper="Include bank balance, FDs, or other liquid assets available for education."
          />
          <TextareaField
            span={2}
            rows={3}
            name="india_loan_details"
            label="Loan Pre-Approval / Sanction Details"
            hint="(if education loan)"
            defaultValue={values.india_loan_details}
            placeholder="Bank name, loan amount sanctioned, status of application..."
          />
          <TextareaField
            span={2}
            rows={3}
            name="india_scholarships"
            label="Any Scholarships or Financial Aid Applied For / Received?"
            defaultValue={values.india_scholarships}
            placeholder="Name of scholarship, awarding body, amount, status..."
          />
        </FieldGrid>
      </PhaseCard>

      <PhaseCard badge="Phase II" badgeClass="bg-accent-muted text-accent" title="Illinois Institute of Technology, Chicago, USA">
        <WarningBanner title="F-1 Visa Requirement">
          Illinois Tech requires a Financial Affidavit of Support for I-20 issuance. Funds must be liquid, available in USD, and sufficient for at least one academic year. Documents must be dated within 6 months of program start.
        </WarningBanner>
        <FieldGrid>
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-neutral-600">Estimated Tuition (USD)</span>
            <div className="w-full rounded-lg border-[0.5px] border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-700">
              ${cost.usPortionCost.toLocaleString('en-US')}
            </div>
            <span className="text-xs text-neutral-500">Fixed program rate for the full Illinois Tech phase (24 credits).</span>
          </div>
          <SelectField
            name="us_funding_source"
            label="Primary Funding Source for USA"
            required
            defaultValue={values.us_funding_source}
            options={[
              'Personal / Family savings (in USD or convertible)',
              'Education loan (Indian bank, Forex)',
              'International education loan (USD)',
              'Employer sponsorship',
              'Government scholarship (e.g. ICCR)',
              'Illinois Tech scholarship / assistantship',
              'Combination of sources',
            ]}
          />
        </FieldGrid>
      </PhaseCard>

      <div className="mt-6">
        <RadioGroup
          name="bank_confirm"
          label="Do you confirm that you (or your sponsor) can provide bank statements evidencing sufficient funds upon request?"
          required
          defaultValue={values.bank_confirm}
          options={[
            { value: 'yes', label: 'Yes, I confirm' },
            { value: 'no', label: 'No / Not yet' },
          ]}
        />
      </div>
    </>
  )
}
