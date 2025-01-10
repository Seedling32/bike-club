'use client';

import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  routeCoordinates: [number, number][];
}

const Map: React.FC<MapProps> = ({ routeCoordinates }) => {
  return (
    <MapContainer
      center={routeCoordinates[0]} // Center map on the first point
      zoom={12}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Polyline positions={routeCoordinates} color="red" />
    </MapContainer>
  );
};

export default Map;
