export interface TrackPoint {
  lat: number;
  lng: number;
  elevation?: number; // Optional, include if the API returns it
  timestamp?: string; // Optional, include if the API returns it
}
