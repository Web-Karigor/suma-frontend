"use client";

import { useEffect, useId, useState } from "react";
import { CalendarIcon, RefreshCw } from "lucide-react";
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

import { Toast, type ToastState } from "@/components/ui/Toast";

import { useSettingsQuery } from "@/hooks/queries/useSettingsQuery";

import { FALLBACK_SETTINGS } from "@/helpers/settings";
import { apiFetch } from "@/lib/apiFetch";

const TRAVELER_MIN = 1;
const TRAVELER_MAX = 50;

const CAPTCHA_LENGTH = 4;
const CAPTCHA_UPPER = "ABCDEFGHJKLMNPQRSTUVWXYZ";
const CAPTCHA_LOWER = "abcdefghijkmnopqrstuvwxyz";
const CAPTCHA_DIGITS = "23456789";

function pickChar(chars: string) {
  return chars[Math.floor(Math.random() * chars.length)];
}

function createCaptcha() {
  const mixed = CAPTCHA_UPPER + CAPTCHA_LOWER + CAPTCHA_DIGITS;
  const chars = [
    pickChar(CAPTCHA_UPPER),
    pickChar(CAPTCHA_LOWER),
    pickChar(CAPTCHA_DIGITS),
    pickChar(mixed),
  ];

  for (let index = chars.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [chars[index], chars[swapIndex]] = [chars[swapIndex], chars[index]];
  }

  return chars.join("");
}

function travelersErrorMessage(value: string) {
  if (!value) return "";
  if (!/^\d+$/.test(value)) return "Enter a whole number of travelers.";
  const count = Number(value);
  if (count < TRAVELER_MIN || count > TRAVELER_MAX) {
    return `Number of travelers must be between ${TRAVELER_MIN} and ${TRAVELER_MAX}.`;
  }
  return "";
}

const fieldClass =
  "h-11 w-full rounded-md border-0 bg-gray-100 px-3 text-sm text-neutral-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-primary/30";

const serviceSelectContentClass =
  "min-w-[280px] rounded-md border border-gray-200 bg-white p-2 shadow-[0_16px_40px_rgb(10_12_12/16%)] ring-0";

const serviceSelectItemClass =
  "rounded-sm px-4 py-3 pr-10 pl-4 text-base text-neutral-800 focus:bg-teal-50 focus:text-primary data-highlighted:bg-teal-50 data-highlighted:text-primary";

const SERVICE_OPTIONS = [
  { value: "hajj", label: "Hajj Package" },
  { value: "umrah", label: "Umrah Package" },
  { value: "holiday", label: "Holiday Package" },
  { value: "corporate", label: "Corporate Package" },
] as const;

function OptionalMark() {
  return (
    <span className="font-poppins font-normal text-[#8E8E8E]"> (Optional)</span>
  );
}

