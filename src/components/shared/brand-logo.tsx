import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export function BrandLogo({
  className,
  imageClassName,
  priority = false,
}: BrandLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-brand-text transition-colors",
        className
      )}
    >
      <span
        className={cn(
          "relative block overflow-hidden rounded-full bg-brand-primary shadow-soft ring-1 ring-brand-primary/10",
          imageClassName
        )}
      >
        <Image
          src="/plate-date-logo.png"
          alt="Plate Date by Rhea Jaitha"
          fill
          priority={priority}
          sizes="(max-width: 768px) 56px, 96px"
          className="object-cover"
        />
      </span>
      <span className="sr-only">Plate Date by Rhea Jaitha</span>
    </span>
  );
}
