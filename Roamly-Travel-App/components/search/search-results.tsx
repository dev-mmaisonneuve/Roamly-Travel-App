import Link from "next/link";
import { MapPin, Search, User } from "lucide-react";
import { tripPosts, profiles } from "@/lib/mock/data";

export function SearchResults() {
  return (
    <div className="grid gap-6">
      <section className="rounded-[1.75rem] border border-ink/10 bg-white p-5 shadow-sm">
        <h2 className="flex items-center gap-2 font-bold text-ink"><User size={18} /> Travelers</h2>
        <div className="mt-4 grid gap-3">
          {profiles.map((profile) => (
            <Link key={profile.id} href={`/users/${profile.username}`} className="rounded-2xl bg-mist p-4">
              <p className="font-semibold text-ink">{profile.fullName}</p>
              <p className="text-sm text-ink/55">@{profile.username} · {profile.homeCity}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="rounded-[1.75rem] border border-ink/10 bg-white p-5 shadow-sm">
        <h2 className="flex items-center gap-2 font-bold text-ink"><MapPin size={18} /> Destinations</h2>
        <div className="mt-4 grid gap-3">
          {tripPosts.map((trip) => (
            <Link key={trip.destinationSlug} href={`/destinations/${trip.destinationSlug}`} className="rounded-2xl bg-mist p-4">
              <p className="font-semibold text-ink">{trip.destinationName}</p>
              <p className="text-sm text-ink/55">Related trip: {trip.title}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="rounded-[1.75rem] border border-ink/10 bg-white p-5 shadow-sm">
        <h2 className="flex items-center gap-2 font-bold text-ink"><Search size={18} /> Posts</h2>
        <div className="mt-4 grid gap-3">
          {tripPosts.map((trip) => (
            <Link key={trip.id} href={`/trips/${trip.id}`} className="rounded-2xl bg-mist p-4">
              <p className="font-semibold text-ink">{trip.title}</p>
              <p className="text-sm text-ink/55">{trip.destinationName}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
