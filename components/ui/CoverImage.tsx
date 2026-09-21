import Image from "next/image";

type CoverImageProps = {
  src?: string | null;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
};

export function CoverImage({
  src,
  alt,
  sizes,
  className,
  priority,
}: CoverImageProps) {
  if (!src) {
    return <div className={`absolute inset-0 bg-black/10 ${className ?? ""}`} aria-hidden />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
      priority={priority}
    />
  );
}
