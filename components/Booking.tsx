import Script from "next/script";
import { SectionHeading } from "./ui/SectionHeading";
import { Icon } from "./ui/Icon";
import { Container } from "./ui/Container";
import type { Booking as BookingData } from "@/types/portfolio";

interface BookingProps {
  data: BookingData;
}

export function Booking({ data }: BookingProps) {
  return (
    <section
      className="bg-primary/5"
      id="booking"
    >
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mx-auto md:px-10 py-20 px-5">
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
          <div className="flex-1 min-h-[700px]">
            {data.calendlyUrl ? (
              <>
                <div
                  className="calendly-inline-widget min-w-[320px] w-full h-[700px]"
                  data-url={data.calendlyUrl}
                />
                <Script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  strategy="lazyOnload"
                />
              </>
            ) : (
              <div className="flex flex-col items-center justify-center p-8 text-center gap-4 min-h-[400px]">
                <p className="text-[#617589] dark:text-gray-400 font-medium italic">
                  {data.calendarPlaceholder}
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
