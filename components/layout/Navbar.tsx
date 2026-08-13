"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import {
  ChevronDownIcon,
  CloseIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from "@/components/icons";
import { navLinks } from "@/lib/home-data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <Container className="flex h-[72px] items-center gap-4">
        <Logo />

        <nav className="hidden flex-1 items-center justify-center gap-6 desktop:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-3 tablet:flex">
          <label className="relative hidden w-[220px] desktop:block">
            <span className="sr-only">Search</span>
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-neutral-500" />
            <input
              type="search"
              placeholder="Search packages..."
              className="h-10 w-full rounded-full border border-gray-200 bg-gray-50 pl-9 pr-3 text-sm text-neutral-800 outline-none transition placeholder:text-neutral-400 focus:border-primary focus:bg-white"
            />
          </label>

          <button
            type="button"
            className="inline-flex h-10 items-center gap-1.5 rounded-full border border-gray-200 px-3 text-sm font-medium text-neutral-700"
          >
            BD / BDT
            <ChevronDownIcon className="size-4" />
          </button>

          <Link
            href="/login"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-medium text-white transition hover:bg-primary-700"
          >
            <UserIcon className="size-4" />
            Login / Register
          </Link>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex size-10 items-center justify-center rounded-lg text-neutral-800 desktop:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-gray-200 bg-white desktop:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-800 hover:bg-teal-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-primary text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Login / Register
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
