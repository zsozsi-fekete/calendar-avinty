import styles from "./CalendarBody.module.css";
import seedData from "../../utils/seedData.json";
import { HOURS } from "../../utils/constants";
import { CalendarHour } from "../../components/CalendarHour";

export function CalendarBody() {
  console.log(seedData);
  return (
    <div className={styles.Container}>
      {HOURS.map((hour) => (
        <CalendarHour
          key={hour}
          hour={hour}
          styles={{ Hour: styles.Hour, HourMark: styles.HourMark }}
        />
      ))}
    </div>
  );
}
