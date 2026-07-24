export function EdeptLogo({ className = 'h-7' }) {
  return <img src="images/logos/edept-on-white.png" alt="edept" className={className} />
}

export function PartnerLogo({ name, className = 'h-10' }) {
  const src = name === 'illinois-tech' ? 'images/logos/iit-chicago.png' : 'images/logos/mahindra.png'
  const alt = name === 'illinois-tech' ? 'Illinois Institute of Technology, Chicago' : 'Mahindra University'
  return <img src={src} alt={alt} className={`${className} w-auto object-contain`} />
}
