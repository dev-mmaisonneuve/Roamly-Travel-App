import { ProfileHeader } from "@/components/profiles/profile-header";
import { TripCard } from "@/components/trips/trip-card";
import { EmptyState } from "@/components/ui/card";
import { profiles, tripPosts } from "@/lib/mock/data";

export default function UserProfilePage({ params }: { params: { username: string } }) {
  const profile = profiles.find((item) => item.username === params.username) ?? profiles[0];
  const trips = tripPosts.filter((trip) => trip.creator.id === profile.id);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <ProfileHeader profile={profile} />
      <div className="mt-8 flex gap-2 overflow-x-auto">
        {["Trips", "Saved trips", "Saved places"].map((tab) => (
          <button key={tab} className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink/65 shadow-sm first:bg-ink first:text-white">
            {tab}
          </button>
        ))}
      </div>
      <section className="mt-6 grid gap-6 sm:grid-cols-2">
        {trips.length ? trips.map((trip) => <TripCard key={trip.id} trip={trip} />) : (
          <EmptyState title="No trips yet" description="This profile has not published a trip story yet." />
        )}
      </section>
    </main>
  );
}