function FieldLabel({
  children,
  optional = false,
}: {
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <span className="text-base font-medium text-[#0A0C0C]">
      {children}
      {optional ? <OptionalMark /> : null}
    </span>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);
  const [packageName, setPackageName] = useState("");
  const [date, setDate] = useState<Date>();
  const [travelers, setTravelers] = useState("");
  const [travelersError, setTravelersError] = useState("");
  const captchaId = useId();
  const [captcha, setCaptcha] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  useEffect(() => {
    setCaptcha(createCaptcha());
  }, []);

  const { data: settings = FALLBACK_SETTINGS } = useSettingsQuery();

  return (
    <>
    <form
      className="rounded-[16px] bg-[#F2F8F8] p-5 tablet:p-7 desktop:h-full desktop:rounded-[44px] desktop:p-8"
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        const formData = new FormData(form);
        const value = (name: string) => String(formData.get(name) ?? "").trim();
        const nextTravelersError = travelersErrorMessage(travelers);

        if (!captcha || captchaAnswer !== captcha) {
          setCaptchaError("Please enter the code shown in the box.");
          return;
        }
        setCaptchaError("");

        if (nextTravelersError) {
          setTravelersError(nextTravelersError);
          return;
        }

        setIsSubmitting(true);

        try {
          await apiFetch("https://admin.sumabd.com/api/quotations", {
            method: "POST",
            body: JSON.stringify({
              name: value("name"),
              phone: value("phone"),
              email: value("email"),
              package: packageName || null,
              travelers: travelers ? Number(travelers) : null,
              date: date ? format(date, "yyyy-MM-dd") : null,
              message: value("message") || null,
            }),
          });
          setSent(true);
          form.reset();
          setPackageName("");
          setDate(undefined);
          setTravelers("");
          setTravelersError("");
          setCaptchaAnswer("");
          setCaptcha(createCaptcha());
          setToast({
            type: "success",
            message: "Message sent successfully!",
          });
        } catch (submissionError) {
          setToast({
            type: "error",
            message:
              submissionError instanceof Error
                ? submissionError.message
                : "Unable to send your message. Please try again.",
          });
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
          label="Email"
          optional
          name="email"
          placeholder="you@example.com"
          type="email"
        />

        <div className="flex flex-col gap-2">
          <FieldLabel optional>Select Services</FieldLabel>
          <Select
            value={packageName || undefined}
            onValueChange={(value) => setPackageName(value ?? "")}
          >
            <SelectTrigger
              className={`${fieldClass} justify-between px-3 text-left`}
            >
              <SelectValue placeholder="Choose Service" />
            </SelectTrigger>

            <SelectContent align="start" className={serviceSelectContentClass}>
              {SERVICE_OPTIONS.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className={serviceSelectItemClass}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <label className="flex flex-col gap-2">
          <FieldLabel optional>Number of Travelers</FieldLabel>
          <input
            name="travelers"
            type="text"
            inputMode="numeric"
            autoComplete="off"
            placeholder="1–50"
            value={travelers}
            aria-invalid={Boolean(travelersError)}
            aria-describedby={travelersError ? "travelers-error" : undefined}
            onChange={(event) => {
              const next = event.target.value.replace(/\D/g, "").slice(0, 2);
              setTravelers(next);
              setTravelersError(travelersErrorMessage(next));
            }}
            className={`${fieldClass} [appearance:textfield]`}
          />
          {travelersError ? (
            <p id="travelers-error" className="text-sm font-medium text-error-600">
              {travelersError}
            </p>
          ) : null}
        </label>

        <DateField date={date} onDateChange={setDate} />
      </div>

      <label className="mt-4 flex flex-col gap-2 text-base font-medium text-[#0A0C0C]">
        Your Message/Queries*
        <textarea
          name="message"
          required
          placeholder="Write message or queries here..."
          className="min-h-[108px] w-full resize-y rounded-md border-0 bg-gray-100 px-3 py-3 text-sm text-neutral-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-primary/30"
        />
      </label>

      <div className="mt-4 flex flex-col gap-2">
        <label
          htmlFor={captchaId}
          className="text-sm font-medium text-neutral-800"
        >
          Quick verification
        </label>
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="inline-flex h-16 min-w-[168px] select-none items-center justify-center gap-1.5 rounded-md bg-gray-100 px-4 font-mono text-[32px] font-bold leading-none tracking-[0.08em] text-neutral-900"
            aria-hidden="true"
          >
            {captcha
              ? captcha.split("").map((character, index) => (
                  <span key={`${character}-${index}`} className="inline-block">
                    {character}
                  </span>
                ))
              : "····"}
          </span>
          <input
            id={captchaId}
            name="captcha"
            type="text"
            inputMode="text"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            value={captchaAnswer}
            onChange={(event) => {
              setCaptchaAnswer(
                event.target.value
                  .replace(/[^a-zA-Z0-9]/g, "")
                  .slice(0, CAPTCHA_LENGTH),
              );
              if (captchaError) setCaptchaError("");
            }}
            aria-invalid={Boolean(captchaError)}
            aria-describedby={captchaError ? `${captchaId}-error` : undefined}
            aria-label={
              captcha
                ? `Enter the code shown in the box: ${captcha.split("").join(" ")}`
                : "Enter the code shown in the box"
            }
            placeholder="Enter the code"
            required
            disabled={!captcha}
            className="h-16 w-full max-w-[210px] rounded-md border-0 bg-gray-100 px-3 text-lg text-neutral-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-primary/30 disabled:opacity-70"
          />
          <button
            type="button"
            onClick={() => {
              setCaptcha(createCaptcha());
              setCaptchaAnswer("");
              setCaptchaError("");
            }}
            className="inline-flex size-10 items-center justify-center rounded-md text-neutral-600 transition-colors hover:bg-teal-100 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label="Get a new verification code"
            title="Get a new code"
          >
            <RefreshCw className="size-4" aria-hidden="true" />
          </button>
        </div>
        {captchaError ? (
          <p
            id={`${captchaId}-error`}
            className="text-sm font-medium text-error-600"
            role="alert"
          >
            {captchaError}
          </p>
        ) : null}
      </div>

      <div className="mt-5 flex flex-col gap-4 tablet:flex-row tablet:items-center tablet:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex h-[50px] items-center justify-between gap-3 rounded-[10px] bg-primary px-3.5 text-sm font-medium text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting
            ? "Sending..."
            : sent
              ? "Message Sent"
              : "Send Your Message"}

          <span className="relative inline-flex size-7 overflow-hidden rounded-full bg-white text-primary">
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[120%] group-hover:-translate-y-[120%]">
              <ArrowUpRightIcon className="size-[85%]" />
            </span>

            <span className="absolute inset-0 flex translate-x-[-120%] translate-y-[120%] items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0">
              <ArrowUpRightIcon className="size-[85%]" />
            </span>
          </span>
        </button>

        <p className="max-w-[326px] text-[15px] leading-[1.4] font-medium text-gray-500">
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
    <Toast toast={toast} onClose={() => setToast(null)} />
    </>
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
    <label className="flex flex-col gap-2">
      <FieldLabel optional={optional}>{label}</FieldLabel>
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
    <label className="flex flex-col gap-2">
      <FieldLabel optional>Preferred Date</FieldLabel>
      <Popover>
        <PopoverTrigger
          render={
            <button
              type="button"
              className="flex h-11 w-full items-center justify-between rounded-md border-0 bg-gray-100 px-3 text-left text-sm font-normal text-neutral-900 outline-none focus:ring-2 focus:ring-primary/30"
            />
          }
        >
          {date ? (
            format(date, "dd/MM/yyyy")
          ) : (
            <span className="text-gray-500">dd/mm/yyyy</span>
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
