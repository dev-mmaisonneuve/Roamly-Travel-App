import Image from "next/image";
import { PlaceCard } from "@/components/places/place-card";
import { TripCard } from "@/components/trips/trip-card";
import { tripPosts } from "@/lib/mock/data";

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const trips = tripPosts.filter((trip) => trip.destinationSlug === params.slug);
  const destinationTrip = trips[0] ?? tripPosts[0];
  const relatedTrips = trips.length ? trips : tripPosts;
  const places = relatedTrips.flatMap((trip) => trip.taggedPlaces);

  return (
    <main>
      <section className="relative min-h-[52vh]">
        <Image src={destinationTrip.coverImageUrl} alt={destinationTrip.destinationName} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 sm:px-8">
          <div className="mx-auto max-w-6xl text-white">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">Destination</p>
            <h1 className="mt-3 text-5xl font-bold tracking-tight">{destinationTrip.destinationName}</h1>
            <p className="mt-4 max-w-2xl text-white/75">A living destination page built from traveler routes, tagged places, and useful trip context.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_360px]">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-ink">Related trips</h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-2">
            {relatedTrips.map((trip) => <TripCard key={trip.id} trip={trip} />)}
          </div>
        </div>
        <aside>
          <h2 className="text-2xl font-bold tracking-tight text-ink">Popular places</h2>
          <div className="mt-5 grid gap-4">
            {places.map((place) => <PlaceCard key={place.id} place={place} />)}
          </div>
        </aside>
      </section>
    </main>
  );
}
