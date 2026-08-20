"use client";

import { useState } from "react";
import { ArrowUpRightIcon } from "@/components/icons";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { company } from "@/lib/home-data";

const fieldClass = "h-11 w-full rounded-md border-0 bg-gray-100 px-3 text-sm text-neutral-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-primary/30";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="rounded-[16px] bg-[#F2F8F8] p-5 tablet:p-7 desktop:h-full desktop:rounded-[44px] desktop:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 tablet:grid-cols-2">
        <Field label="Name*" name="name" placeholder="Your Full Name" required />
        <Field label="Phone Number*" name="phone" placeholder="+88 123 456 789" required />
        <Field label="Email" name="email" placeholder="you@example.com" type="email" optional />
        <div className="flex flex-col gap-2 text-base font-medium text-[#0A0C0C]">
          Select Tour Package <span className="font-normal text-gray-500">(Optional)</span>
          <Select defaultValue="choose-package">
            <SelectTrigger className={`${fieldClass} justify-between px-3 text-left`}><SelectValue /></SelectTrigger>
            <SelectContent align="start" className="bg-white">
              <SelectItem value="choose-package">Choose your package</SelectItem>
              <SelectItem value="hajj">Hajj Package</SelectItem>
              <SelectItem value="umrah">Umrah Package</SelectItem>
              <SelectItem value="holiday">Holiday Package</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Field label="Number of Travelers" name="travelers" placeholder="e.g. 2 adults, 1 child" optional />
        <Field label="Preferred Date" name="date" type="date" optional />
      </div>
      <label className="mt-4 flex flex-col gap-2 text-base font-medium text-[#0A0C0C]">
        Your Message/Queries* 
        <textarea name="message" required placeholder="Write message or queries here..." className="min-h-[108px] w-full resize-y rounded-md border-0 bg-gray-100 px-3 py-3 text-sm text-neutral-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-primary/30" />
      </label>
      <div className="mt-5 flex flex-col gap-4 tablet:flex-row tablet:items-center tablet:justify-between">
        <button type="submit" className="group inline-flex h-[58px] items-center justify-between gap-4 rounded-[12px] bg-primary px-4 text-base font-medium text-white transition-colors hover:bg-primary-700">
          {sent ? "Message Sent" : "Send Your Message"}
          <span className="relative inline-flex size-6 overflow-hidden rounded-full bg-white text-primary">
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[120%] group-hover:-translate-y-[120%] motion-reduce:transition-none"><ArrowUpRightIcon className="size-3" /></span>
            <span className="absolute inset-0 flex translate-x-[-120%] translate-y-[120%] items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0 motion-reduce:translate-x-0 motion-reduce:transition-none"><ArrowUpRightIcon className="size-3" /></span>
          </span>
        </button>
        <p className="max-w-[220px] text-[10px] leading-[1.4] text-gray-500">
          Our representative will contact you within 24 hours. Or you can call <a href={`tel:${company.hotline}`} className="font-semibold text-primary">{company.hotline}</a> directly.
        </p>
      </div>
    </form>
  );
}

function Field({ label, name, placeholder, type = "text", required = false, optional = false }: { label: string; name: string; placeholder?: string; type?: string; required?: boolean; optional?: boolean }) {
  return (
    <label className="flex flex-col gap-2 text-base font-medium text-[#0A0C0C]">
      {label} {optional ? <span className="font-normal text-gray-500">(Optional)</span> : null}
      <input name={name} type={type} placeholder={placeholder} required={required} className={fieldClass} />
    </label>
  );
}
