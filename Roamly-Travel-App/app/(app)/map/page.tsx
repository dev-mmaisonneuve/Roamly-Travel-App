import { TravelMap } from "@/components/map/travel-map";
import { places } from "@/lib/mock/data";

export default function MapPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-coast">Map</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink">Saved places, spatially</h1>
      <p className="mt-3 max-w-2xl text-ink/60">
        MVP map view for saved places and trip-tagged locations. The current version is a designed placeholder for later Leaflet or MapLibre integration.
      </p>
      <div className="mt-8">
        <TravelMap places={places} />
      </div>
    </main>
  );
}
