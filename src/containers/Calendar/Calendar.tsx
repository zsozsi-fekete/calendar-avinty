import CalendarHeader from "../CalendarHeader";
import styles from "./Calendar.module.css";

export function Calendar() {
  return (
    <div className={styles.Container}>
      <CalendarHeader />
    </div>
  );
}
