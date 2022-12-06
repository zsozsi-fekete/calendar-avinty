import { Event, WeatherForecast } from "../shared/types";

export const event1 = {
  id: 1,
  start: "2022-12-08T10:30:00",
  end: "2022-12-08T11:30:00",
} as Event;

export const event2 = {
  id: 2,
  start: "2022-12-08T12:00:00",
  end: "2022-12-08T13:30:00",
} as Event;

export const event3 = {
  id: 3,
  start: "2022-12-08T11:00:00",
  end: "2022-12-08T12:30:00",
} as Event;

export const weatherForecast1 = {
  dt_txt: "2022-12-08T10:30:00",
} as WeatherForecast;

export const weatherForecast2 = {
  dt_txt: "2022-12-08T13:00:00",
} as WeatherForecast;
