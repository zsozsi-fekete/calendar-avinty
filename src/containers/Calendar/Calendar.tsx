import Card from "../../components/Card";
import CalendarBody from "../CalendarBody";
import CalendarHeader from "../CalendarHeader";

export function Calendar() {
  return (
    <Card>
      <CalendarHeader />
      <CalendarBody />
    </Card>
  );
}
