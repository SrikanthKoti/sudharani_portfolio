import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { Icon } from "./ui/Icon";
import { Container } from "./ui/Container";
import type { About as AboutData } from "@/types/portfolio";

interface AboutProps {
  data: AboutData;
}

export function About({ data }: AboutProps) {
  return (
    <section
      className="bg-white dark:bg-gray-900/50"
      id="about"
    >
      <Container className="mx-auto md:px-10 py-20 px-5 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-6">
          <SectionHeading label={data.label} title={data.title} />
          <p className="text-[#617589] dark:text-gray-400 leading-relaxed text-lg">
            {data.bio}
          </p>
          <div className="grid grid-cols-2 gap-6 mt-4">
            {data.highlights.map((h) => (
              <div key={h.title} className="flex flex-col gap-2">
                <div className="text-primary flex items-center gap-2">
                  <Icon name={h.icon} />
                  <span className="font-bold">{h.title}</span>
                </div>
                <p className="text-sm text-[#617589] dark:text-gray-400">
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {data.featureCards.map((card, i) => (
            <Card
              key={card.title}
            >
              <Icon name={card.icon} className="text-primary text-3xl" />
              <h4 className="font-bold">{card.title}</h4>
              <p className="text-xs text-[#617589]">{card.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
