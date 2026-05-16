const searchLocation = async (query) => {
  const baseUrl = 'https://geolocator.api.geo.ca/';
  // lang=en and keys are optional, but helpful for filtering results
  const url = `${baseUrl}?q=${encodeURIComponent(query)}&lang=en&keys=geonames,nominatim`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    return data; // This returns the flat JSON array of results
  } catch (error) {
    console.error('Geolocation error:', error);
    return [];
  }
};

export default searchLocation;
