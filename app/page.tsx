import portfolioData from "@/data/portfolio.json";
import type { PortfolioData } from "@/types/portfolio";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Methodology } from "@/components/Methodology";
import { Curriculum } from "@/components/Curriculum";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const data = portfolioData as PortfolioData;

export default function Home() {
  return (
    <>
      <Header site={data.site} nav={data.nav} />
      <main className="flex-1">
        <Hero data={data.hero} site={data.site} />
        <About data={data.about} />
        <Methodology data={data.methodology} />
        <Curriculum data={data.curriculum} />
        <Booking data={data.booking} />
        <Contact data={data.contact} />
      </main>
      <Footer
        data={data.footer}
        siteName={data.site.name}
        logoIcon={data.site.logoIcon}
      />
    </>
  );
}
