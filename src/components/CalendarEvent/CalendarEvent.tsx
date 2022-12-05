import styles from "./CalendarEvent.module.css";

export function CalendarEvent({
  title,
  style,
}: {
  title: string;
  style: React.CSSProperties;
}) {
  return (
    <div className={styles.Container} style={style}>
      {title}
    </div>
  );
}
