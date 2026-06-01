import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, Input, Textarea } from "@/components/ui/input";

export default function OnboardingPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-coast">Onboarding</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink">Shape your traveler profile</h1>
      <p className="mt-3 text-ink/60">This helps the feed feel about real travel styles, not generic content.</p>
      <Card className="mt-8 p-5 sm:p-7">
        <form className="grid gap-6">
          <div className="flex items-center gap-4">
            <button type="button" className="flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-ink/20 bg-linen text-coast">
              <Camera />
            </button>
            <div>
              <p className="font-semibold text-ink">Profile photo</p>
              <p className="text-sm text-ink/50">Upload UI only for now.</p>
            </div>
          </div>
          <Field label="Username"><Input placeholder="mara.wanders" /></Field>
          <Field label="Bio"><Textarea placeholder="What kind of travel do you love?" /></Field>
          <Field label="Travel interests"><Input placeholder="Food, architecture, rail trips" /></Field>
          <Field label="Home city"><Input placeholder="San Francisco" /></Field>
          <Field label="Dream destinations"><Input placeholder="Kyoto, Madeira, Oaxaca" /></Field>
          <Button type="button">Complete profile</Button>
        </form>
      </Card>
    </main>
  );
}
