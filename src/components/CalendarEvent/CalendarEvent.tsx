import styles from "./CalendarEvent.module.css";

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
    <div className={styles.Container} style={style}>
      <span className={styles.Time}>{title}</span>
      <span className={styles.Title}>{description}</span>
    </div>
  );
}
