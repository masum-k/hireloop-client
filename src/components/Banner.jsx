"use client";

import { Input, Button, Chip } from "@heroui/react";
import { Magnifier, Briefcase, Pin } from "@gravity-ui/icons";

export default function Banner() {
  const trendingPositions = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

  return (
    <section className="relative flex flex-col items-center justify-center bg-black px-4 py-24 text-center overflow-hidden">
      {/* Background radial gradient accent glow behind the text */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="mx-auto max-w-4xl flex flex-col items-center gap-6">
        
        {/* Top Glow Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-[#18181b]/60 px-4 py-1.5 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.02)]">
          <Briefcase className="text-amber-500 text-sm" />
          <span className="text-xs font-semibold tracking-wider text-neutral-400 uppercase">
            <span className="text-white font-bold">50,000+</span> New Jobs This Month
          </span>
        </div>

        {/* Main Heading Text */}
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
          Find Your Dream Job Today
        </h1>

        {/* Subtitle Text */}
        <p className="max-w-2xl text-base text-neutral-400 sm:text-lg leading-relaxed">
          HireLoop connects top talent with world-class companies. Browse thousands of
          curated opportunities and land your next role — faster.
        </p>

        {/* Unified Search Bar Container */}
        <div className="mt-8 w-full max-w-3xl rounded-2xl border border-white/5 bg-[#18181b]/80 p-2 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-0">
            
            {/* Input 1: Job Title / Keyword */}
            <div className="flex flex-1 items-center px-2">
              <Magnifier className="text-neutral-500 text-lg mr-2 flex-shrink-0" />
              <input
                type="text"
                placeholder="Job title, skill or company"
                className="w-full bg-transparent py-3 text-sm text-white placeholder-neutral-500 outline-none"
              />
            </div>

            {/* Vertical Splitter Line (hidden on mobile) */}
            <div className="hidden h-6 w-[1px] bg-neutral-800 sm:block mx-2" />

            {/* Input 2: Location */}
            <div className="flex flex-1 items-center px-2">
              <Pin className="text-neutral-500 text-lg mr-2 flex-shrink-0" />
              <input
                type="text"
                placeholder="Location or Remote"
                className="w-full bg-transparent py-3 text-sm text-white placeholder-neutral-500 outline-none"
              />
            </div>

            {/* CTA Search Button */}
            <Button
              isIconOnly
              radius="xl"
              className="bg-indigo-600 text-white hover:bg-indigo-500 min-w-[48px] h-[48px] shadow-lg shadow-indigo-600/20 self-end sm:self-auto w-full sm:w-auto"
              aria-label="Search jobs"
            >
              <Magnifier className="text-lg font-bold" />
            </Button>
          </div>
        </div>

        {/* Bottom Trending Row */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-medium text-neutral-500">Trending Position</span>
          {trendingPositions.map((position) => (
            <Chip
              key={position}
              variant="flat"
              className="bg-neutral-900 border border-white/5 text-neutral-400 text-xs hover:text-white hover:border-neutral-700 cursor-pointer transition-colors px-3 py-1 h-auto"
            >
              {position}
            </Chip>
          ))}
        </div>

      </div>
    </section>
  );
}