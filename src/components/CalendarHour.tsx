export function CalendarHour({
  hour,
  styles,
}: {
  hour: string;
  styles: { Hour: string; HourMark: string };
}) {
  return (
    <>
      <div className={styles.Hour}>{hour}</div>
      <div className={styles.HourMark}></div>
    </>
  );
}
