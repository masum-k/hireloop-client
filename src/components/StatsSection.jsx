"use client";

import Image from "next/image";
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
    <section className="relative isolate w-full bg-black text-white pt-12 pb-20 px-6 overflow-hidden flex flex-col items-center">
      
      {/* --- Cosmic Globe Backdrop Module for Stats --- */}
      <div className="absolute top-[-40%] left-1/2 -z-10 h-200 w-350 -translate-x-1/2 pointer-events-none select-none">
        <Image
          src="/images/globe.png"
          alt="Global network visualization map background"
          fill
          priority
          sizes="(max-w-1450px) 100vw, 1400px"
          className="object-contain object-top opacity-90"
        />
        {/* Deep planet outline glow ring effect overlay */}
        <div className="absolute inset-0  blur-[130px] rounded-full mix-blend-screen -z-10" />
      </div>

      {/* --- Content Module --- */}
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
              className="bg-zinc-950/70 border border-white/5 shadow-2xl backdrop-blur-md rounded-2xl transition-all duration-300 hover:border-white/10 hover:-translate-y-0.5"
            >
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