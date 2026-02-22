import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "optional",
});

export const metadata: Metadata = {
  title: "Sudha Rani Morampudi | Mathematics Teacher Portfolio",
  description:
    "Experienced Mathematics Teacher for Classes 7–10. CBSE, ICSE, and State Board.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${lexend.variable} font-display antialiased bg-background-light dark:bg-background-dark text-[#111418] dark:text-white transition-colors duration-200`}
      >
        <SmoothScroll />
        <div className="relative flex min-h-screen w-full flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
