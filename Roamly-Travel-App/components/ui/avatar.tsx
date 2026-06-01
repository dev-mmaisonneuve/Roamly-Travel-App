import Image from "next/image";
import { cn } from "@/lib/utils/cn";

export function Avatar({
  src,
  alt,
  className
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={96}
      height={96}
      className={cn("h-10 w-10 rounded-full object-cover ring-2 ring-white", className)}
    />
  );
}
