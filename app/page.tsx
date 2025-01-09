import { TrackPoint } from '@/types/TrackPoint';
import Map from '../components/Map';
import fetchRoutes from '@/app/actions/fetchRoute';

export default async function Home() {
  try {
    // Fetch data on the server side
    const routeData = await fetchRoutes(36534661); // Replace with actual user ID
    const routeCoordinates = routeData.route.track_points[0];

    const coord: TrackPoint = {
      lat: routeCoordinates.x,
      lng: routeCoordinates.y
    }
    
    const array: [number, number] [] = [Object.values(coord)];

    

    
    

    console.log(coord.lat);
    

    // Render the map component
    return (
      <div>
        <h1>Ride with GPS Routes</h1>
        <Map routeCoordinates={array}/>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>Error loading route data.</div>;
  }
}

