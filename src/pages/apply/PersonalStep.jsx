import { FieldGrid, TextField, SelectField, SubHeading } from '../../components/form/Field'

export function PersonalStep({ values = {} }) {
  return (
    <>
      <SubHeading>Full Legal Name</SubHeading>
      <FieldGrid cols={3}>
        <TextField name="first_name" label="First Name" required defaultValue={values.first_name} placeholder="Given name" />
        <TextField name="middle_name" label="Middle Name" hint="(if applicable)" defaultValue={values.middle_name} placeholder="Middle name" />
        <TextField name="last_name" label="Last / Family Name" required defaultValue={values.last_name} placeholder="Surname" />
      </FieldGrid>

      <SubHeading>Identity &amp; Demographics</SubHeading>
      <FieldGrid>
        <TextField name="dob" label="Date of Birth" type="date" required defaultValue={values.dob} />
        <SelectField
          name="gender"
          label="Gender"
          required
          defaultValue={values.gender}
          options={['Male', 'Female', 'Non-binary / Gender non-conforming', 'Prefer not to say']}
        />
        <TextField name="nationality" label="Nationality" required defaultValue={values.nationality} placeholder="e.g. Indian" />
        <TextField name="birth_country" label="Country of Birth" required defaultValue={values.birth_country} placeholder="Country" />
        <TextField name="passport_number" label="Passport Number" required defaultValue={values.passport_number} placeholder="As on passport" />
        <TextField
          name="passport_expiry"
          label="Passport Expiry Date"
          type="date"
          required
          defaultValue={values.passport_expiry}
          helper="Must be valid for at least 18 months beyond program start."
        />
      </FieldGrid>

      <SubHeading>Contact Details</SubHeading>
      <FieldGrid>
        <TextField
          name="email"
          label="Email Address"
          type="email"
          required
          defaultValue={values.email}
          placeholder="your@email.com"
          helper="All correspondence will be sent here. Use a personal, non-institutional email."
        />
        <TextField name="mobile" label="Mobile Number" type="tel" required defaultValue={values.mobile} placeholder="+91 XXXXX XXXXX" />
        <TextField span={2} name="address" label="Current Residential Address" required defaultValue={values.address} placeholder="Street / Apartment / Building" />
        <TextField name="city" label="City" required defaultValue={values.city} placeholder="City" />
        <TextField name="state" label="State / Province" required defaultValue={values.state} placeholder="State" />
        <TextField name="zip" label="PIN / ZIP Code" required defaultValue={values.zip} placeholder="PIN code" />
        <TextField name="country" label="Country" required defaultValue={values.country || 'India'} />
      </FieldGrid>

      <SubHeading>Emergency Contact</SubHeading>
      <FieldGrid cols={3}>
        <TextField name="emergency_name" label="Contact Name" required defaultValue={values.emergency_name} placeholder="Full name" />
        <SelectField
          name="emergency_relationship"
          label="Relationship"
          required
          defaultValue={values.emergency_relationship}
          options={['Parent', 'Guardian', 'Spouse', 'Sibling', 'Other']}
        />
        <TextField name="emergency_phone" label="Contact Phone" type="tel" required defaultValue={values.emergency_phone} placeholder="+91 XXXXX XXXXX" />
      </FieldGrid>
    </>
  )
}
