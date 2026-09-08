import { PackageList } from "@/components/packages/PackageList";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ type?: string }>;
};

export default async function PackagesByServicePage({
  params,
  searchParams,
}: Props) {
  const { slug } = await params;
  const { type } = await searchParams;

  return (
    <main>
      <PackageList serviceSlug={slug} packageCategory={type} />
    </main>
  );
}
