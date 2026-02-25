export interface NavLink {
  href: string;
  label: string;
}

export interface Site {
  name: string;
  tagline: string;
  title: string;
  image: string;
  logoIcon: string;
}

export interface Nav {
  links: NavLink[];
  ctaLabel: string;
}

export interface HeroBadge {
  icon: string;
  label: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface Hero {
  badges: HeroBadge[];
  headline: string;
  highlightText: string;
  subtext: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  stats: HeroStat[];
  quote: string;
}

export interface AboutHighlight {
  icon: string;
  title: string;
  description: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

export interface About {
  label: string;
  title: string;
  bio: string;
  highlights: AboutHighlight[];
  featureCards: FeatureCard[];
}

export interface MethodologyStep {
  icon: string;
  title: string;
  description: string;
}

export interface Methodology {
  label: string;
  title: string;
  steps: MethodologyStep[];
}

export interface CurriculumClass {
  icon: string;
  title: string;
  description: string;
  features: string[];
  badge?: string;
}

export interface Curriculum {
  label: string;
  title: string;
  classes: CurriculumClass[];
}

export interface BookingBenefit {
  icon: string;
  title: string;
  subtitle: string;
}

export interface Booking {
  label: string;
  title: string;
  description: string;
  benefits: BookingBenefit[];
  scheduleTitle: string;
  calendarPlaceholder: string;
  calendarLabel: string;
  calendarUrl?: string;
  /** Calendly inline widget URL (e.g. https://calendly.com/your-page/30min?primary_color=137fec) */
  calendlyUrl?: string;
}

export interface ContactItem {
  icon: string;
  label: string;
  value: string;
  type: "email" | "phone" | "whatsapp";
  /** Optional link (e.g. mailto:email or maps URL). When set, the item is clickable. */
  href?: string;
}

export interface Contact {
  label: string;
  title: string;
  intro: string;
  items: ContactItem[];
  formGrades: string[];
  formNameLabel: string;
  formNamePlaceholder: string;
  formGradeLabel: string;
  formEmailLabel: string;
  formEmailPlaceholder: string;
  formPhoneLabel: string;
  formPhonePlaceholder: string;
  formMessageLabel: string;
  formMessagePlaceholder: string;
  formSubmitLabel: string;
  whatsAppNumber: string;
}

export interface SocialLink {
  icon: string;
  href: string;
}

export interface Footer {
  copyright: string;
  tagline: string;
  nav: NavLink[];
  socialLinks: SocialLink[];
}

export interface PortfolioData {
  site: Site;
  nav: Nav;
  hero: Hero;
  about: About;
  methodology: Methodology;
  curriculum: Curriculum;
  booking: Booking;
  contact: Contact;
  footer: Footer;
}
