import { CSSProperties, ReactNode } from "react";
import styles from "./CalendarEventsContainer.module.css";

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
