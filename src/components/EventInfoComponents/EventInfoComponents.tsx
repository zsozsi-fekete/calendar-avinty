import { ReactNode } from "react";
import styles from "./EventInfoComponents.module.css";

export function EventInfoContainer({ children }: { children: ReactNode }) {
  return <div className={styles.Container}>{children}</div>;
}

export function EventDetails({ title, time }: { title: string; time: string }) {
  return (
    <div className={styles.EventDetails}>
      <span className={styles.Time}>{time}</span>
      <span className={styles.Title}>{title}</span>
    </div>
  );
}

export function EventWeatherDetails() {
  return (
    <div className={styles.EventDetails}>
      <span className={styles.Time}>{}</span>
      <span className={styles.Title}>{}</span>
    </div>
  );
}
