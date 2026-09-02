"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  CloseIcon,
  HeadsetIcon,
  MenuIcon,
  SearchIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { cn } from "@/lib/cn";
import { company, navLinks } from "@/lib/home-data";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const isHome = pathname === "/";
  const isCorporateTour = pathname.startsWith("/corporate-tour");
  const isHajjUmrahDetails = pathname.startsWith("/hajj-umrah-details");
  const isAbout = pathname.startsWith("/about");
  const isMedical = pathname.startsWith("/medical");
  const isOfferDetails = pathname.startsWith("/offer-details");
  const isContact = pathname.startsWith("/contact");
  const isVisaApplication = pathname.startsWith("/visa-application");
  const overlayHeader =
    isHome ||
    isCorporateTour ||
    isHajjUmrahDetails ||
    isAbout ||
    isMedical ||
    isOfferDetails ||
    isContact ||
    isVisaApplication;
  const alignWideGrid = overlayHeader;

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header
      className={cn(
        "z-50 bg-transparent",
        overlayHeader ? "fixed top-0 right-0 left-0" : "sticky top-0",
      )}
    >
      <Container
        className={cn(
          "relative z-20 pt-3 desktop:pt-8",
          // Match the 1740px content column (no gutter inset at ≥1920).
          alignWideGrid && "desktop-xl:!px-0",
        )}
      >
        <div
          className={cn(
            "flex w-full items-center justify-between gap-3 rounded-full px-3 py-2",
            "bg-white/80 backdrop-blur-3xl",
            "shadow-[3px_4px_16px_0_rgb(0_0_0/6%)]",
            "desktop:min-h-[90px] desktop:p-4",
          )}
        >
          <div className="flex min-w-0 items-center gap-3 desktop:gap-[44px]">
            <Logo compact={false} className="hidden shrink-0 wide:flex" />
            <Logo compact className="hidden shrink-0 min-[480px]:flex wide:hidden" />
            <Logo compact className="shrink-0 min-[480px]:hidden" />

            <nav
              className="hidden min-w-0 items-center gap-3 desktop:flex wide:gap-6"
              aria-label="Primary"
            >
            {navLinks.map((link) => {
              const active =
                link.href.startsWith("http")
                  ? false
                  : link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

              if ("children" in link && link.children) {
                const selected = link.children.find(
                  (child) =>
                    pathname === child.href || pathname.startsWith(`${child.href}/`),
                )?.label;

                return (
                  <Select
                    key={link.label}
                    value={selected ?? null}
                    onValueChange={(value) => {
                      const next = link.children.find((child) => child.label === value);
                      if (next) router.push(next.href);
                    }}
                  >
                    <SelectTrigger
                      className={cn(
                        "h-auto gap-0.5 rounded-none border-0 bg-transparent p-0 text-[16px] font-medium text-black shadow-none hover:bg-transparent hover:text-primary focus-visible:border-transparent focus-visible:ring-0 dark:bg-transparent dark:hover:bg-transparent [&_svg]:text-current [&_svg:not([class*='size-'])]:size-4",
                        active && "text-primary",
                      )}
                    >
                      {link.label}
                    </SelectTrigger>
                    <SelectContent
                      align="center"
                      side="bottom"
                      sideOffset={12}
                      alignItemWithTrigger={false}
                      className="min-w-[220px] rounded-2xl border border-gray-200 bg-white p-1 shadow-[0_16px_40px_rgb(10_12_12/16%)] ring-0"
                    >
                      {link.children.map((child) => (
                        <SelectItem
                          key={child.label}
                          value={child.label}
                          className="rounded-lg py-2 pr-8 pl-3 text-sm text-neutral-800 focus:bg-teal-50 focus:text-primary data-highlighted:bg-teal-50 data-highlighted:text-primary"
                        >
                          {child.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={cn(
                    "text-[16px] font-medium whitespace-nowrap text-black transition-colors hover:text-primary",
                    active && "text-primary",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          </div>

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

            <label className="relative w-[240px] shrink-0">
              <span className="sr-only">Search</span>
              <SearchIcon className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-gray-500" />
              <input
                type="search"
                placeholder="Search"
                className="h-[49px] w-[240px] rounded-full border-0 bg-[#EEEEEE]/80 py-3 pr-4 pl-[42px] text-sm text-neutral-800 outline-none placeholder:text-gray-500 focus:bg-white"
              />
            </label>

            <Button href="/contact" className="h-11 gap-3 rounded-full !bg-black text-sm !text-white hover:!bg-[#0A0C0C] [&>span]:size-8 [&>span]:!bg-white [&>span]:!text-black">
              Get a Free Quote
            </Button>
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

      <div
        className={cn(
          "fixed inset-0 z-10 desktop:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
        {...(!open ? { inert: true } : {})}
      >
        <button
          type="button"
          className={cn(
            "absolute inset-0 bg-black/40 transition-opacity duration-1000 ease-out motion-reduce:transition-none",
            open ? "opacity-100" : "opacity-0",
          )}
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        />
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          className={cn(
            "absolute inset-x-0 bottom-0 max-h-[min(88vh,720px)] overflow-y-auto rounded-t-[28px] border border-gray-200 bg-white p-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-[0_-16px_40px_rgb(10_12_12/16%)]",
            "transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
            open ? "translate-y-0" : "translate-y-full",
          )}
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => {
              if ("children" in link && link.children) {
                return (
                  <div key={link.label}>
                    <p className="px-3 py-2 text-sm font-semibold text-neutral-800">{link.label}</p>
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
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
                  key={link.label}
                  href={link.href}
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
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

          <Button href="/contact" className="mt-3 h-12 w-full justify-center rounded-full !bg-black text-sm !text-white hover:!bg-[#0A0C0C] [&>span]:size-8 [&>span]:!bg-white [&>span]:!text-black">
            Get a Free Quote
          </Button>
        </div>
      </div>
    </header>
  );
}
