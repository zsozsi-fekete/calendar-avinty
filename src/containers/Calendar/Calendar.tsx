import { useContext } from "react";
import { DateContext } from "../../providers/DateProvider";
import CalendarHeader from "../CalendarHeader";

export function Calendar() {
  const { date } = useContext(DateContext);

  return (
    <div>
      <div>{`Selected Date: ${date}`}</div>
      <CalendarHeader />
    </div>
  );
}
