import { Upload } from 'lucide-react'
import { forwardRef, useState } from 'react'

const inputClass =
  'w-full rounded-lg border-[0.5px] border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-muted/60'

function LabelText({ label, required, hint }) {
  return (
    <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-neutral-600">
      {label}
      {required && <span className="ml-1 text-danger">*</span>}
      {hint && <span className="ml-1.5 font-sans text-[11px] font-normal normal-case tracking-normal text-neutral-400">{hint}</span>}
    </span>
  )
}

export function FieldGrid({ cols = 2, className = '', children }) {
  const colClass = cols === 3 ? 'sm:grid-cols-3' : cols === 1 ? 'grid-cols-1' : 'sm:grid-cols-2'
  return <div className={`grid grid-cols-1 gap-x-6 gap-y-5 ${colClass} ${className}`}>{children}</div>
}

export function TextField({ label, required, hint, span, helper, defaultValue, className = '', ...props }) {
  return (
    <label className={`flex flex-col gap-1.5 ${span === 2 ? 'sm:col-span-2' : span === 3 ? 'sm:col-span-3' : ''} ${className}`}>
      <LabelText label={label} required={required} hint={hint} />
      <input className={inputClass} defaultValue={defaultValue} required={required} {...props} />
      {helper && <span className="text-xs text-neutral-500">{helper}</span>}
    </label>
  )
}

export const TextareaField = forwardRef(function TextareaField(
  { label, required, hint, span, helper, rows = 4, defaultValue, className = '', ...props },
  ref,
) {
  return (
    <label className={`flex flex-col gap-1.5 ${span === 2 ? 'sm:col-span-2' : span === 3 ? 'sm:col-span-3' : ''} ${className}`}>
      <LabelText label={label} required={required} hint={hint} />
      <textarea ref={ref} className={`${inputClass} resize-y`} rows={rows} defaultValue={defaultValue} required={required} {...props} />
      {helper && <span className="text-xs text-neutral-500">{helper}</span>}
    </label>
  )
})

export function SelectField({ label, required, hint, span, helper, options, defaultValue, className = '', ...props }) {
  return (
    <label className={`flex flex-col gap-1.5 ${span === 2 ? 'sm:col-span-2' : span === 3 ? 'sm:col-span-3' : ''} ${className}`}>
      <LabelText label={label} required={required} hint={hint} />
      <select
        className={inputClass}
        defaultValue={defaultValue}
        required={required}
        {...props}
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {helper && <span className="text-xs text-neutral-500">{helper}</span>}
    </label>
  )
}

export function RadioGroup({ label, required, name, options, span, defaultValue, className = '' }) {
  return (
    <div className={`flex flex-col gap-2 ${span === 2 ? 'sm:col-span-2' : ''} ${className}`}>
      <LabelText label={label} required={required} />
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <label
            key={o.value}
            className="cursor-pointer rounded-full border-[0.5px] border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-700 transition-colors duration-200 has-[:checked]:border-accent has-[:checked]:bg-accent-muted/30 has-[:checked]:text-accent"
          >
            <input
              type="radio"
              name={name}
              value={o.value}
              defaultChecked={defaultValue === o.value}
              required={required}
              className="mr-2 accent-[#12539f]"
            />
            {o.label}
          </label>
        ))}
      </div>
    </div>
  )
}

export function CheckGroup({ label, name, options, span, className = '' }) {
  return (
    <div className={`flex flex-col gap-2 ${span === 2 ? 'sm:col-span-2' : ''} ${className}`}>
      <LabelText label={label} />
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <label
            key={o}
            className="cursor-pointer rounded-full border-[0.5px] border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-700 transition-colors duration-200 has-[:checked]:border-accent has-[:checked]:bg-accent-muted/30 has-[:checked]:text-accent"
          >
            <input type="checkbox" name={name} value={o} className="mr-2 accent-[#12539f]" />
            {o}
          </label>
        ))}
      </div>
    </div>
  )
}

const TOOL_OPTIONS = [
  { key: 'r', label: 'R' },
  { key: 'python', label: 'Python' },
  { key: 'cpp_java', label: 'C++ / Java' },
  { key: 'sql', label: 'SQL' },
]

const EXPERIENCE_OPTIONS = ['<1 year', '1–2 years', '2–4 years', '4+ years']

