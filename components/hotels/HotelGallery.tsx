"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CloseIcon } from "@/components/icons";
import { CoverImage } from "@/components/ui/CoverImage";
import type { HotelGalleryImage } from "@/types/hotel";

const VISIBLE_THUMBS = 5;

function GalleryLightbox({
  images,
  index,
  title,
  onClose,
  onChange,
}: {
  images: HotelGalleryImage[];
  index: number;
  title: string;
  onClose: () => void;
  onChange: (index: number) => void;
}) {
  const [mounted, setMounted] = useState(false);
  const current = images[index] ?? images[0];
  const canPrev = images.length > 1;
  const canNext = images.length > 1;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") {
        onChange((index - 1 + images.length) % images.length);
      }
      if (event.key === "ArrowRight") {
        onChange((index + 1) % images.length);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, images.length, onChange, onClose]);

  if (!mounted || !current) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Hotel gallery"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close gallery"
        className="absolute top-4 right-4 z-10 inline-flex size-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        onClick={onClose}
      >
        <CloseIcon className="size-6" />
      </button>

      <div
        className="relative flex max-h-[90vh] w-full max-w-5xl flex-col items-center gap-3 xl:max-w-[90vw] 2xl:max-w-[1680px]"
        onClick={(event) => event.stopPropagation()}
      >
        {canPrev ? (
          <button
            type="button"
            aria-label="Previous image"
            className="absolute top-1/2 left-2 z-10 inline-flex size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 xl:left-4 xl:size-14"
            onClick={() =>
              onChange((index - 1 + images.length) % images.length)
            }
          >
            <ChevronLeft className="size-7 xl:size-8" />
          </button>
        ) : null}

        {canNext ? (
          <button
            type="button"
            aria-label="Next image"
            className="absolute top-1/2 right-2 z-10 inline-flex size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 xl:right-4 xl:size-14"
            onClick={() => onChange((index + 1) % images.length)}
          >
            <ChevronRight className="size-7 xl:size-8" />
          </button>
        ) : null}

        <div className="relative aspect-[16/10] max-h-[80vh] w-full overflow-hidden rounded-[12px] bg-black xl:max-h-[85vh]">
          <CoverImage
            src={current.url}
            alt={current.alt || title}
            className="object-contain"
            sizes="(min-width: 1536px) 1680px, (min-width: 1280px) 90vw, 1024px"
          />
        </div>
        <p className="text-sm font-medium text-white/80">
          {index + 1} / {images.length}
        </p>
      </div>
    </div>,
    document.body,
  );
}

export function HotelGallery({
  images,
  title,
}: {
  images: HotelGalleryImage[];
  title: string;
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const mainImage = images[0];
  const thumbImages = images.slice(0, VISIBLE_THUMBS);
  const moreCount = Math.max(images.length - VISIBLE_THUMBS, 0);

  function openLightbox(index: number) {
    setLightboxIndex(index);
  }

  if (images.length === 0 || !mainImage) return null;

  return (
    <div className="w-full">
      <div className="grid gap-4 desktop:grid-cols-[857fr_428fr]">
        <button
          type="button"
          className="relative aspect-[857/629] w-full cursor-pointer overflow-hidden rounded-[12px]"
          onClick={() => openLightbox(0)}
        >
          <CoverImage
            src={mainImage.url}
            alt={mainImage.alt || title}
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 857px"
          />
        </button>
        <div className="hidden desktop:grid desktop:grid-rows-2 desktop:gap-4">
          {images.slice(1, 3).map((image, index) => (
            <button
              key={`${image.url}-side-${index}`}
              type="button"
              className="relative min-h-0 cursor-pointer overflow-hidden rounded-[12px]"
              onClick={() => openLightbox(index + 1)}
            >
              <CoverImage
                src={image.url}
                alt={image.alt}
                className="object-cover"
                sizes="428px"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 tablet:grid-cols-5 tablet:gap-4">
        {thumbImages.map((image, index) => {
          const isLastVisible = index === thumbImages.length - 1;
          const showMore = isLastVisible && moreCount > 0;

          return (
            <button
              key={`${image.url}-thumb-${index}`}
              type="button"
              onClick={() =>
                openLightbox(
                  showMore
                    ? Math.min(VISIBLE_THUMBS, images.length - 1)
                    : index,
                )
              }
              className="relative aspect-[247/175] w-full cursor-pointer overflow-hidden rounded-[12px]"
            >
              <CoverImage
                src={image.url}
                alt={image.alt}
                className="object-cover"
                sizes="248px"
              />
              {showMore ? (
                <span className="absolute inset-0 flex items-center justify-center bg-black/55">
                  <span className="text-sm font-semibold text-white tablet:text-lg">
                    +{moreCount} more
                  </span>
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      {lightboxIndex !== null ? (
        <GalleryLightbox
          images={images}
          index={lightboxIndex}
          title={title}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      ) : null}
    </div>
  );
}
