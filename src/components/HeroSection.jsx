"use client";

import Image from "next/image";
import { Button, Chip } from "@heroui/react";
import { Magnifier, Briefcase, Pin } from "@gravity-ui/icons";

export default function HeroSection() {
  const trendingPositions = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

  return (
    <section className="relative isolate flex flex-col items-center justify-center bg-black px-4 pt-24 pb-12 text-center overflow-hidden">
      
      {/* --- Cosmic Globe Backdrop Module for Hero --- */}
      <div className="absolute top-[45%] left-1/2 -z-10 h-200 w-350 -translate-x-1/2 pointer-events-none select-none">
        <Image
          src="/images/globe.png"
          alt="Global network visualization map background"
          fill
          priority
          sizes="(max-w-1450px) 100vw, 1400px"
          className="object-contain object-top opacity-60 mix-blend-screen"
        />
        {/* Soft atmospheric indigo glow coming from the top hemisphere of the planet */}
        <div className="absolute top-0 left-1/2 h-100 w-150 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px] -z-10" />
      </div>

      <div className="mx-auto max-w-4xl flex flex-col items-center gap-6 relative z-10">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-zinc-900/40 px-4 py-1.5 backdrop-blur-md shadow-sm">
          <Briefcase className="text-amber-500 text-sm" />
          <span className="text-xs font-semibold tracking-wider text-neutral-400 uppercase">
            <span className="text-white font-bold">50,000+</span> New Jobs This Month
          </span>
        </div>

        {/* Core Header */}
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
          Find Your Dream Job Today
        </h1>

        {/* Supporting Blurb */}
        <p className="max-w-2xl text-base text-neutral-400 sm:text-lg leading-relaxed">
          HireLoop connects top talent with world-class companies. Browse thousands of
          curated opportunities and land your next role — faster.
        </p>

        {/* Unified Capsule Search Wrapper */}
        <div className="mt-6 w-full max-w-3xl rounded-2xl border border-white/5 bg-zinc-900/60 p-2 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            {/* Input segment A: Search Phrase */}
            <div className="flex flex-1 items-center px-3">
              <Magnifier className="text-neutral-500 text-lg mr-2.5 shrink-0" />
              <input
                type="text"
                placeholder="Job title, skill or company"
                className="w-full bg-transparent py-3 text-sm text-white placeholder-neutral-500 outline-none"
              />
            </div>

            {/* Internal custom divider line */}
            <div className="hidden h-5 w-px bg-zinc-800 sm:block mx-1" />

            {/* Input segment B: Geographic Target */}
            <div className="flex flex-1 items-center px-3">
              <Pin className="text-neutral-500 text-lg mr-2.5 shrink-0" />
              <input
                type="text"
                placeholder="Location or Remote"
                className="w-full bg-transparent py-3 text-sm text-white placeholder-neutral-500 outline-none"
              />
            </div>

            {/* Styled Square Trigger */}
            <Button
              isIconOnly
              radius="lg"
              className="bg-indigo-600 text-white hover:bg-indigo-500 min-w-11 h-11 shadow-md shadow-indigo-600/10 w-full sm:w-auto"
              aria-label="Search jobs"
            >
              <Magnifier className="text-lg" />
            </Button>
          </div>
        </div>

        {/* Bottom Horizontal Filter Anchors */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-medium text-neutral-500">Trending Position</span>
          {trendingPositions.map((position) => (
            <Chip
              key={position}
              variant="flat"
              className="bg-zinc-900/50 border border-white/5 text-neutral-400 text-xs hover:text-white hover:border-neutral-700 cursor-pointer transition-colors px-3 py-0.5 h-auto"
            >
              {position}
            </Chip>
          ))}
        </div>
      </div>
    </section>
  );
}