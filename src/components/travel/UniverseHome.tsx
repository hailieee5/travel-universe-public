"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import type { City } from "@/lib/travel-types";
import { useMotionPreference } from "@/lib/use-motion-preference";
import { UniverseScene } from "./universe/UniverseScene";

type Props = { cities: City[] };

export function UniverseHome({ cities }: Props) {
  const router = useRouter();
  const reduceMotion = useMotionPreference();
  const [leavingCity, setLeavingCity] = useState<City | null>(null);
  const navigationLocked = useRef(false);

  useEffect(() => {
    cities.forEach((city) => router.prefetch(`/city/${city.slug}`));
  }, [cities, router]);

  const openCity = useCallback((city: City) => {
    if (navigationLocked.current) return;
    navigationLocked.current = true;
    setLeavingCity(city);
  }, []);

  const completeTravel = useCallback((city: City) => {
    router.push(`/city/${city.slug}`);
  }, [router]);

  return <UniverseScene cities={cities} leavingCity={leavingCity} onCitySelect={openCity} onTravelComplete={completeTravel} reduceMotion={reduceMotion} />;
}
