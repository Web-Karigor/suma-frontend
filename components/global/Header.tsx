"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ArrowUpRightIcon,
  ChevronDownIcon,
  CloseIcon,
  HeadsetIcon,
  MenuIcon,
  SearchIcon,
} from "@/components/icons";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { company, navLinks } from "@/lib/home-data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <Container className="pt-3 desktop:pt-4">
        <div
          className={cn(
            "flex w-full items-center gap-3 rounded-full px-3 py-2",
            "bg-linear-to-r from-[#e0e6e9] to-[#f7f8f9]",
            "shadow-[0_10px_32px_rgb(10_12_12/12%),inset_0_1px_0_rgb(255_255_255/80%)]",
            "desktop:gap-5 desktop:px-5 desktop:py-2.5",
          )}
        >
          <Logo compact={false} className="hidden shrink-0 min-[480px]:flex" />
          <Logo compact className="shrink-0 min-[480px]:hidden" />

          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-3 desktop:flex wide:gap-6"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

              if ("children" in link && link.children) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServiceOpen(true)}
                    onMouseLeave={() => setServiceOpen(false)}
                  >
                    <button
                      type="button"
                      className={cn(
                        "inline-flex items-center gap-0.5 text-sm font-medium text-neutral-900 transition-colors hover:text-primary wide:text-[0.92rem]",
                        active && "text-primary",
                      )}
                      aria-expanded={serviceOpen}
                      aria-haspopup="true"
                      onClick={() => setServiceOpen((value) => !value)}
                    >
                      {link.label}
                      <ChevronDownIcon
                        className={cn(
                          "size-4 transition-transform",
                          serviceOpen && "rotate-180",
                        )}
                      />
                    </button>
                    {serviceOpen ? (
                      <div className="absolute top-full left-1/2 z-50 min-w-[220px] -translate-x-1/2 pt-3">
                        <ul className="rounded-2xl border border-gray-200 bg-white py-2 shadow-[0_16px_40px_rgb(10_12_12/16%)]">
                          {link.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block px-4 py-2 text-sm text-neutral-800 transition hover:bg-teal-50 hover:text-primary"
                                onClick={() => setServiceOpen(false)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium whitespace-nowrap text-neutral-900 transition-colors hover:text-primary wide:text-[0.92rem]",
                    active && "text-primary",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto hidden shrink-0 items-center gap-2.5 desktop:flex wide:gap-3">
            <a
              href={`tel:${company.support.phone}`}
              className="inline-flex items-center gap-2 rounded-[10px] border border-teal-600 px-2.5 py-1.5 text-teal-700"
            >
              <HeadsetIcon className="size-6 shrink-0" />
              <span className="leading-none">
                <span className="block text-[0.58rem] font-medium">{company.support.title}</span>
                <span className="mt-0.5 block text-[1.15rem] font-bold tracking-tight">
                  {company.support.phone}
                </span>
              </span>
            </a>

            <label className="relative w-[136px] wide:w-[168px]">
              <span className="sr-only">Search</span>
              <SearchIcon className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-gray-500" />
              <input
                type="search"
                placeholder="Search"
                className="h-11 w-full rounded-full border border-white/70 bg-[#eef1f3] pr-4 pl-10 text-sm text-neutral-800 outline-none placeholder:text-gray-500 focus:border-primary focus:bg-white"
              />
            </label>

            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-3 rounded-full bg-black pr-1.5 pl-5 text-sm font-medium whitespace-nowrap text-white transition hover:bg-neutral-900"
            >
              Get a Free Quote
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-white text-black">
                <ArrowUpRightIcon className="size-3.5" />
              </span>
            </Link>
          </div>

          <button
            type="button"
            className="ml-auto inline-flex size-10 items-center justify-center rounded-full text-neutral-800 desktop:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </Container>

      {open ? (
        <Container className="pt-2 desktop:hidden">
          <div
            id="mobile-nav"
            className="rounded-[28px] border border-gray-200 bg-white p-4 shadow-[0_16px_40px_rgb(10_12_12/12%)]"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map((link) => {
                if ("children" in link && link.children) {
                  return (
                    <div key={link.href}>
                      <p className="px-3 py-2 text-sm font-semibold text-neutral-800">{link.label}</p>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-5 py-2 text-sm text-neutral-700 hover:bg-teal-50 hover:text-primary"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-800 hover:bg-teal-50"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <a
              href={`tel:${company.support.phone}`}
              className="mt-4 flex items-center gap-2 rounded-[10px] border border-teal-600 px-3 py-2 text-teal-700"
            >
              <HeadsetIcon className="size-6" />
              <span className="leading-none">
                <span className="block text-[0.62rem] font-medium">{company.support.title}</span>
                <span className="mt-0.5 block text-lg font-bold">{company.support.phone}</span>
              </span>
            </a>

            <label className="relative mt-3 block">
              <span className="sr-only">Search</span>
              <SearchIcon className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-gray-500" />
              <input
                type="search"
                placeholder="Search"
                className="h-11 w-full rounded-full border border-gray-200 bg-gray-50 pr-4 pl-10 text-sm outline-none placeholder:text-gray-500 focus:border-primary focus:bg-white"
              />
            </label>

            <Link
              href="/contact"
              className="mt-3 inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-black pr-1.5 pl-5 text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Get a Free Quote
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-white text-black">
                <ArrowUpRightIcon className="size-3.5" />
              </span>
            </Link>
          </div>
        </Container>
      ) : null}
    </header>
  );
}
