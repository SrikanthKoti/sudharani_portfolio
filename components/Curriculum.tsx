import { SectionHeading } from "./ui/SectionHeading";
import { Badge } from "./ui/Badge";
import { Icon } from "./ui/Icon";
import { Container } from "./ui/Container";
import type { Curriculum as CurriculumData } from "@/types/portfolio";

interface CurriculumProps {
  data: CurriculumData;
}

export function Curriculum({ data }: CurriculumProps) {
  return (
    <section
      className="bg-white dark:bg-gray-900/50"
      id="curriculum"
    >
      <Container className="mx-auto md:px-10 py-20 px-5">
        <div className="flex flex-col gap-4 mb-12">
          <SectionHeading label={data.label} title={data.title} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.classes.map((cls) => (
            <div
              key={cls.title}
              className="p-8 rounded-3xl border border-[#dbe0e6] dark:border-gray-800 bg-white dark:bg-background-dark hover:border-primary/50 transition-all flex flex-col gap-6 group"
            >
              <div className="flex justify-between items-start">
                <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon name={cls.icon} className="text-2xl" />
                </div>
                {cls.badge && (
                  <Badge label={cls.badge} size="small" className="!px-3 !py-1" />
                )}
              </div>
              <div>
                <h4 className="text-[#111418] dark:text-white text-xl font-bold mb-2">
                  {cls.title}
                </h4>
                <p className="text-[#617589] dark:text-gray-400 text-sm">
                  {cls.description}
                </p>
              </div>
              <ul className="space-y-3">
                {cls.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Icon name="check_circle" className="text-primary text-sm" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
