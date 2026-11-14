import { redirect } from "next/navigation";
import { CorporatePageContent } from "@/components/corporate-tour/CorporatePageContent";

type Props = { searchParams: Promise<{ package?: string }> };

export default async function CorporateTourPage({ searchParams }: Props) {
  const { package: packageSlug } = await searchParams;

  if (!packageSlug) {
    redirect("/packages/corporate-travel");
  }

  return (
    <main className="overflow-x-hidden bg-teal-950">
      <CorporatePageContent packageSlug={packageSlug} />
    </main>
  );
}
