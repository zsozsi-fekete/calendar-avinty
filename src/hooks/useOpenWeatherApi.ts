import { useEffect } from "react";
import { WeatherData, WeatherForecastData } from "../shared/types";
import { OPEN_WEATHER_MAP_API_KEY } from "../utils/constants";
import { getApiType } from "../utils/helpers";
import { useFetch } from "./useFetch";
import { useLocalStorage } from "./useLocalStorage";

export function useOpenWeatherApi(startDate: string, location?: string) {
  const [storedValue] = useLocalStorage(OPEN_WEATHER_MAP_API_KEY);
  const { loading, data, error, abort, startFetch } = useFetch<
    WeatherData | WeatherForecastData
  >();
  const apiType = getApiType(startDate);

  const onSuccess = (pos: GeolocationPosition) => {
    const lat = pos.coords.latitude.toString();
    const lon = pos.coords.longitude.toString();
    let url = `https://api.openweathermap.org/data/2.5/${apiType}?lat=${lat}&lon=${lon}&appid=${storedValue}&units=metric`;
    console.log(url);

    startFetch(url);
  };

  const onError = (err: GeolocationPositionError) => console.log(err);

  useEffect(() => {
    if (!storedValue) return;
    if (location) {
      let url = `https://api.openweathermap.org/data/2.5/${apiType}?q=${location}&appid=${storedValue}&units=metric`;
      console.log(url);
      startFetch(url);
    } else {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    return () => {
      abort();
    };
  }, [storedValue]);

  return {
    loading,
    data,
    error,
  };
}
