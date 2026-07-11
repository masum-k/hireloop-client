"use client";

import { Card, CardBody } from "@heroui/react";
import { Briefcase, Balloons, PersonMagnifyingGlass, Star } from "@gravity-ui/icons";

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
      icon: <Balloons className="text-neutral-400 text-lg" />,
      value: "12K",
      label: "Companies",
    },
    {
      id: 3,
      icon: <PersonMagnifyingGlass className="text-neutral-400 text-lg" />,
      value: "2M",
      label: "Job Seekers",
    },
    {
      id: 4,
      icon: <Star className="text-neutral-400 text-lg" />,
      value: "97%",
      label: "Satisfaction Rate", // Fixed typo from original image
    },
  ];

  return (
    <section className="relative w-full bg-[#030303] text-white pt-32 pb-20 px-6 overflow-hidden flex flex-col items-center">
      
      {/* --- Cosmic Globe Glow Layers --- */}
      {/* Deep indigo background radial flare */}
      <div className="absolute top-[40%] left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/30 blur-[140px]" />
      
      {/* The Curved Globe Horizon Simulation */}
      <div className="absolute top-[20%] left-1/2 -z-10 h-[1000px] w-[1600px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-900/40 via-neutral-950/90 to-black border-t border-indigo-500/20 shadow-[0_-20px_50px_rgba(79,70,229,0.15)] opacity-80" />
      
      {/* Decorative Starry dots simulation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent opacity-60 pointer-events-none -z-10" />

      {/* --- Content Module --- */}
      <div className="mx-auto max-w-6xl w-full text-center flex flex-col items-center relative z-10">
        
        {/* Core Heading Statement */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-neutral-300 max-w-2xl leading-snug">
          Assisting over <span className="text-white font-semibold">15,000 job seekers</span> <br />
          find their dream positions.
        </h2>

        {/* --- Metrics Grid --- */}
        <div className="mt-20 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card 
              key={stat.id}
              className="bg-neutral-950/80 border border-white/5 shadow-2xl backdrop-blur-md rounded-2xl transition-all duration-300 hover:border-white/10 hover:translate-y-[-2px]"
            >
              <CardBody className="p-6 flex flex-col items-start text-left justify-between h-44">
                {/* Icon Shell */}
                <div className="p-2 bg-white/[0.02] border border-white/5 rounded-lg flex items-center justify-center">
                  {stat.icon}
                </div>
                
                {/* Metrics Content */}
                <div className="mt-4 flex flex-col gap-1">
                  <span className="text-4xl font-bold tracking-tight text-white font-sans">
                    {stat.value}
                  </span>
                  <span className="text-xs text-neutral-500 font-medium tracking-wide">
                    {stat.label}
                  </span>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}