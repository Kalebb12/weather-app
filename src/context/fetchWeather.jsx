import useForecast from "@/hooks/useForecast";
import { createContext, useContext } from "react";

const FetchWeatherContext = createContext(null)

export const FetchWeatherProvider = ({children}) => {
  const {isPending,data,error} = useForecast()
    return (
    <FetchWeatherContext.Provider value={{isPending,data,error}}>
      {children}
    </FetchWeatherContext.Provider>
  )
}

export function useFetch() {
  const context = useContext(FetchWeatherContext);
  if (!context) {
    throw new Error("useContext must be used within a contextProvider");
  }
  return context;
}