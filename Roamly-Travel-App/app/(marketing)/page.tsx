import Image from "next/image";
import { ArrowRight, Bookmark, MapPinned, Route, type LucideIcon } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { ButtonLink } from "@/components/ui/button";
import { tripPosts } from "@/lib/mock/data";

export default function LandingPage() {
  const featured = tripPosts[0];
  const pillars: { title: string; copy: string; Icon: LucideIcon }[] = [
    { title: "Journal", copy: "Create rich trip stories with places and context.", Icon: Route },
    { title: "Save", copy: "Bookmark posts and build a personal place library.", Icon: Bookmark },
    { title: "Discover", copy: "Browse destinations through real traveler routes.", Icon: MapPinned }
  ];

  return (
    <main className="travel-surface min-h-screen">
      <SiteHeader />
      <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-coast">Travel stories worth planning from</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[0.98] tracking-tight text-ink sm:text-7xl">
            Discover trips that become your next itinerary.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/65">
            Roamly turns travel posts into useful journeys with saved places, destination context, and simple planning tools.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/signup">
              Start your travel journal <ArrowRight size={17} />
            </ButtonLink>
            <ButtonLink href="/feed" variant="outline">Explore demo feed</ButtonLink>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {pillars.map(({ title, copy, Icon }) => (
              <div key={title} className="rounded-3xl border border-ink/10 bg-white/70 p-5 backdrop-blur">
                <Icon className="text-coast" size={22} />
                <h3 className="mt-4 font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/60">{copy}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-[2.5rem] border border-white/60 bg-white shadow-soft">
            <div className="relative aspect-[4/5]">
              <Image src={featured.coverImageUrl} alt={featured.title} fill priority className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-7 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">{featured.destinationName}</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight">{featured.title}</h2>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/75">{featured.caption}</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 left-4 right-4 rounded-[1.5rem] bg-white p-4 shadow-soft sm:left-auto sm:w-72">
            <p className="text-sm font-bold text-ink">Saved from this trip</p>
            <div className="mt-3 grid gap-2">
              {featured.taggedPlaces.map((place) => (
                <div key={place.id} className="rounded-2xl bg-mist px-3 py-2 text-sm text-ink/70">{place.name}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
