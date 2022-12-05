import Calendar from "../../containers/Calendar";
import { DateProvider } from "../../providers/DateProvider";
import styles from "./CalendarView.module.css";

export function CalendarView({
  apiKey,
  removeApiKey,
}: {
  apiKey: string;
  removeApiKey: () => void;
}) {
  return (
    <DateProvider>
      <div className={styles.Container}>
        <div className={styles.Header}>
          {`Api Key: ${apiKey} `}
          <button className={styles.Button} onClick={removeApiKey}>
            Remove
          </button>
        </div>
        <Calendar />
        <div>WEATHER INFO</div>
      </div>
    </DateProvider>
  );
}
