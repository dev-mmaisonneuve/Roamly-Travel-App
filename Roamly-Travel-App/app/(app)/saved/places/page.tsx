import { Search } from "lucide-react";
import { PlaceCard } from "@/components/places/place-card";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { places } from "@/lib/mock/data";

export default function SavedPlacesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-coast">Saved places</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink">Your travel building blocks</h1>
          <p className="mt-3 text-ink/60">Places saved from posts or added manually for future planning.</p>
        </div>
        <Button>Add place</Button>
      </div>
      <div className="mt-8 flex items-center gap-3 rounded-[1.5rem] border border-ink/10 bg-white px-4 py-3 shadow-sm">
        <Search size={18} className="text-ink/40" />
        <Input className="h-9 border-0 p-0 focus:ring-0" placeholder="Filter by city, country, or place" />
      </div>
      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        {places.length ? places.map((place) => <PlaceCard key={place.id} place={place} />) : (
          <EmptyState title="No saved places" description="Save places from trip posts or add your own notes here." />
        )}
      </section>
    </main>
  );
}
