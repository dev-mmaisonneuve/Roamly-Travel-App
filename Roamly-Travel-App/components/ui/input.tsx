import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils/cn";

export function Input({ className, ...props }: ComponentPropsWithoutRef<"input">) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-2xl border border-ink/10 bg-white px-4 text-sm outline-none transition placeholder:text-ink/35 focus:border-coast focus:ring-4 focus:ring-coast/10",
        className
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: ComponentPropsWithoutRef<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full resize-y rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-ink/35 focus:border-coast focus:ring-4 focus:ring-coast/10",
        className
      )}
      {...props}
    />
  );
}

export function Field({
  label,
  hint,
  children
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-ink">{label}</span>
      {children}
      {hint ? <span className="text-xs leading-5 text-ink/50">{hint}</span> : null}
    </label>
  );
}
