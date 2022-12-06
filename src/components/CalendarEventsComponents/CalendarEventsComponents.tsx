import { CSSProperties, ReactNode } from "react";
import styles from "./CalendarEventsComponents.module.css";

export function CalendarEventsContainer({
  children,
  style,
}: {
  children: ReactNode;
  style: CSSProperties;
}) {
  return (
    <div className={styles.Container} style={style}>
      {children}
    </div>
  );
}

export function CalendarEvent({
  title,
  description,
  style,
}: {
  title: string;
  description: string;
  style: React.CSSProperties;
}) {
  return (
    <div className={styles.Event} style={style}>
      <span className={styles.Time}>{title}</span>
      <span className={styles.Title}>{description}</span>
    </div>
  );
}
