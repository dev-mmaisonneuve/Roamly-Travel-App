import { Search } from "lucide-react";
import { SearchResults } from "@/components/search/search-results";
import { Input } from "@/components/ui/input";

export default function SearchPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-coast">Search</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink">Find travelers, trips, and destinations</h1>
      <div className="mt-8 flex items-center gap-3 rounded-[1.5rem] border border-ink/10 bg-white px-4 py-3 shadow-sm">
        <Search size={20} className="text-ink/40" />
        <Input className="h-10 border-0 p-0 text-base focus:ring-0" placeholder="Try Lisbon, Kyoto, rail trips, or a username" />
      </div>
      <div className="mt-8">
        <SearchResults />
      </div>
    </main>
  );
}
