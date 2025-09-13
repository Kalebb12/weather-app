export const getWeatherForecast = async (lat, long) => {
  try {
    const api = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m`;
    const res = await fetch(api);
    const data = await res.json();

    console.log("forcast data",lat,long,data)
    return data;
  } catch (error) {
    console.error("API ERROR!!", error);
    throw new Error("Failed to fetch weather forecast");
  }
};

export const getLocation = async (name) => {
  try {
    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=4&language=en&format=json`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("API ERROR!!", error);
    throw new Error("Failed to fetch weather forecast");
  }
};
