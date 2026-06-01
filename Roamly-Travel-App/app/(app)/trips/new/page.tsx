import { TripForm } from "@/components/trips/trip-form";

export default function NewTripPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-coast">Create trip</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink">Publish a journey people can plan from</h1>
      <p className="mt-3 max-w-2xl text-ink/60">
        Pair the story with dates, places, and images so it works as inspiration and practical context.
      </p>
      <div className="mt-8">
        <TripForm />
      </div>
    </main>
  );
}
