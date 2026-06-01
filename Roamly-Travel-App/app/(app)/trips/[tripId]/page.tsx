import Image from "next/image";
import Link from "next/link";
import { Bookmark, Heart, MessageCircle, UserPlus } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PlaceCard } from "@/components/places/place-card";
import { TripCard } from "@/components/trips/trip-card";
import { tripPosts } from "@/lib/mock/data";

export default function TripDetailPage({ params }: { params: { tripId: string } }) {
  const trip = tripPosts.find((item) => item.id === params.tripId) ?? tripPosts[0];
  const related = tripPosts.find((item) => item.id !== trip.id) ?? trip;

  return (
    <main className="pb-10">
      <section className="relative min-h-[64vh]">
        <Image src={trip.coverImageUrl} alt={trip.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 sm:px-8">
          <div className="mx-auto max-w-5xl text-white">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">{trip.destinationName}</p>
            <h1 className="mt-3 max-w-3xl text-5xl font-bold leading-tight tracking-tight">{trip.title}</h1>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href={`/users/${trip.creator.username}`} className="flex items-center gap-3 rounded-full bg-white/15 px-3 py-2 backdrop-blur">
                <Avatar src={trip.creator.avatarUrl} alt={trip.creator.fullName} />
                <span className="text-sm font-semibold">{trip.creator.fullName}</span>
              </Link>
              <Button variant="outline" className="border-white/30 bg-white/15 text-white hover:bg-white/25">
                <UserPlus size={16} /> Follow
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-5xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_300px]">
        <article>
          <div className="flex gap-3">
            <Button variant="outline"><Heart size={17} /> {trip.likes}</Button>
            <Button variant="outline"><MessageCircle size={17} /> {trip.comments}</Button>
            <Button variant="secondary"><Bookmark size={17} /> Save</Button>
          </div>
          <p className="mt-8 text-lg leading-9 text-ink/70">{trip.caption}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {trip.galleryImages.map((image) => (
              <div key={image} className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image src={image} alt={trip.title} fill className="object-cover" />
              </div>
            ))}
          </div>
          <div className="mt-10">
            <h2 className="text-2xl font-bold tracking-tight text-ink">Tagged places</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {trip.taggedPlaces.map((place) => <PlaceCard key={place.id} place={place} />)}
            </div>
          </div>
          <div className="mt-10 rounded-[1.75rem] border border-ink/10 bg-white p-5 shadow-sm">
            <h2 className="font-bold text-ink">Comments</h2>
            <div className="mt-4 rounded-2xl bg-mist p-4 text-sm text-ink/60">Flat comments will appear here after Supabase wiring.</div>
          </div>
        </article>
        <aside>
          <div className="sticky top-8">
            <h2 className="mb-4 text-lg font-bold text-ink">Related destination</h2>
            <TripCard trip={related} />
          </div>
        </aside>
      </section>
    </main>
  );
}
