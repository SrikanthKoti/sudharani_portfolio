"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { Icon } from "./ui/Icon";
import { Container } from "./ui/Container";
import type { Contact as ContactData } from "@/types/portfolio";

interface ContactProps {
  data: ContactData;
}

const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be at most 100 characters"),
  grade: z.string().min(1, "Please select a grade"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .transform((s) => s.replace(/\D/g, ""))
    .refine(
      (s) => /^\d{10}$|^\d{12}$/.test(s),
      "Enter 10 digits or 12 digits with 91 (e.g. 9876543210 or 919876543210)"
    )
    .refine(
      (s) =>
        (s.length === 10 && /^[6-9]\d{9}$/.test(s)) ||
        (s.length === 12 && /^91[6-9]\d{9}$/.test(s)),
      "Enter a valid Indian mobile number (starts with 6, 7, 8 or 9)"
    ),
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be at most 1000 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function Contact({ data }: ContactProps) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      grade: data.formGrades[0] ?? "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (_values: ContactFormValues) => {
    toast.success("We'll be calling or emailing you soon!");
    reset({
      name: "",
      grade: data.formGrades[0] ?? "",
      email: "",
      phone: "",
      message: "",
    });
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
              {data.items.map((item) => {
                const href = item.href;
                const isExternal = href?.startsWith("http");
                const Wrapper = href ? "a" : "div";
                const wrapperProps = href
                  ? {
                      href,
                      ...(isExternal && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }),
                    }
                  : {};
                return (
                  <Wrapper
                    key={item.label}
                    className={`flex items-center gap-4 group cursor-pointer ${
                      href ? "hover:opacity-90" : ""
                    } ${item.type === "whatsapp" ? "" : ""}`}
                    {...wrapperProps}
                  >
                    <div
                      className={`size-12 shrink-0 rounded-full flex items-center justify-center transition-all ${
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
                  </Wrapper>
                );
              })}
            </div>
          </div>
          <div className="bg-background-light dark:bg-background-dark p-8 rounded-3xl border border-[#dbe0e6] dark:border-gray-800">
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-bold uppercase text-[#617589]"
                  >
                    {data.formNameLabel}
                  </label>
                  <input
                    id="contact-name"
                    className={`rounded-xl border bg-white dark:bg-gray-800 p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors ${
                      errors.name
                        ? "border-red-500 dark:border-red-500"
                        : "border-[#dbe0e6] dark:border-gray-700"
                    }`}
                    placeholder={data.formNamePlaceholder}
                    type="text"
                    autoComplete="name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 dark:text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-grade"
                    className="text-xs font-bold uppercase text-[#617589]"
                  >
                    {data.formGradeLabel}
                  </label>
                  <select
                    id="contact-grade"
                    className={`rounded-xl border bg-white dark:bg-gray-800 p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors ${
                      errors.grade
                        ? "border-red-500 dark:border-red-500"
                        : "border-[#dbe0e6] dark:border-gray-700"
                    }`}
                    {...register("grade")}
                  >
                    {data.formGrades.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                  {errors.grade && (
                    <p className="text-xs text-red-500 dark:text-red-400">
                      {errors.grade.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="text-xs font-bold uppercase text-[#617589]"
                >
                  {data.formEmailLabel}
                </label>
                <input
                  id="contact-email"
                  className={`rounded-xl border bg-white dark:bg-gray-800 p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors ${
                    errors.email
                      ? "border-red-500 dark:border-red-500"
                      : "border-[#dbe0e6] dark:border-gray-700"
                  }`}
                  placeholder={data.formEmailPlaceholder}
                  type="email"
                  autoComplete="email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 dark:text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-phone"
                  className="text-xs font-bold uppercase text-[#617589]"
                >
                  {data.formPhoneLabel}
                </label>
                <input
                  id="contact-phone"
                  className={`rounded-xl border bg-white dark:bg-gray-800 p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors ${
                    errors.phone
                      ? "border-red-500 dark:border-red-500"
                      : "border-[#dbe0e6] dark:border-gray-700"
                  }`}
                  placeholder={data.formPhonePlaceholder}
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  maxLength={12}
                  {...register("phone", {
                    onChange: (e) => {
                      const digits = e.target.value.replace(/\D/g, "");
                      e.target.value = digits;
                      setValue("phone", digits, { shouldValidate: true });
                    },
                  })}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 dark:text-red-400">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-bold uppercase text-[#617589]"
                >
                  {data.formMessageLabel}
                </label>
                <textarea
                  id="contact-message"
                  className={`rounded-xl border bg-white dark:bg-gray-800 p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none ${
                    errors.message
                      ? "border-red-500 dark:border-red-500"
                      : "border-[#dbe0e6] dark:border-gray-700"
                  }`}
                  placeholder={data.formMessagePlaceholder}
                  rows={4}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 dark:text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                fullWidth
                className="mt-2 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold"
                disabled={isSubmitting || !isValid}
                disableShadow={true}
              >
                {data.formSubmitLabel}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
