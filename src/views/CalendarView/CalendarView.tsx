import styles from "./CalendarView.module.css";

export function CalendarView({
  apiKey,
  removeApiKey,
}: {
  apiKey: string;
  removeApiKey: () => void;
}) {
  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        Calendar: {apiKey}
        <button onClick={removeApiKey}>Remove</button>
      </div>
      <div>CALENDAR COMPONENT</div>
      <div>WEATHER INFO</div>
    </div>
  );
}
