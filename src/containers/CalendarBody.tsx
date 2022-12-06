import { HOURS } from "../utils/constants";
import { CalendarEventList } from "./CalendarEventList";
import {
  CalendarBodyContainer,
  CalendarHour,
} from "../components/CalendarBodyComponents";

export function CalendarBody() {
  return (
    <CalendarBodyContainer>
      {HOURS.map((hour) => (
        <CalendarHour key={hour} hour={hour} />
      ))}
      <CalendarEventList />
    </CalendarBodyContainer>
  );
}
