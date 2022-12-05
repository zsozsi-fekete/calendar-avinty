import { useContext } from "react";
import { DatePicker } from "../../components/DatePicker";
import { DateContext } from "../../providers/DateProvider";

export function CalendarHeader() {
  const { date, setDate } = useContext(DateContext);
  return (
    <div>
      <DatePicker value={date} handleChange={setDate} />
    </div>
  );
}
