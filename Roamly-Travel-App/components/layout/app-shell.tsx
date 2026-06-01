import { Bookmark, Compass, Map, PlusCircle, Search, User } from "lucide-react";
import Link from "next/link";

const navItems = [
  { href: "/feed", label: "Feed", icon: Compass },
  { href: "/search", label: "Search", icon: Search },
  { href: "/trips/new", label: "Create", icon: PlusCircle },
  { href: "/saved/places", label: "Saved", icon: Bookmark },
  { href: "/map", label: "Map", icon: Map }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-mist">
      <aside className="fixed bottom-0 left-0 right-0 z-40 border-t border-ink/10 bg-white/90 backdrop-blur-xl md:bottom-auto md:right-auto md:top-0 md:h-screen md:w-24 md:border-r md:border-t-0">
        <div className="hidden h-20 items-center justify-center md:flex">
          <Link href="/feed" className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white">
            <Compass size={20} />
          </Link>
        </div>
        <nav className="mx-auto grid max-w-md grid-cols-5 md:mt-6 md:max-w-none md:grid-cols-1 md:gap-2 md:px-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex h-16 flex-col items-center justify-center gap-1 text-[11px] font-medium text-ink/60 transition hover:text-ink md:h-14 md:rounded-2xl md:hover:bg-ink/5"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <Link
          href="/users/mara.wanders"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full bg-linen p-3 text-ink md:block"
        >
          <User size={20} />
        </Link>
      </aside>
      <main className="pb-24 md:ml-24 md:pb-0">{children}</main>
    </div>
  );
}
