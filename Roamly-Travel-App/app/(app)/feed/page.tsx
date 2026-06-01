import { TripCard } from "@/components/trips/trip-card";
import { ButtonLink } from "@/components/ui/button";
import { tripPosts } from "@/lib/mock/data";

export default function FeedPage() {
  return (
    <main className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_320px]">
      <section>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-coast">Home feed</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink">Trips with practical context</h1>
          </div>
          <ButtonLink href="/trips/new">Create trip</ButtonLink>
        </div>
        <div className="mt-8 grid gap-8">
          {tripPosts.map((trip) => <TripCard key={trip.id} trip={trip} large />)}
        </div>
      </section>
      <aside className="hidden lg:block">
        <div className="sticky top-8 rounded-[2rem] border border-ink/10 bg-white p-5 shadow-soft">
          <h2 className="font-bold text-ink">Planning cues</h2>
          <div className="mt-4 grid gap-3 text-sm text-ink/65">
            <p className="rounded-2xl bg-mist p-4">Save posts that include routes you can actually reuse.</p>
            <p className="rounded-2xl bg-mist p-4">Tagged places become itinerary building blocks.</p>
            <p className="rounded-2xl bg-mist p-4">Destination pages collect useful trip context by city.</p>
          </div>
        </div>
      </aside>
    </main>
  );
}
