import {
  AboutHero,
  AboutStory,
  AboutCEO,
  AboutProcess,
  AboutValues,
  AboutCTA,
} from "@/components/about";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden bg-white">
      <AboutHero />
      <AboutStory />
      <AboutCEO />
      <AboutProcess />
      <AboutValues />
      <AboutCTA />
    </main>
  );
}
