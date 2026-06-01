import { Camera, ImagePlus, MapPin, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, Input, Textarea } from "@/components/ui/input";

export function TripForm() {
  return (
    <Card className="p-5 sm:p-7">
      <form className="grid gap-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Trip title">
            <Input placeholder="Four days across Lisbon's hills" />
          </Field>
          <Field label="Destination">
            <Input placeholder="Lisbon, Portugal" />
          </Field>
          <Field label="Start date">
            <Input type="date" />
          </Field>
          <Field label="End date">
            <Input type="date" />
          </Field>
        </div>
        <Field label="Cover image">
          <div className="flex min-h-48 items-center justify-center rounded-[1.5rem] border border-dashed border-ink/20 bg-linen/50 text-center">
            <div>
              <Camera className="mx-auto text-coast" />
              <p className="mt-3 text-sm font-semibold text-ink">Upload a cinematic trip cover</p>
              <p className="mt-1 text-xs text-ink/50">Supabase Storage will handle this later.</p>
            </div>
          </div>
        </Field>
        <Field label="Gallery images">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {["Add image", "Add image", "Add image", "Add image"].map((label, index) => (
              <button
                key={index}
                type="button"
                className="flex aspect-square items-center justify-center rounded-3xl border border-dashed border-ink/15 bg-white text-sm font-semibold text-ink/50"
              >
                <ImagePlus size={20} className="mr-2" /> {label}
              </button>
            ))}
          </div>
        </Field>
        <Field label="Story">
          <Textarea placeholder="Tell the route, pace, favorite moments, and practical context..." />
        </Field>
        <Field label="Tagged places">
          <div className="flex flex-wrap gap-2 rounded-2xl border border-ink/10 bg-white p-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-tide/20 px-3 py-2 text-sm font-medium text-ink">
              <MapPin size={14} /> Miradouro da Senhora do Monte
            </span>
            <button type="button" className="inline-flex items-center gap-1 rounded-full bg-linen px-3 py-2 text-sm font-semibold">
              <Plus size={14} /> Add place
            </button>
          </div>
        </Field>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button type="button" variant="outline">Save draft</Button>
          <Button type="button">Publish trip</Button>
        </div>
      </form>
    </Card>
  );
}
