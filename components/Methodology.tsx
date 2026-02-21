import { SectionHeading } from "./ui/SectionHeading";
import { Icon } from "./ui/Icon";
import { Container } from "./ui/Container";
import type { Methodology as MethodologyData } from "@/types/portfolio";

interface MethodologyProps {
  data: MethodologyData;
}

export function Methodology({ data }: MethodologyProps) {
  return (
    <section className="px-6 md:px-20 lg:px-40 py-20 bg-background-light dark:bg-background-dark">
      <Container>
        <div className="text-center mb-16">
          <SectionHeading
            label={data.label}
            title={data.title}
            centered
            className="mb-4"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {data.steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="size-16 rounded-full bg-white dark:bg-gray-800 shadow-xl flex items-center justify-center text-primary">
                <Icon name={step.icon} className="text-3xl" />
              </div>
              <h4 className="font-bold">{step.title}</h4>
              <p className="text-sm text-[#617589]">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
