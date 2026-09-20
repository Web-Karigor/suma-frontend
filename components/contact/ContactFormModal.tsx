"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { ContactForm } from "./ContactForm";

type ContactFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle escape key press
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    
    // Get scrollbar width
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop with fade-in animation */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-out"
        style={{
          animation: "fadeIn 300ms ease-out",
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal container with scale + fade animation */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-white shadow-2xl"
        style={{
          animation: "modalSlideIn 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with close button */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 rounded-t-2xl sm:rounded-t-3xl">
          <h2
            id="modal-title"
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-900"
          >
            Get a Quote
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full p-2 text-neutral-600 transition-colors hover:bg-gray-100 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/30"
            aria-label="Close modal"
          >
            <X className="size-5 sm:size-6" />
          </button>
        </div>

        {/* Form content */}
        <div className="px-5 py-6 sm:px-6 sm:py-7 md:px-8 md:py-8">
          <ContactForm />
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes modalSlideIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        }
      `}</style>
    </div>
  );
}
