import styles from "./CalendarBody.module.css";
import { HOURS } from "../../utils/constants";
import { CalendarHour } from "../../components/CalendarHour";
import { CalendarEventList } from "../CalendarEventList";

export function CalendarBody() {
  return (
    <div className={styles.Container}>
      {HOURS.map((hour) => (
        <CalendarHour
          key={hour}
          hour={hour}
          styles={{ Hour: styles.Hour, HourMark: styles.HourMark }}
        />
      ))}
      <CalendarEventList />
    </div>
  );
}
