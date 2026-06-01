import { Clock, MapPin, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Itinerary } from "@/types/app";

export function ItineraryBoard({ itinerary }: { itinerary: Itinerary }) {
  return (
    <div className="grid gap-5">
      {itinerary.days.map((day) => (
        <section key={day.id} className="rounded-[1.75rem] border border-ink/10 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-2 border-b border-ink/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-coast">Day {day.dayNumber}</p>
              <h2 className="mt-1 text-xl font-bold text-ink">{day.title}</h2>
            </div>
            <p className="text-sm font-medium text-ink/50">{day.date}</p>
          </div>
          <p className="mt-4 text-sm leading-6 text-ink/60">{day.notes}</p>
          <div className="mt-5 grid gap-3">
            {day.items.map((item) => (
              <div key={item.id} className="rounded-2xl bg-mist p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-ink/60">{item.description}</p>
                    {item.place ? (
                      <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-coast">
                        <MapPin size={14} /> {item.place.name}
                      </p>
                    ) : null}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink/60">
                    <Clock size={13} /> {item.timeLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="mt-4">
            <Plus size={16} /> Add activity
          </Button>
        </section>
      ))}
    </div>
  );
}
