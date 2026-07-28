import { FieldGrid, TextField, SelectField, TextareaField, SubHeading, InfoBanner } from '../../components/form/Field'

export function AcademicStep({ values = {} }) {
  return (
    <>
      <InfoBanner title="Eligibility requirement">
        A bachelor&rsquo;s degree in Computer Science, Mathematics, Statistics, Engineering, or a closely related quantitative field. Minimum 60% aggregate (or 6.0 CGPA on a 10-point scale). Final-year students may apply provisionally.
      </InfoBanner>

      <SubHeading>Undergraduate Degree (Primary)</SubHeading>
      <FieldGrid>
        <TextField span={2} name="ug_institution" label="Name of University / Institution" required defaultValue={values.ug_institution} placeholder="Full official name of university" />
        <TextField span={2} name="ug_degree" label="Degree / Programme Name" required defaultValue={values.ug_degree} placeholder="e.g. B.Tech in Computer Science and Engineering" />
        <TextField name="ug_major" label="Specialisation / Major" required defaultValue={values.ug_major} placeholder="e.g. Artificial Intelligence" />
        <SelectField name="ug_duration" label="Programme Duration" required defaultValue={values.ug_duration} options={['3 years', '4 years', '5 years (integrated)', 'Other']} />
        <TextField name="ug_start" label="Start Month & Year" type="month" required defaultValue={values.ug_start} />
        <TextField name="ug_end" label="End / Expected Graduation" type="month" required defaultValue={values.ug_end} />
        <SelectField
          name="ug_grading_system"
          label="Grading System"
          required
          defaultValue={values.ug_grading_system}
          options={['CGPA (10-point scale)', 'CGPA (4-point scale)', 'Percentage (%)', 'Grade (A/B/C)']}
        />
        <TextField name="ug_score" label="Score / CGPA" required defaultValue={values.ug_score} placeholder="e.g. 8.4 / 10 or 78%" />
        <TextField
          name="ug_equivalent_percentage"
          label="Equivalent Percentage"
          required
          defaultValue={values.ug_equivalent_percentage}
          placeholder="e.g. 78.5%"
          helper="If CGPA, use your university's official conversion formula."
        />
        <SelectField
          name="ug_status"
          label="Current Status"
          required
          defaultValue={values.ug_status}
          options={['Completed — Degree Awarded', 'Final Year — Awaiting Results', 'In Progress']}
        />
        <SelectField
          name="ug_medium"
          label="Medium of Instruction"
          required
          defaultValue={values.ug_medium}
          options={['English (exclusively)', 'English and another language', 'Another language']}
        />
        <TextField name="ug_country" label="Country of Study" required defaultValue={values.ug_country || 'India'} />
      </FieldGrid>

      <SubHeading hint="(postgraduate or second bachelor's — if applicable)">Additional Degree</SubHeading>
      <FieldGrid>
        <TextField span={2} name="pg_institution" label="Institution Name" defaultValue={values.pg_institution} placeholder="Name of institution" />
        <TextField span={2} name="pg_degree" label="Degree & Specialisation" defaultValue={values.pg_degree} placeholder="e.g. M.Sc. in Statistics" />
        <TextField name="pg_year" label="Year Completed" defaultValue={values.pg_year} placeholder="e.g. 2023" />
        <TextField name="pg_score" label="Score / CGPA / %" defaultValue={values.pg_score} placeholder="Score" />
      </FieldGrid>

      <SubHeading>Relevant Coursework &amp; Technical Background</SubHeading>
      <InfoBanner>
        Illinois Tech requires basic knowledge of discrete mathematics, linear algebra, probability, statistics, relational databases, and at least one programming language (Python, Java, C++, etc.).
      </InfoBanner>
      <FieldGrid className="mt-4">
        <TextareaField
          span={2}
          name="relevant_courses"
          label="Key relevant courses completed"
          required
          defaultValue={values.relevant_courses}
          placeholder="List relevant courses, e.g.: Data Structures, Linear Algebra, Probability &amp; Statistics, Database Systems, Machine Learning, Python Programming..."
        />
        <TextField name="programming_tools" label="Programming Languages / Tools" required defaultValue={values.programming_tools} placeholder="e.g. Python, SQL, R, MATLAB, TensorFlow" />
        <SelectField
          name="programming_experience"
          label="Years of Programming Experience"
          defaultValue={values.programming_experience}
          options={['Less than 1 year', '1–2 years', '2–4 years', '4+ years']}
        />
      </FieldGrid>

      <SubHeading hint="(if any)">Work Experience</SubHeading>
      <FieldGrid>
        <SelectField
          name="work_experience"
          label="Total Professional Experience"
          defaultValue={values.work_experience}
          options={['No experience (fresher)', 'Less than 1 year', '1–2 years', '2–4 years', '4+ years']}
        />
        <TextField name="employer" label="Most Recent Employer" defaultValue={values.employer} placeholder="Company name" />
        <TextField name="role" label="Role / Designation" defaultValue={values.role} placeholder="Job title" />
        <TextField name="domain" label="Domain / Industry" defaultValue={values.domain} placeholder="e.g. FinTech, Healthcare, IT Services" />
        <TextareaField
          span={2}
          rows={3}
          name="work_description"
          label="Brief Description of Work Relevant to Data Science"
          defaultValue={values.work_description}
          placeholder="Briefly describe any data-related work, projects, or responsibilities..."
        />
      </FieldGrid>
    </>
  )
}
