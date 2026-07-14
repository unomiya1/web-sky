export interface NavLink {
  label: string
  href: string
}

export interface ServicePackage {
  name: string
  price: string
  frequency: string
  subtitle?: string
  features: string[]
}

export interface PortfolioItem {
  title: string
  category: string
  description: string
  image: string
}

export interface HomepageData {
  company_name: string
  tagline: string
  hero_title: string
  hero_subtitle: string
  cta_text: string
  cta_link: string
  hero_image: string
  about_title: string
  about_content: string
  about_image: string
  services_title: string
  services_option_labels: string[]
  services_packages: ServicePackage[]
  services_series: ServicePackage[]
  services_non_series: ServicePackage[]
  portfolio_title: string
  portfolio_subtitle: string
  portfolio_tags: string[]
  portfolio_featured: PortfolioItem[]
  portfolio_grid: PortfolioItem[]
  client_section_title: string
  contact_title: string
  contact_subtitle: string
  contact_address: string
  contact_whatsapp: string
  contact_whatsapp_display: string
  contact_instagram: string
  contact_instagram_display: string
  contact_email: string
  footer_title: string
  footer_description: string
  footer_copy: string
  nav_links: NavLink[]
}
