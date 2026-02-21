"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "./ui/Icon";
import { Button } from "./ui/Button";
import type { Site, Nav } from "@/types/portfolio";
import {useScrollPosition} from "@/components/hooks/useScrollPosition";

interface HeaderProps {
  site: Site;
  nav: Nav;
}

export function Header({ site, nav }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  return (
    <header className={`sticky top-0 z-50 border-b border-solid border-[#f0f2f4]
    dark:border-gray-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md transition-all ease-in-out duration-300 
    ${scrollPosition > 0 ? "border-b shadow-lg" : ""}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 relative py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded flex items-center justify-center text-white">
              <Icon name={site.logoIcon} className="text-white" />
            </div>
            <h2 className="text-[#111418] dark:text-white lg:text-lg font-bold leading-tight tracking-tight w-fit">
              {site.name}
            </h2>
          </div>
          <nav className="hidden md:flex items-cente gap-8 lg:gap-10">
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
          <div className="sm:hidden">
            <Button href="#contact" variant="primary-sm">
              {nav.ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
