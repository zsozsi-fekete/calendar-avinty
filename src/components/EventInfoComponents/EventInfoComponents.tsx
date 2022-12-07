import { ReactNode } from "react";
import { WeatherData } from "../../shared/types";
import styles from "./EventInfoComponents.module.css";

export function EventInfoContainer({ children }: { children: ReactNode }) {
  return <div className={styles.Container}>{children}</div>;
}

export function EventDetails({
  title,
  time,
  location,
}: {
  title: string;
  time: string;
  location: string;
}) {
  return (
    <div className={styles.EventDetails}>
      <span className={styles.Time}>{time}</span>
      <span className={styles.Title}>{location}</span>
      <span className={styles.Title}>{title}</span>
    </div>
  );
}

export function EventWeatherDetails({
  weatherData,
}: {
  weatherData: WeatherData;
}) {
  return (
    <div className={styles.WeatherDetails}>
      <img
        className={styles.Image}
        alt="Weather icon"
        src={` http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
      />
      <span className={styles.Temp}>{`${Math.round(
        weatherData.main.temp
      )}°C`}</span>
      <span className={styles.Main}>{weatherData.weather[0].main}</span>
    </div>
  );
}

export function EventWeatherNotice({
  date,
  location,
  isTodaysWeatherData,
}: {
  date: string;
  location: string | undefined;
  isTodaysWeatherData: boolean;
}) {
  const classNames = isTodaysWeatherData
    ? `${styles.Notice} ${styles.Error}`
    : styles.Notice;
  return (
    <span className={classNames}>{`Weather in ${
      location || "your location"
    } on ${date}!`}</span>
  );
}

export function EventWeatherError({ error }: { error: Response }) {
  return (
    <div
      className={styles.Error}
    >{`Error ${error.status}: ${error.statusText}!`}</div>
  );
}
