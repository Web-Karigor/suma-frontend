import type { Metadata } from "next";
import { HotelsHero, HotelsView } from "@/components/hotels";

export const metadata: Metadata = {
  title: "Find Hotels",
};

export default function HotelsPage() {
  return (
    <main>
      <HotelsHero />
      <HotelsView />
    </main>
  );
}
