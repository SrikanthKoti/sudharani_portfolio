import Link from "next/link";
import { Icon } from "./ui/Icon";
import type { Footer as FooterData, Site } from "@/types/portfolio";

interface FooterProps {
  data: FooterData;
  siteName: string;
  logoIcon: string;
}

export function Footer({ data, siteName, logoIcon }: FooterProps) {
  return (
    <footer className="px-6 md:px-20 lg:px-40 py-12 border-t border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-background-dark">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded flex items-center justify-center text-white">
              <Icon name={logoIcon} className="text-white" />
            </div>
            <span className="font-bold text-[#111418] dark:text-white">
              {siteName}
            </span>
          </div>
          <nav className="flex gap-8">
            {data.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#617589] hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-[#f0f2f4] dark:border-gray-800">
          <p className="text-[#617589] dark:text-gray-400 text-xs text-center md:text-left">
            {data.copyright}
            <br className="md:hidden" /> {data.tagline}
          </p>
          <div className="flex gap-4">
            {data.socialLinks.map((social) => (
              <a
                key={social.icon}
                href={social.href}
                className="size-10 rounded-full bg-primary/5 flex items-center justify-center text-[#617589] hover:bg-primary hover:text-white transition-all"
                aria-label={social.icon}
              >
                <Icon name={social.icon} className="text-sm" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
