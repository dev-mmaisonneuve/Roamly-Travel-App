import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roamly - Travel Stories Worth Planning From",
  description: "A travel-first social app for trip stories, saved places, destination discovery, and simple itineraries."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
