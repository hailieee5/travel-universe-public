import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityMapExperience } from "@/components/travel/CityMapExperience";
import { getCityBySlug, getPhotoManifestForCity } from "@/lib/travel-data";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type PageProps = { params: Promise<{ city: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  return { title: city ? `${city.displayName} — Travel Universe` : "City not found — Travel Universe" };
}

export default async function CityPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  const photoManifest = await getPhotoManifestForCity(city);
  return <CityMapExperience city={city} photoManifest={photoManifest} />;
}
