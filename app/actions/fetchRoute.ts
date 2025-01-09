const fetchRoutes = async (rideId: number) => {
  const apiKey = process.env.RIDE_WITH_GPS_API_KEY;

  const response = await fetch(
    `https://ridewithgps.com/routes/${rideId}.json?apikey=${apiKey}?auth_token=94e68c62da8a2a66cd16a37af0bdede9`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch routes: ${response.statusText}`);
  }

  
  const data = await response.json();
  console.log(data);
  
  return data;
  
};

export default fetchRoutes;
