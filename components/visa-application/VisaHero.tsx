"use client";

import Image from "next/image";
import Link from "next/link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Container } from "@/components/ui/Container";

type VisaHeroProps = {
  title: string;
  subtitle: string;
  image: string;
};

export function VisaHero({ title, subtitle, image }: VisaHeroProps) {
  return (
    <section className="relative flex min-h-[380px] items-end overflow-hidden bg-neutral-900 pb-16 tablet:min-h-[470px] tablet:pb-20 desktop:min-h-[580px] desktop:pb-24">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover opacity-60"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#0A0C0C]/64" />
      <Container className="relative z-10 text-center text-white">
        <p className="text-sm tablet:text-base">
          Country pages grouped by region, Asia, Europe, Americas, Africa, Australia, and more.
        </p>
        <h1 className="mt-1 text-4xl font-semibold tablet:text-6xl">{title}</h1>
        {subtitle ? (
          <p className="mx-auto mt-3 max-w-[620px] text-xs leading-[1.5] tablet:text-sm">
            {subtitle}
          </p>
        ) : null}
        <div className="mx-auto mt-8 flex max-w-[900px] flex-col gap-3 rounded-[12px] border-l-4 border-primary bg-white p-2 text-left tablet:flex-row tablet:items-center tablet:gap-4 tablet:p-3">
          <span className="px-3 text-sm font-medium text-neutral-900 tablet:flex-1">
            Please Select Country
          </span>
          <Select defaultValue="thailand">
            <SelectTrigger
              showCloseIcon
              className="h-11 w-full rounded-md border-0 bg-gray-100 px-4 text-xs text-neutral-700 shadow-none tablet:w-[270px]"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="thailand">Thailand</SelectItem>
              <SelectItem value="saudi-arabia">Saudi Arabia</SelectItem>
              <SelectItem value="malaysia">Malaysia</SelectItem>
              <SelectItem value="singapore">Singapore</SelectItem>
            </SelectContent>
          </Select>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-xs font-medium text-white transition-colors hover:bg-primary-700"
          >
            View
          </Link>
        </div>
      </Container>
    </section>
  );
}
