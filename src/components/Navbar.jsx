"use client";

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { LogoLinkedin, Bars, Xmark } from "@gravity-ui/icons";
import { signOut, useSession } from "@/lib/auth-client";


export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session, isPending } = useSession()
  console.log(session)

  const user = session?.user;

  const handleSingOut = async () => {
    await signOut();
  }

  const navLinks = [
    { label: "Find Jobs", href: "/jobs" },
    { label: "Post a Job", href: "/recruiter/post-job" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Admin Console", href: "/admin" },
  ];

  return (
    <div className="w-full px-4 pt-4">
      {/* Floating Dark Capsule Container */}
      <nav className="mx-auto max-w-7xl rounded-2xl border border-white/5 bg-[#18181b]/80 shadow-2xl backdrop-blur-xl">
        <header className="flex h-16 items-center justify-between px-6">

          {/* Left Side: Brand/Logo using a Gravity Icon */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 font-bold hover:opacity-100">
              {/* LogoLinkedin works perfectly here to resemble a stylized 'L' network node loop */}
              <LogoLinkedin className="text-xl text-[#006FEE]" />
              <span className="text-xl font-extrabold tracking-tight text-[#006FEE]">
                hire<span className="text-[#F5A524]">loop</span>
              </span>
            </Link>
          </div>

          {/* Right Side: Navigation Links and Actions combined */}
          <div className="hidden items-center gap-8 md:flex">
            {/* Desktop Navigation Links */}
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Fine vertical separator line */}
            <div className="h-4 w-px bg-neutral-800" />

            {/* Desktop Action Buttons */}
            <div className="flex items-center gap-6">
              {
                user
                  ? <>
                    Hi, {user?.name}
                    <Button onClick={handleSingOut} variant="ghost">Sign Out</Button>
                  </>
                  : <Link href="/auth/signin" className="text-sm font-medium text-[#7828C8] transition-colors hover:text-[#9353D3]">
                    Sign In
                  </Link>

              }
              <Button
                as={Link}
                href="/register"
                radius="lg"
                variant="solid"
                className="bg-linear-to-r from-[#6366f1] to-[#4f46e5] font-semibold text-white shadow-lg shadow-indigo-500/20 hover:opacity-90 px-5"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle Button using Gravity Icons */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-400 hover:bg-white/5 hover:text-white md:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <Xmark className="text-lg" />
            ) : (
              <Bars className="text-lg" />
            )}
          </button>
        </header>

        {/* Mobile Menu Dropdown Panel */}
        {isMenuOpen && (
          <div className="border-t border-white/5 bg-[#18181b] rounded-b-2xl px-6 py-4 animate-in fade-in slide-in-from-top-4 duration-200 md:hidden">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-base font-medium text-neutral-400 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <hr className="my-2 border-white/5" />
              <li className="flex flex-col gap-3">
                <Button
                  as={Link}
                  href="/login"
                  variant="light"
                  className="w-full justify-center font-medium text-[#7828C8]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Button>
                <Button
                  as={Link}
                  href="/register"
                  className="w-full justify-center bg-linear-to-r from-[#6366f1] to-[#4f46e5] font-semibold text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}