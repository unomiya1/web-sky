import logoImage from '../assets/logo sky.png'

interface LogoProps {
  className?: string
}

export default function Logo({ className = 'h-35 w-35' }: LogoProps) {
  return (
    <img
      src={logoImage}
      alt="SKY Pictures Production logo"
      className={`${className} object-contain`}
    />
  )
}
