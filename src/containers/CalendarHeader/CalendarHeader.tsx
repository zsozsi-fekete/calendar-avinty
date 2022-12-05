import { useContext } from "react";
import { DatePicker } from "../../components/DatePicker";
import { DateContext } from "../../providers/DateProvider";
import styles from "./CalendarHeader.module.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export function CalendarHeader() {
  const { date, setDate } = useContext(DateContext);

  const changeDay = (direction: number) => () => {
    setDate((prevDate) => prevDate?.add(direction, "day") || null);
  };

  return (
    <div className={styles.Container}>
      <ArrowLeftIcon
        fontSize="large"
        className={styles.Arrow}
        onClick={changeDay(-1)}
      />
      <DatePicker value={date} handleChange={setDate} />
      <ArrowRightIcon
        fontSize="large"
        className={styles.Arrow}
        onClick={changeDay(1)}
      />
    </div>
  );
}
