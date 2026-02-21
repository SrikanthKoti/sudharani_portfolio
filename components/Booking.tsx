import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { Icon } from "./ui/Icon";
import { Container } from "./ui/Container";
import type { Booking as BookingData } from "@/types/portfolio";

interface BookingProps {
  data: BookingData;
}

export function Booking({ data }: BookingProps) {
  return (
    <section
      className="px-6 md:px-20 lg:px-40 py-20 bg-primary/5"
      id="booking"
    >
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <SectionHeading label={data.label} title={data.title} />
            <p className="text-[#617589] dark:text-gray-400 text-lg">
              {data.description}
            </p>
          </div>
          <div className="space-y-4">
            {data.benefits.map((b) => (
              <div
                key={b.title}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-primary/10"
              >
                <Icon name={b.icon} className="text-primary" />
                <div>
                  <p className="font-bold text-sm">{b.title}</p>
                  <p className="text-xs text-[#617589]">{b.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-background-dark rounded-3xl border border-primary/20 shadow-xl overflow-hidden min-h-[500px] flex flex-col">
          <div className="p-6 border-b border-[#f0f2f4] dark:border-gray-800 flex items-center justify-between">
            <p className="font-bold">{data.scheduleTitle}</p>
            <div className="size-3 rounded-full bg-green-500 animate-pulse" />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center gap-4">
            <Icon
              name="calendar_month"
              className="text-6xl text-primary/30"
            />
            <p className="text-[#617589] font-medium italic">
              {data.calendarPlaceholder}
            </p>
            <Button
              href={data.calendarUrl ?? "#"}
              variant="primary-compact"
              className="mt-4"
            >
              {data.calendarLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
