import { Compass } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/40 bg-mist/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
            <Compass size={18} />
          </span>
          Roamly
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink/70 md:flex">
          <a href="#discover">Discover</a>
          <a href="#plan">Plan</a>
          <a href="#share">Share</a>
        </nav>
        <div className="flex items-center gap-2">
          <ButtonLink href="/login" variant="ghost" className="hidden sm:inline-flex">
            Log in
          </ButtonLink>
          <ButtonLink href="/signup">Start free</ButtonLink>
        </div>
      </div>
    </header>
  );
}
