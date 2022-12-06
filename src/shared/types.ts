export interface Event {
  id: number;
  start: string;
  end: string;
  title: string;
  color: string;
  registered?: boolean;
  location?: string;
}

export interface SeedData {
  events: Event[];
}

export enum Direction {
  Left = "left",
  Right = "right",
}

export enum ApiTypes {
  Forecast = "forecast",
  Weather = "weather",
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherData {
  main: {
    temp: number;
  };
  weather: Weather[];
}

export interface WeatherForecast extends WeatherData {
  dt_txt: string;
}

export interface WeatherForecastData {
  list: WeatherForecast[];
}
