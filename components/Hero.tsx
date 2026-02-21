import Image from "next/image";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import type { Hero as HeroData, Site } from "@/types/portfolio";

interface HeroProps {
  data: HeroData;
  site: Site;
}

export function Hero({ data, site }: HeroProps) {
  return (
    <section
      className="relative px-6 md:px-20 lg:px-40 py-16 md:py-24"
      id="home"
    >
      <div className="absolute inset-0 math-pattern pointer-events-none" />
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div className="flex flex-wrap gap-3">
            {data.badges.map((badge) => (
              <Badge key={badge.label} icon={badge.icon} label={badge.label} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-[#111418] dark:text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              {data.headline}{" "}
              <span className="text-primary italic">{data.highlightText}</span>
            </h1>
            <p className="text-[#4f5b66] dark:text-gray-400 text-lg md:text-xl font-normal leading-relaxed max-w-[600px]">
              {data.subtext}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-2">
            <Button href={data.ctaPrimary.href}>{data.ctaPrimary.label}</Button>
            <Button href={data.ctaSecondary.href} variant="secondary">
              {data.ctaSecondary.label}
            </Button>
          </div>
          <div className="flex items-center gap-8 pt-6 border-t border-[#f0f2f4] dark:border-gray-800">
            {data.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-[#111418] dark:text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-[#617589] dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply group-hover:bg-transparent transition-all duration-500" />
            <Image
              alt={site.name}
              src={site.image}
              width={480}
              height={600}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-white/20">
              <p className="text-primary font-bold text-sm tracking-widest uppercase mb-1">
                {site.name}
              </p>
              <p className="text-[#111418] dark:text-white font-medium italic">
                &quot;{data.quote}&quot;
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
