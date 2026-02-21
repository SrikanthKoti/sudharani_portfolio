"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "./ui/Icon";
import { Button } from "./ui/Button";
import type { Site, Nav } from "@/types/portfolio";

interface HeaderProps {
  site: Site;
  nav: Nav;
}

export function Header({ site, nav }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-[#f0f2f4] dark:border-gray-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-20 lg:px-40 py-4">
      <div className="flex items-center justify-between max-w-[1280px] mx-auto">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-primary rounded flex items-center justify-center text-white">
            <Icon name={site.logoIcon} className="text-white" />
          </div>
          <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-tight">
            {site.name}
          </h2>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button
            href="#contact"
            variant="primary-sm"
            className="hidden sm:flex"
          >
            {nav.ctaLabel}
          </Button>
          <button
            type="button"
            className="md:hidden text-[#111418] dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden px-6 py-4 border-t border-[#f0f2f4] dark:border-gray-800 flex flex-col gap-3">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button href="#contact" variant="primary-sm" className="sm:hidden">
            {nav.ctaLabel}
          </Button>
        </div>
      )}
    </header>
  );
}
