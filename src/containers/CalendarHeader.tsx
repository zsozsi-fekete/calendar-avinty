import { useContext } from "react";
import { DateContext } from "../providers/DateProvider";
import {
  Arrow,
  CalendarHeaderContainer,
  DatePicker,
} from "../components/CalendarHeaderComponents";
import { Direction } from "../shared/types";

export function CalendarHeader() {
  const { date, setDate } = useContext(DateContext);

  const changeDay = (direction: number) => () => {
    setDate((prevDate) => prevDate?.add(direction, "day") || null);
  };

  return (
    <CalendarHeaderContainer>
      <Arrow direction={Direction.Left} onClick={changeDay(-1)} />
      <DatePicker value={date} handleChange={setDate} />
      <Arrow direction={Direction.Right} onClick={changeDay(1)} />
    </CalendarHeaderContainer>
  );
}
