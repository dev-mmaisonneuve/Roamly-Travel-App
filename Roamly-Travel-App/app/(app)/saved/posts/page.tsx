import { TripCard } from "@/components/trips/trip-card";
import { tripPosts } from "@/lib/mock/data";

export default function SavedPostsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-coast">Saved trips</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink">Trips to revisit</h1>
      <section className="mt-8 grid gap-6 sm:grid-cols-2">
        {tripPosts.map((trip) => <TripCard key={trip.id} trip={trip} />)}
      </section>
    </main>
  );
}
