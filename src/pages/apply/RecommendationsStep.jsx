import { FieldGrid, TextField, InfoBanner } from '../../components/form/Field'

function Recommender({ number, label, values, prefix }) {
  return (
    <div className="mt-6 rounded-xl border-[0.5px] border-neutral-200 bg-neutral-50 p-5">
      <p className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-widest text-accent">
        Recommender {number} — {label} <span className="text-danger">*</span>
      </p>
      <FieldGrid cols={3}>
        <TextField name={`${prefix}_name`} label="Full Name" required defaultValue={values[`${prefix}_name`]} placeholder="Prof. / Dr. Name" />
        <TextField name={`${prefix}_title`} label="Designation / Title" required defaultValue={values[`${prefix}_title`]} placeholder="e.g. Associate Professor" />
        <TextField name={`${prefix}_institution`} label="Institution" required defaultValue={values[`${prefix}_institution`]} placeholder="University name" />
        <TextField name={`${prefix}_email`} label="Email Address" type="email" required defaultValue={values[`${prefix}_email`]} placeholder="Official institutional email" />
        <TextField name={`${prefix}_phone`} label="Phone Number" type="tel" defaultValue={values[`${prefix}_phone`]} placeholder="+91 XXXXX XXXXX" />
        <TextField
          name={`${prefix}_subject`}
          label={number === 1 ? 'Course / Subject Taught' : 'Relationship'}
          required
          defaultValue={values[`${prefix}_subject`]}
          placeholder={number === 1 ? 'e.g. Machine Learning, Linear Algebra' : 'e.g. Project supervisor, internship manager'}
        />
      </FieldGrid>
    </div>
  )
}

export function RecommendationsStep({ values = {} }) {
  return (
    <>
      <InfoBanner>
        Recommendations must come from faculty who have taught you, or professional supervisors who can assess your technical aptitude and readiness for graduate study. Personal friends and family are not accepted. Recommenders will be contacted directly.
      </InfoBanner>

      <Recommender number={1} label="Faculty" prefix="rec1" values={values} />
      <Recommender number={2} label="Academic or Professional" prefix="rec2" values={values} />
    </>
  )
}
