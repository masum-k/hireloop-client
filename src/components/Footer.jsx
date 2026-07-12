"use client";

import { Link } from "@heroui/react";
import { LogoLinkedin, LogoFacebook, Compass } from "@gravity-ui/icons";

export default function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Job discovery", href: "/jobs" },
        { label: "Worker AI", href: "/ai" },
        { label: "Companies", href: "/companies" },
        { label: "Salary data", href: "/salaries" },
      ],
    },
    {
      title: "Navigations",
      links: [
        { label: "Help center", href: "/help" },
        { label: "Career library", href: "/library" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Brand Guideline", href: "/brand" },
        { label: "Newsroom", href: "/news" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#000000] text-neutral-400 py-16 px-6 md:px-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Layout Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4 pb-12">
          
          {/* Left Block: Branding & Intro */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 font-bold hover:opacity-100">
              <LogoLinkedin className="text-xl text-[#006FEE]" />
              <span className="text-xl font-extrabold tracking-tight text-[#006FEE]">
                hire<span className="text-[#F5A524]">loop</span>
              </span>
            </Link>
            <p className="text-sm max-w-sm text-neutral-500 font-medium leading-relaxed">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

          {/* Right Block: Categorized Nav Lists */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 justify-items-start sm:justify-items-end">
            {footerSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-4 min-w-30">
                <h4 className="text-sm font-semibold text-[#3b32c4] tracking-wide">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm font-normal text-neutral-500 hover:text-white transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Bar Segment */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 gap-6">
          
          {/* Social Icons matching your dark capsule capsule look */}
          <div className="flex items-center gap-3">
            <Link
              href="https://google.com"
              isExternal
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all"
            >
              <LogoFacebook className="text-base" />
            </Link>
            <Link
              href="https://hireloop.com"
              isExternal
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#3b32c4]/40 border border-[#3b32c4]/20 text-indigo-400 hover:text-white transition-all"
            >
              <Compass className="text-base" />
            </Link>
            <Link
              href="https://linkedin.com"
              isExternal
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all"
            >
              <LogoLinkedin className="text-base" />
            </Link>
          </div>

          {/* Legal / Meta Strings */}
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-x-6 gap-y-2 text-xs text-neutral-600 font-medium">
            <span>Copyright 2026 — Hireloop</span>
            <div className="flex gap-4">
              <Link href="/terms" className="text-xs text-neutral-600 hover:text-neutral-400">
                Terms & Policy
              </Link>
              <span>-</span>
              <Link href="/privacy" className="text-xs text-neutral-600 hover:text-neutral-400">
                Privacy Guideline
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}