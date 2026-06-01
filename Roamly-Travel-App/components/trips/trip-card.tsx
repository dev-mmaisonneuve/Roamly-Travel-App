import Image from "next/image";
import Link from "next/link";
import { Bookmark, Heart, MessageCircle, MapPin } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import type { TripPost } from "@/types/app";

export function TripCard({ trip, large = false }: { trip: TripPost; large?: boolean }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-soft">
      <Link href={`/trips/${trip.id}`} className="group block">
        <div className={large ? "relative aspect-[4/3]" : "relative aspect-[5/4]"}>
          <Image
            src={trip.coverImageUrl}
            alt={trip.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(min-width: 768px) 520px, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
              <MapPin size={14} />
              {trip.destinationName}
            </div>
            <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight">{trip.title}</h2>
          </div>
        </div>
      </Link>
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <Link href={`/users/${trip.creator.username}`} className="flex items-center gap-3">
            <Avatar src={trip.creator.avatarUrl} alt={trip.creator.fullName} />
            <div>
              <p className="text-sm font-semibold text-ink">{trip.creator.fullName}</p>
              <p className="text-xs text-ink/50">{trip.season}</p>
            </div>
          </Link>
          <span className="rounded-full bg-linen px-3 py-1 text-xs font-semibold text-ink/70">
            {trip.saves} saves
          </span>
        </div>
        <p className="line-clamp-2 text-sm leading-6 text-ink/65">{trip.caption}</p>
        <div className="flex items-center justify-between border-t border-ink/10 pt-4 text-ink/65">
          <button className="flex items-center gap-2 text-sm font-medium hover:text-clay">
            <Heart size={18} /> {trip.likes}
          </button>
          <button className="flex items-center gap-2 text-sm font-medium hover:text-coast">
            <MessageCircle size={18} /> {trip.comments}
          </button>
          <button className="flex items-center gap-2 text-sm font-medium hover:text-ink">
            <Bookmark size={18} /> Save
          </button>
        </div>
      </div>
    </article>
  );
}
