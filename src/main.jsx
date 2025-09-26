import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "./components/ui/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import { FetchWeatherProvider } from "./context/fetchWeather";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <FetchWeatherProvider>
          <Provider>
            <App />
          </Provider>
        </FetchWeatherProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
