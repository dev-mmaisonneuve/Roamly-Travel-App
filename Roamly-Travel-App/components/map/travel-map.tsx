import { MapPin } from "lucide-react";
import type { Place } from "@/types/app";

export function TravelMap({ places }: { places: Place[] }) {
  return (
    <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] border border-ink/10 bg-[#dce7df] shadow-soft">
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(23,32,28,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(23,32,28,.08)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute left-[18%] top-[18%] h-40 w-40 rounded-full border border-coast/20 bg-tide/30" />
      <div className="absolute bottom-[12%] right-[12%] h-56 w-56 rounded-full border border-clay/20 bg-sand/40" />
      {places.map((place, index) => (
        <div
          key={place.id}
          className="absolute rounded-2xl bg-white p-3 shadow-soft"
          style={{
            left: `${22 + index * 18}%`,
            top: `${24 + (index % 2) * 26}%`
          }}
        >
          <p className="flex items-center gap-2 text-sm font-bold text-ink">
            <MapPin size={16} className="text-clay" /> {place.name}
          </p>
          <p className="mt-1 text-xs text-ink/50">
            {place.city}, {place.country}
          </p>
        </div>
      ))}
      <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 p-4 backdrop-blur">
        <p className="text-sm font-bold text-ink">MVP map preview</p>
        <p className="mt-1 max-w-xs text-xs leading-5 text-ink/55">
          This component is ready to be replaced by Leaflet or MapLibre when map keys are configured.
        </p>
      </div>
    </div>
  );
}
