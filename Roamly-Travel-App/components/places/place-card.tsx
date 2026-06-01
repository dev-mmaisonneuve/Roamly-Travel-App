import { Bookmark, MapPin } from "lucide-react";
import type { Place } from "@/types/app";

export function PlaceCard({ place }: { place: Place }) {
  return (
    <article className="rounded-[1.5rem] border border-ink/10 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-bold text-ink">{place.name}</h3>
          <p className="mt-1 flex items-center gap-1 text-sm text-ink/50">
            <MapPin size={14} /> {place.city}, {place.country}
          </p>
        </div>
        <button className="rounded-full bg-linen p-2 text-ink">
          <Bookmark size={17} />
        </button>
      </div>
      <p className="mt-4 text-sm leading-6 text-ink/65">{place.description}</p>
      {place.notes ? <p className="mt-4 rounded-2xl bg-mist p-3 text-sm text-ink/65">{place.notes}</p> : null}
    </article>
  );
}
