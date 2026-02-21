"use client";

import { useState } from "react";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { Icon } from "./ui/Icon";
import { Container } from "./ui/Container";
import type { Contact as ContactData } from "@/types/portfolio";

interface ContactProps {
  data: ContactData;
}

export function Contact({ data }: ContactProps) {
  const [formState, setFormState] = useState({
    name: "",
    grade: data.formGrades[0] ?? "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Front-only: no API wired
  };

  return (
    <section
      className="px-6 md:px-20 lg:px-40 py-20 bg-white dark:bg-gray-900/50"
      id="contact"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8">
            <div>
              <SectionHeading
                label={data.label}
                title={data.title}
                className="mb-4"
              />
              <p className="text-[#617589] dark:text-gray-400 mt-6">
                {data.intro}
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {data.items.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-4 group cursor-pointer ${
                    item.type === "whatsapp"
                      ? ""
                      : ""
                  }`}
                >
                  <div
                    className={`size-12 rounded-full flex items-center justify-center transition-all ${
                      item.type === "whatsapp"
                        ? "bg-green-500/10 text-green-600 group-hover:bg-green-600 group-hover:text-white"
                        : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                    }`}
                  >
                    <Icon name={item.icon} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-[#617589]">
                      {item.label}
                    </p>
                    <p className="font-bold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-background-light dark:bg-background-dark p-8 rounded-3xl border border-[#dbe0e6] dark:border-gray-800">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase text-[#617589]">
                    {data.formNameLabel}
                  </label>
                  <input
                    className="rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-gray-800 p-3 focus:ring-primary focus:border-primary"
                    placeholder={data.formNamePlaceholder}
                    type="text"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, name: e.target.value }))
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase text-[#617589]">
                    {data.formGradeLabel}
                  </label>
                  <select
                    className="rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-gray-800 p-3 focus:ring-primary focus:border-primary"
                    value={formState.grade}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, grade: e.target.value }))
                    }
                  >
                    {data.formGrades.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase text-[#617589]">
                  {data.formEmailLabel}
                </label>
                <input
                  className="rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-gray-800 p-3 focus:ring-primary focus:border-primary"
                  placeholder={data.formEmailPlaceholder}
                  type="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, email: e.target.value }))
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase text-[#617589]">
                  {data.formMessageLabel}
                </label>
                <textarea
                  className="rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-gray-800 p-3 focus:ring-primary focus:border-primary"
                  placeholder={data.formMessagePlaceholder}
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, message: e.target.value }))
                  }
                />
              </div>
              <Button type="submit" fullWidth className="mt-2 py-4">
                {data.formSubmitLabel}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
