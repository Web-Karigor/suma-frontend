"use client";

import { useAboutUsQuery } from "@/hooks/queries/useAboutUsQuery";
import {
  AboutHero,
  AboutStory,
  AboutCEO,
  AboutProcess,
  AboutValues,
  AboutCTA,
} from "@/components/about";

export function AboutPageContent() {
  const { data, isLoading } = useAboutUsQuery();

  if (isLoading || !data) return null;

  return (
    <>
      <AboutHero title={data.title} gallery={data.gallery} />
      {data.stories.length > 0 && (
        <AboutStory title={data.storyTitle} stories={data.stories} />
      )}
      {data.founder && <AboutCEO founder={data.founder} />}
      {data.processSteps.length > 0 && (
        <AboutProcess steps={data.processSteps} />
      )}
      {data.values.length > 0 && <AboutValues values={data.values} />}
      <AboutCTA />
    </>
  );
}
