import Map from '../components/Map';
import fetchRoutes from '@/app/actions/fetchRoute';

export default async function Home() {
  try {
    // Fetch data on the server side
    const routeData = await fetchRoutes(138); // Replace with actual route.id

    // Extract track_points and convert to [latitude, longitude] format
    const routeCoordinates = routeData.route.track_points.map((point: { x: number; y: number }) => [
      point.y, // Latitude
      point.x, // Longitude
    ]);

    // Render the map component
    return (
      <div>
        <h1>Ride with GPS Routes</h1>
        <Map routeCoordinates={routeCoordinates} />
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>Error loading route data.</div>;
  }
}
