import { CalendarDays, Plus } from "lucide-react";
import { ItineraryBoard } from "@/components/itineraries/itinerary-board";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, Input } from "@/components/ui/input";
import { itinerary } from "@/lib/mock/data";

export default function ItinerariesPage() {
  return (
    <main className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[340px_1fr]">
      <aside>
        <Card className="p-5">
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-coast">
            <CalendarDays size={16} /> Itinerary
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink">{itinerary.title}</h1>
          <p className="mt-2 text-sm text-ink/55">{itinerary.destinationName}</p>
          <form className="mt-6 grid gap-4">
            <Field label="Title"><Input defaultValue={itinerary.title} /></Field>
            <Field label="Destination"><Input defaultValue={itinerary.destinationName} /></Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Start"><Input type="date" defaultValue={itinerary.startDate} /></Field>
              <Field label="End"><Input type="date" defaultValue={itinerary.endDate} /></Field>
            </div>
            <Button type="button" variant="secondary"><Plus size={16} /> Add day</Button>
          </form>
        </Card>
      </aside>
      <section>
        <ItineraryBoard itinerary={itinerary} />
      </section>
    </main>
  );
}
