// Real vector logos (sourced from Wikimedia Commons, the official file for
// each company). Each one sits in the same fixed box (object-contain scales
// it down to fit) so a wide wordmark and a compact mark like the BMW roundel
// end up with the same footprint instead of the wordmark reading tiny next
// to an oversized badge. Monotone by default, full color on hover, no other
// interaction, no card behind them.
// `src` is written out in full (not built from a template string) so static
// tooling that scans the bundle for literal /images/... paths can find it.
const LOGOS = [
  { name: 'IBM', src: 'images/companies/ibm.svg', maxHeight: 'max-h-5' },
  { name: 'Microsoft', src: 'images/companies/microsoft.svg' },
  { name: 'Google', src: 'images/companies/google.svg' },
  { name: 'Deloitte', src: 'images/companies/deloitte.svg' },
  { name: 'Accenture', src: 'images/companies/accenture.svg' },
  { name: 'EY', src: 'images/companies/ey.svg' },
  { name: 'AWS', src: 'images/companies/aws.svg' },
  { name: 'PwC', src: 'images/companies/pwc.svg' },
  { name: 'Audi', src: 'images/companies/audi.svg' },
  { name: 'BMW', src: 'images/companies/bmw.svg' },
  { name: 'Allianz', src: 'images/companies/allianz.svg' },
  { name: 'Deutsche Bank', src: 'images/companies/deutsche-bank.svg' },
  { name: 'BioNTech', src: 'images/companies/biontech.svg' },
  { name: 'Siemens', src: 'images/companies/siemens.svg' },
]

// Pure-CSS infinite marquee: the track is the list rendered twice back to
// back, animated -50% so the loop point is invisible. Pauses on hover.
export function LogoMarquee() {
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="group flex w-max items-center gap-16 animate-marquee hover:[animation-play-state:paused]">
        {[...LOGOS, ...LOGOS].map((logo, i) => (
          <div key={`${logo.src}-${i}`} className="flex h-12 w-24 shrink-0 items-center justify-center">
            <img
              src={logo.src}
              alt={logo.name}
              className={`${logo.maxHeight || 'max-h-7'} max-w-full object-contain grayscale transition-[filter] duration-300 hover:grayscale-0`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
