import {
  AdPlacement,
  AppFeature,
  BestHotels,
  ExclusiveOffers,
  HeroSection,
  PopularDestinations,
  TopAirlines,
  TopPackages,
  ValueProposition,
} from "@/components/home";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExclusiveOffers />
      <TopPackages />
      <AdPlacement />
      <TopAirlines />
      <PopularDestinations />
      <BestHotels />
      <AppFeature />
      <ValueProposition />
    </main>
  );
}
