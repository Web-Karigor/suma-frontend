import {
  AdPlacement,
  AppFeature,
  BestHotels,
  BuildMyTrip,
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
      <BuildMyTrip />
      <BestHotels />
      <AppFeature />
      <ValueProposition />
    </main>
  );
}
