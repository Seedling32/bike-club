'use client'

import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  routeCoordinates: [number, number][];
}

const Map = ({ routeCoordinates }: MapProps) => {
  // Provide a default center in case `routeCoordinates` is empty
  const defaultCenter: [number, number] = routeCoordinates[0] || [0, 0];

  return (
    <MapContainer center={defaultCenter} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polyline positions={routeCoordinates} pathOptions={{ color: 'blue' }} />
    </MapContainer>
  );
};

export default Map;


