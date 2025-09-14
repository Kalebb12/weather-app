import { getWeatherForecast } from "@/services/forecastApi";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router";

const useForecast = () => {
  const [coords, setCoords] = useState({ lat: null, long: null});
  const [searchParams,setSearchParams] = useSearchParams();
  

  // Function to request geolocation
  const refreshLocation = useCallback(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          });
        },
        (error) => {
          setCoords({ lat: 52.52437, long: 13.41053 }); // fallback
          console.log(error);
        }
      );
    } else {
      setCoords({ lat: 52.52437, long: 13.41053 }); // fallback
      console.log("No navigator.geolocation");
    }
  }, []);

  useEffect(() => {
    let lat = searchParams.get("lat");
    let long = searchParams.get("long");

    console.log("effect ran",lat,long)

    if (lat && long) {
      setCoords({ lat, long });
    } else {
      refreshLocation();
    }
  }, [refreshLocation, searchParams]);

  const { data, error, isPending } = useQuery({
    queryFn: () => getWeatherForecast(coords.lat, coords.long),
    queryKey: ["forecast",`coord_${coords.lat}_${coords.long}`],
    enabled: !!coords.lat && !!coords.long,
  });

  return { data, error, isPending };
};

export default useForecast;