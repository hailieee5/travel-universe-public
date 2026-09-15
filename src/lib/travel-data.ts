import kyotoData from "../../data/kyoto.json";
import munichData from "../../data/munich.json";
import type { City, PhotoManifest, Place, TravelPhoto } from "./travel-types";

export type { City, PhotoManifest, Place, TravelPhoto } from "./travel-types";

const cities = [kyotoData, munichData] as unknown as City[];

export function getCities() {
  return cities;
}

export function getCityBySlug(slug: string) {
  return cities.find((city) => city.slug === slug);
}

export function getPlaceBySlug(citySlug: string, placeSlug: string) {
  return getCityBySlug(citySlug)?.places.find((place) => place.slug === placeSlug);
}

export function getPhotosForPlace(place: Place): TravelPhoto[] {
  const citySlug = getCitySlug(place.city);
  const fileNames = place.photoDateRanges?.flatMap((range) => range.fileNames) ?? [];

  return fileNames.map((fileName) => ({
    fileName,
    url: `/photos/${citySlug}/${place.slug}/${encodeURIComponent(fileName)}`,
    dateRange: place.photoDateRanges?.find((range) => range.fileNames.includes(fileName))?.label
  }));
}

export function getPhotoManifestForCity(city: City): PhotoManifest {
  const entries = city.places.map((place) => [place.id, getPhotosForPlace(place)] as const);
  return Object.fromEntries(entries);
}

export function getCityPhotoAudit() {
  return cities.map((city) => ({
    ...city,
    places: city.places.map((place) => ({ ...place, photos: getPhotosForPlace(place) }))
  }));
}

function getCitySlug(cityKey: City["city"]) {
  return cities.find((city) => city.city === cityKey)?.slug ?? cityKey.toLowerCase();
}
