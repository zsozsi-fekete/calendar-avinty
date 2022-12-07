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
    <div
      data-testid="calendar-event-container"
      className={styles.Container}
      style={style}
    >
      {children}
    </div>
  );
}

export function CalendarEvent({
  title,
  description,
  style,
  onClick,
}: {
  title: string;
  description: string;
  style: React.CSSProperties;
  onClick: () => void;
}) {
  return (
    <div
      data-testid="calendar-event"
      className={styles.Event}
      style={style}
      onClick={onClick}
    >
      <span className={styles.Time}>{title}</span>
      <span className={styles.Title}>{description}</span>
    </div>
  );
}
