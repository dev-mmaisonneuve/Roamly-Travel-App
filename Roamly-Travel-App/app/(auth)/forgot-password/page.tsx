import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, Input } from "@/components/ui/input";

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-mist px-4 py-10">
      <Card className="w-full max-w-md p-7">
        <h1 className="text-3xl font-bold tracking-tight text-ink">Reset password</h1>
        <p className="mt-2 text-sm leading-6 text-ink/55">Enter your email and we will send a secure reset link.</p>
        <form className="mt-7 grid gap-4">
          <Field label="Email"><Input type="email" placeholder="you@example.com" /></Field>
          <Button type="button">Send reset link</Button>
        </form>
        <Link href="/login" className="mt-5 inline-block text-sm font-semibold text-coast">Back to login</Link>
      </Card>
    </main>
  );
}
