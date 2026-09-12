"use client";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import { ArrowUpRightIcon } from "@/components/icons";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useSettingsQuery } from "@/hooks/queries/useSettingsQuery";

import { FALLBACK_SETTINGS } from "@/helpers/settings";
import { apiFetch } from "@/lib/apiFetch";

const fieldClass =
  "h-11 w-full rounded-md border-0 bg-gray-100 px-3 text-sm text-neutral-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-primary/30";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [packageName, setPackageName] = useState("");
  const [date, setDate] = useState<Date>();

  const { data: settings = FALLBACK_SETTINGS } = useSettingsQuery();

  return (
    <form
      className="rounded-[16px] bg-[#F2F8F8] p-5 tablet:p-7 desktop:h-full desktop:rounded-[44px] desktop:p-8"
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        setError("");
        setIsSubmitting(true);

        const formData = new FormData(form);
        const value = (name: string) => String(formData.get(name) ?? "").trim();

        try {
          await apiFetch("https://suma.webkarigor.com/api/quotations", {
            method: "POST",
            body: JSON.stringify({
              name: value("name"),
              phone: value("phone"),
              email: value("email"),
              package: packageName || null,
              travelers: value("travelers") || null,
              date: date ? format(date, "yyyy-MM-dd") : null,
              message: value("message") || null,
            }),
          });
          setSent(true);
          form.reset();
          setPackageName("");
          setDate(undefined);
        } catch (submissionError) {
          setError(
            submissionError instanceof Error
              ? submissionError.message
              : "Unable to send your message. Please try again.",
          );
        } finally {
          setIsSubmitting(false);
        }
      }}
    >
      <div className="grid gap-4 tablet:grid-cols-2">
        <Field
          label="Name*"
          name="name"
          placeholder="Your Full Name"
          required
        />

        <Field
          label="Phone Number*"
          name="phone"
          type="number"
          placeholder="+88 123 456 789"
          required
        />

        <Field
          label="Email*"
          name="email"
          placeholder="you@example.com"
          type="email"
          required
        />

        <div className="flex flex-col gap-2 text-base font-medium text-[#0A0C0C]">
          Select Tour Package (Optional)
          <Select
            value={packageName}
            onValueChange={(value) => setPackageName(value ?? "")}
          >
            <SelectTrigger
              className={`${fieldClass} justify-between px-3 text-left`}
            >
              <SelectValue />
            </SelectTrigger>

            <SelectContent align="start" className="bg-white">
              <SelectItem value="hajj">Hajj Package</SelectItem>

              <SelectItem value="umrah">Umrah Package</SelectItem>

              <SelectItem value="holiday">Holiday Package</SelectItem>

              <SelectItem value="corporate">Corporate Package</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Field
          label="Number of Travelers"
          name="travelers"
          type="number"
          placeholder="Enter number of travelers"
          optional
        />

        <DateField date={date} onDateChange={setDate} />
      </div>

      <label className="mt-4 flex flex-col gap-2 text-base font-medium text-[#0A0C0C]">
        Your Message/Queries (Optional)
        <textarea
          name="message"
          placeholder="Write message or queries here..."
          className="min-h-[108px] w-full resize-y rounded-md border-0 bg-gray-100 px-3 py-3 text-sm text-neutral-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-primary/30"
        />
      </label>

      <div className="mt-5 flex flex-col gap-4 tablet:flex-row tablet:items-center tablet:justify-between">
        <button
          type="submit"
          className="group inline-flex h-[58px] items-center justify-between gap-4 rounded-[12px] bg-primary px-4 text-base font-medium text-white transition-colors hover:bg-primary-700"
        >
          {isSubmitting
            ? "Sending..."
            : sent
              ? "Message Sent"
              : "Send Your Message"}

          <span className="relative inline-flex size-6 overflow-hidden rounded-full bg-white text-primary">
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[120%] group-hover:-translate-y-[120%]">
              <ArrowUpRightIcon className="size-3" />
            </span>

            <span className="absolute inset-0 flex translate-x-[-120%] translate-y-[120%] items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0">
              <ArrowUpRightIcon className="size-3" />
            </span>
          </span>
        </button>

        {error && <p className="text-xs text-red-600">{error}</p>}

        <p className="max-w-[220px] text-[10px] leading-[1.4] text-gray-500">
          Our representative will contact you within 24 hours. Or you can call{" "}
          <a
            href={`tel:${settings.hotline}`}
            className="font-semibold text-primary"
          >
            {settings.hotline}
          </a>{" "}
          directly.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,

  name,

  placeholder,

  type = "text",

  required = false,

  optional = false,
}: {
  label: string;

  name: string;

  placeholder?: string;

  type?: string;

  required?: boolean;

  optional?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2 text-base font-medium text-[#0A0C0C]">
      {label} (optional)
      <input
        name={name}
        type={type}
        inputMode={type === "number" ? "numeric" : undefined}
        pattern={type === "number" ? "[0-9]*" : undefined}
        placeholder={placeholder}
        required={required}
        min={type === "number" ? 1 : undefined}
        className={`${fieldClass} ${
          type === "number"
            ? "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            : ""
        }`}
      />
    </label>
  );
}

function DateField({
  date,
  onDateChange,
}: {
  date?: Date;
  onDateChange: (date: Date | undefined) => void;
}) {
  return (
    <label className="flex flex-col gap-2 text-base font-medium text-[#0A0C0C]">
      Preferred Date{""} (Optional)
      <Popover>
        <PopoverTrigger
          render={
            <button
              type="button"
              className="
              flex
              h-11
              w-full
              items-center
              justify-between
              rounded-md
              border-0
              bg-gray-100
              px-3
              text-left
              text-sm
              font-normal
              text-neutral-900
              outline-none
              focus:ring-2
              focus:ring-primary/30
            "
            />
          }
        >
          {date ? (
            format(date, "MM/dd/yyyy")
          ) : (
            <span className="text-gray-500">mm/dd/yyyy</span>
          )}

          <CalendarIcon className="size-4 text-neutral-700" />
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" selected={date} onSelect={onDateChange} />
        </PopoverContent>
      </Popover>
    </label>
  );
}
