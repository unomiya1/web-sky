import axios from 'axios'
import type { HomepageData } from '../types/homepage'
import aboutUsImage from '../assets/about us/about us.jpg'

const BASE_PATH = import.meta.env.BASE_URL
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    Accept: 'application/json',
  },
})

export const defaultHomepageData: HomepageData = {
  company_name: 'SKY Pictures Production',
  tagline: 'GET TO KNOW US MORE',
  hero_title: 'SKY PICTURES PRODUCTION',
  hero_subtitle: 'GET TO KNOW US MORE',
  cta_text: 'Get Started',
  cta_link: '#about',
  hero_image: '/images/hero-bg.jpg',
  about_title: 'About Us',
  about_content:
    'PT Langit Bintang Kreasi, known as Sky Pictures, is a professional production house and 360° digital media communication company. Established in early 2015, Sky Pictures specializes in end-to-end content production for YouTube, Instagram, and television, covering TV series, non-TV productions, and brand video content, delivered with strong storytelling and strategic digital communication.',
  about_image: aboutUsImage,
  services_title: 'Services',
  services_option_labels: ['Package', 'Series', 'Non Series'],
  services_packages: [
    {
      name: 'BASIC',
      price: 'Rp. 6.000.000',
      frequency: '/month',
      features: [
        '10 Video content per bulan',
        'Produksi untuk Instagram, mirroring ke TikTok & Youtube Shorts',
        'Social media maintenance',
        'Upload & publishing content',
        'Ads management + CTA ke WhatsApp / Website',
        'Monthly performance report',
      ],
    },
    {
      name: 'STANDARD',
      price: 'Rp. 10.000.000',
      frequency: '/month',
      features: [
        '20 Video content per bulan',
        'Produksi untuk Instagram, mirroring ke TikTok & Youtube Shorts',
        'Social media maintenance',
        'Upload & publishing content',
        'Ads management + CTA ke WhatsApp / Website',
        'Monthly performance report',
      ],
    },
    {
      name: 'PREMIUM',
      price: 'Rp. 14.000.000',
      frequency: '/month',
      features: [
        '30 Video content per bulan',
        'Produksi untuk Instagram, mirroring ke TikTok & Youtube Shorts',
        'Social media maintenance',
        'Daily upload ke berbagai platform & publishing content',
        'Ads management + CTA ke WhatsApp / Website',
        'Monthly performance report',
      ],
    },
  ],
  services_series: [
    {
      name: 'YOUTUBE SERIES',
      price: 'Rp. 3.500.000',
      frequency: '/month',
      subtitle: 'Culinary | health | craft | education | product',
      features: [
        'Minimum 20 content/month',
        '1-5 minutes video',
        'Creative idea concept | script',
        '3 person production team (cameraman, director, lighting / audioman)',
        'Shooting gear full set',
        'Post Production',
        'Thumbnail design for youtube',
      ],
    },
    {
      name: 'TV SERIES',
      price: 'Rp. 5.000.000',
      frequency: '/video',
      subtitle: 'Culinary | health | craft | education | product | documentary | lifestyle | reality show',
      features: [
        '1 Seasons / 12-16 episodes',
        '24-48 minutes video',
        'Creative idea concept | script',
        'TV team production team',
        'Tier 1 shooting gear',
        'Post Production',
        'Trailer video',
      ],
    },
  ],
  services_non_series: [
    {
      name: 'EVENT DOCUMENTATION',
      price: 'Rp. 4.000.000',
      frequency: '/project',
      subtitle: 'Capture live events with polished storytelling and fast delivery',
      features: [
        'Full-day event coverage',
        '2 professional videographers',
        'Color grading and audio mixing',
        'Highlight recap video',
      ],
    },
    {
      name: 'PUBLIC SERVICE ANNOUNCEMENT',
      price: 'Rp. 10.000.000',
      frequency: '/project',
      subtitle: 'Create impactful messaging for social campaigns and public outreach',
      features: [
        'Storyboard planning',
        'Voice over & background music selection',
        'Motion graphics, visual effects & subtitles',
        'Creative concept and scriptwriting',
      ],
    },
    {
      name: 'VIDEO PRODUCT',
      price: 'Rp. 15.000.000',
      frequency: '/project',
      subtitle: 'Professional product videos designed to boost conversions and brand trust',
      features: [
        'Product creative concept and direction',
        'Studio or on-location shooting',
        'Cinematic product showcase',
        'Social media optimized video formats',
      ],
    },
    {
      name: 'SHORT MOVIE/DRAMA',
      price: 'Rp. 20.000.000',
      frequency: '/project',
      subtitle: 'Narrative short films for digital release, storytelling, and brand drama',
      features: [
        'Story development and scriptwriting',
        'Multi location shooting and production',
        'Scripted storytelling and casting',
        'Trailer & final master video',
      ],
    },
    {
      name: 'BRAND ACTIVATION VIDEO',
      price: 'Rp. 30.000.000',
      frequency: '/project',
      subtitle: 'Immersive brand experience videos for campaigns and launch events',
      features: [
        'Creative campaign concept and direction',
        'Lifesyle cinematic production',
        'Brain focused storytelling and messaging',
        'Professional editing and post-production',
      ],
    },
    {
      name: 'COMMERCIAL DOCUMENTARY',
      price: 'Rp. 35.000.000',
      frequency: '/project',
      subtitle: 'Documentary-style storytelling for compelling brand narratives',
      features: [
        'Documentary style with cinematic visuals',
        'Research and interviews planning',
        'Cinematic editing & colorgrade',
        'Professional voice over and sound design',
      ],
    },
    {
      name: 'CORPORATE PROFILE',
      price: 'Rp. 40.000.000',
      frequency: '/project',
      subtitle: 'Corporate presentations and company profile videos for stakeholders',
      features: [
        'Company profile concept and direction',
        'Executive interviews and coverage',
        'Office and facility showcase',
        'Professional naration and branding elements',
      ],
    },
    {
      name: 'LIVE EVENT MULTICAM VIDEO',
      price: 'Rp. 50.000.000',
      frequency: '/project',
      subtitle: 'Multicam live event coverage for concerts, conferences, and shows',
      features: [
        'Multicam setup with live switching & recording',
        'Professional audio capture',
        'Fast Post-production delivery',
        'Full event master recording',
      ],
    },
  ],
  portfolio_title: 'Portofolio',
  portfolio_subtitle: 'Professional video and social media content that showcases our best work.',
  portfolio_tags: ['Professional video', 'Social Media Content'],
  portfolio_featured: [
    {
      title: 'Professional video',
      category: 'Portofolio',
      description: 'A polished film shoot with premium equipment and cinematic storytelling.',
      image: '/images/portfolio-featured.jpg',
    },
  ],
  portfolio_grid: [],
  client_section_title: '110+ Projects | 50+ clients | 11 Years of experience',
  contact_title: 'Contact Us',
  contact_subtitle: 'Let’s build something great together',
  contact_address: 'Taman Firdaus 10 Blok B no.1 Jatiasih, Bekasi - 17426',
  contact_whatsapp: 'https://wa.me/6281317267373',
  contact_whatsapp_display: '+62 813-1726-7373',
  contact_instagram: 'skypicturesindonesia',
  contact_instagram_display: '@skypicturesindonesia',
  contact_email: 'itskypicture@gmail.com',
  footer_title: 'SKY Pictures Production',
  footer_description: 'Professional production house and digital media communication partner.',
  footer_copy: '© 2026 SKY Pictures Production. All rights reserved.',
  nav_links: [
    { label: 'HOME', href: `${BASE_PATH}#home` },
    { label: 'ABOUT US', href: `${BASE_PATH}#about` },
    { label: 'OUR TEAM', href: `${BASE_PATH}#team` },
    { label: 'SERVICES', href: `${BASE_PATH}#services` },
    { label: 'PORTOFOLIO', href: `${BASE_PATH}#portfolio` },
    { label: 'CLIENTS', href: `${BASE_PATH}#clients` },
    { label: 'CONTACT', href: `${BASE_PATH}#contact` },
  ],
}

export async function fetchHomepageData(): Promise<HomepageData> {
  return defaultHomepageData
}

export interface ContactPayload {
  name: string
  email: string
  message: string
}

export async function submitContact(payload: ContactPayload) {
  const { data } = await api.post('/contact', payload)
  return data
}