// One checkbox per tool, each revealing its own years-of-experience select
// once checked, plus a free-text "Other" row for anything not listed.
export function ToolsExperienceField({ label, required, span, values = {} }) {
  const [checked, setChecked] = useState(() => {
    const init = {}
    TOOL_OPTIONS.forEach((t) => {
      init[t.key] = Boolean(values[`tool_${t.key}`])
    })
    init.other = Boolean(values.tool_other_name)
    return init
  })

  const toggle = (key) => (e) => setChecked((c) => ({ ...c, [key]: e.target.checked }))

  return (
    <div className={`flex flex-col gap-2 ${span === 2 ? 'sm:col-span-2' : ''}`}>
      <LabelText label={label} required={required} />
      <div className="flex flex-col gap-2">
        {TOOL_OPTIONS.map((t) => (
          <div key={t.key} className="flex flex-wrap items-center gap-3 rounded-lg border-[0.5px] border-neutral-300 bg-white px-4 py-2.5">
            <label className="flex min-w-[130px] items-center gap-2 text-sm text-neutral-700">
              <input type="checkbox" name={`tool_${t.key}`} defaultChecked={checked[t.key]} onChange={toggle(t.key)} className="accent-[#12539f]" />
              {t.label}
            </label>
            {checked[t.key] && (
              <select
                name={`tool_${t.key}_years`}
                defaultValue={values[`tool_${t.key}_years`] || ''}
                required
                className="ml-auto rounded-md border-[0.5px] border-neutral-300 bg-white px-2 py-1.5 text-xs text-neutral-900"
              >
                <option value="">Years of experience&hellip;</option>
                {EXPERIENCE_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
        <div className="flex flex-wrap items-center gap-3 rounded-lg border-[0.5px] border-neutral-300 bg-white px-4 py-2.5">
          <label className="flex items-center gap-2 text-sm text-neutral-700">
            <input type="checkbox" defaultChecked={checked.other} onChange={toggle('other')} className="accent-[#12539f]" />
            Other
          </label>
          {checked.other && (
            <>
              <input
                type="text"
                name="tool_other_name"
                defaultValue={values.tool_other_name}
                required
                placeholder="Name the tool"
                className="min-w-[130px] flex-1 rounded-md border-[0.5px] border-neutral-300 bg-white px-2 py-1.5 text-xs text-neutral-900 placeholder:text-neutral-400"
              />
              <select
                name="tool_other_years"
                defaultValue={values.tool_other_years || ''}
                required
                className="rounded-md border-[0.5px] border-neutral-300 bg-white px-2 py-1.5 text-xs text-neutral-900"
              >
                <option value="">Years&hellip;</option>
                {EXPERIENCE_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export function UploadField({ label, required, hint, span, helper, name, accept = '.pdf,.jpg,.jpeg,.png' }) {
  const [fileName, setFileName] = useState('')
  const [dragOver, setDragOver] = useState(false)

  return (
    <div className={`flex flex-col gap-1.5 ${span === 2 ? 'sm:col-span-2' : ''}`}>
      <LabelText label={label} required={required} hint={hint} />
      <label
        onDragOver={(e) => {
          e.preventDefault()
          setDragOver(true)
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragOver(false)
          const f = e.dataTransfer.files?.[0]
          if (f) setFileName(f.name)
        }}
        className={`relative flex cursor-pointer flex-col items-center gap-2 rounded-lg border-[1.5px] border-dashed px-4 py-6 text-center transition-colors duration-200 ${
          dragOver ? 'border-accent bg-accent-muted/20' : 'border-neutral-300 bg-neutral-50 hover:border-accent/60'
        }`}
      >
        <Upload size={18} className="text-neutral-400" />
        <span className="text-xs text-neutral-600">{fileName || 'Click to upload or drag and drop'}</span>
        {/* Not display:none — a required file input has to stay focusable so
            the browser can actually show its native validation message. */}
        <input
          type="file"
          name={name}
          accept={accept}
          required={required}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
        />
      </label>
      {helper && <span className="text-xs text-neutral-500">{helper}</span>}
    </div>
  )
}

export function SubHeading({ children, hint }) {
  return (
    <div className="mt-8 border-b-[0.5px] border-neutral-200 pb-2 font-mono text-xs font-semibold uppercase tracking-widest text-accent first:mt-0">
      {children}
      {hint && <span className="ml-2 font-sans text-[11px] font-normal normal-case tracking-normal text-neutral-400">{hint}</span>}
    </div>
  )
}

export function InfoBanner({ title, children }) {
  return (
    <div className="rounded-r-lg border-l-[3px] border-accent bg-accent-muted/20 px-4 py-3 text-[13px] leading-relaxed text-neutral-700">
      {title && <strong className="mb-0.5 block text-neutral-900">{title}</strong>}
      {children}
    </div>
  )
}

export function WarningBanner({ title, children }) {
  return (
    <div className="rounded-r-lg border-l-[3px] border-savings bg-savings-muted/40 px-4 py-3 text-[13px] leading-relaxed text-neutral-700">
      {title && <strong className="mb-0.5 block text-neutral-900">{title}</strong>}
      {children}
    </div>
  )
}
