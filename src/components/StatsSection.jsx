"use client";

import { Card } from "@heroui/react";
import { Briefcase, Factory, Magnifier, Star } from "@gravity-ui/icons";

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      icon: <Briefcase className="text-neutral-400 text-lg" />,
      value: "50K",
      label: "Active Jobs",
    },
    {
      id: 2,
      icon: <Factory className="text-neutral-400 text-lg" />,
      value: "12K",
      label: "Companies",
    },
    {
      id: 3,
      icon: <Magnifier className="text-neutral-400 text-lg" />,
      value: "2M",
      label: "Job Seekers",
    },
    {
      id: 4,
      icon: <Star className="text-neutral-400 text-lg" />,
      value: "97%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section className="relative isolate w-full bg-black text-white pt-24 pb-20 px-6 overflow-hidden flex flex-col items-center">
      
      {/* Atmosphere / Planetary Radial Horizon Simulation */}
      <div className="absolute top-[15%] left-1/2 -z-10 h-125 w-212.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/25 blur-[120px]" />
      <div className="absolute top-[5%] left-1/2 -z-10 h-300 w-[1800px] -translate-x-1/2 rounded-full bg-linear-to-b from-indigo-950/30 via-zinc-950/95 to-black border-t border-indigo-500/15 shadow-[0_-25px_60px_rgba(99,102,241,0.1)] opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-white/2 via-transparent to-transparent opacity-50 pointer-events-none -z-10" />

      {/* Primary Display Layout */}
      <div className="mx-auto max-w-6xl w-full text-center flex flex-col items-center relative z-10">
        
        {/* Sub-Section Headline Statement */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-neutral-300 max-w-2xl leading-snug">
          Assisting over <span className="text-white font-semibold">15,000 job seekers</span> <br />
          find their dream positions.
        </h2>

        {/* Statistics Grid Matrix */}
        <div className="mt-20 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card 
              key={stat.id}
              className="bg-zinc-950/60 border border-white/5 shadow-2xl backdrop-blur-md rounded-2xl transition-all duration-300 hover:border-white/10 hover:-translate-y-0.5"
            >
              {/* Internal container replaces removed CardBody helper utility classes */}
              <div className="p-6 flex flex-col items-start text-left justify-between h-44 w-full">
                {/* Embedded Icon Shell */}
                <div className="p-2 bg-white/1 border border-white/5 rounded-lg flex items-center justify-center">
                  {stat.icon}
                </div>
                
                {/* Dynamic Counter Layout */}
                <div className="mt-4 flex flex-col gap-1">
                  <span className="text-4xl font-bold tracking-tight text-white font-sans">
                    {stat.value}
                  </span>
                  <span className="text-xs text-neutral-500 font-medium tracking-wide">
                    {stat.label}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}