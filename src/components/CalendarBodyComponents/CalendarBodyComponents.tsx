import { ReactNode } from "react";
import styles from "./CalendarBodyComponents.module.css";

export function CalendarBodyContainer({ children }: { children: ReactNode }) {
  return <div className={styles.Container}>{children}</div>;
}

export function CalendarHour({ hour }: { hour: string }) {
  return (
    <>
      <div className={styles.Hour}>{hour}</div>
      <div className={styles.HourMark}></div>
    </>
  );
}
