import Link from "next/link";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-mist px-4 py-10">
      <Card className="w-full max-w-md p-7">
        <Link href="/" className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white">
          <Compass />
        </Link>
        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-ink">Welcome back</h1>
        <p className="mt-2 text-center text-sm text-ink/55">Log in to continue saving, planning, and publishing trips.</p>
        <form className="mt-7 grid gap-4">
          <Field label="Email"><Input type="email" placeholder="you@example.com" /></Field>
          <Field label="Password"><Input type="password" placeholder="••••••••" /></Field>
          <Button type="button" className="mt-2">Log in</Button>
        </form>
        <div className="mt-5 flex justify-between text-sm font-medium">
          <Link href="/forgot-password" className="text-coast">Forgot password?</Link>
          <Link href="/signup" className="text-ink/60">Create account</Link>
        </div>
      </Card>
    </main>
  );
}
