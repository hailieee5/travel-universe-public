export type CityKey = "Kyoto" | "Munich";

export type Coordinate = number | null;

export type PhotoDateRange = {
  label: string;
  fileNames: string[];
};

export type Place = {
  id: string;
  city: CityKey;
  name: string;
  displayName?: string;
  slug: string;
  latitude: Coordinate;
  longitude: Coordinate;
  mapX: Coordinate;
  mapY: Coordinate;
  stickerAsset: string | null;
  stickerScale?: number;
  stickerOffsetX?: number;
  stickerOffsetY?: number;
  photoFolder: string;
  photoCount: number;
  photoDateRanges?: PhotoDateRange[];
  mapVisible: boolean;
  locationStatus?: "needs-confirmation" | "visual-position";
  locationNote?: string;
};

export type City = {
  id: string;
  city: CityKey;
  name: string;
  displayName: string;
  slug: string;
  country: string;
  mapAsset: string;
  mapAspectRatio: number;
  stickerSheetAsset: string;
  mapContainsLandmarkArt: boolean;
  places: Place[];
};

export type TravelPhoto = {
  fileName: string;
  url: string;
  dateRange?: string;
};

export type PhotoManifest = Record<string, TravelPhoto[]>;
