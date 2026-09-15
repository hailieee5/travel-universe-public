import { UniverseHome } from "@/components/travel/UniverseHome";
import { getCities } from "@/lib/travel-data";

export default function Home() {
  return <UniverseHome cities={getCities()} />;
}
