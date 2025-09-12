import { getWeatherForecast } from "@/services/forecastApi";
import { useMutation } from "@tanstack/react-query";

const useForecast = (lat, long) => {
  const {mutate: getForecast, data, error, isPending } = useMutation({
    mutationFn: () => getWeatherForecast(lat, long),
  });

  return { getForecast ,data, error, isPending };
};

export default useForecast;