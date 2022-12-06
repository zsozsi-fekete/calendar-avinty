import {
  CalendarViewContainer,
  CalendarViewHeader,
} from "../components/CalendarViewComponents/CalendarViewComponents";
import Card from "../components/Card";
import CalendarBody from "../containers/CalendarBody";
import CalendarHeader from "../containers/CalendarHeader";
import { DateProvider } from "../providers/DateProvider";

export function CalendarView({
  apiKey,
  removeApiKey,
}: {
  apiKey: string;
  removeApiKey: () => void;
}) {
  return (
    <DateProvider>
      <CalendarViewContainer>
        <CalendarViewHeader apiKey={apiKey} removeApiKey={removeApiKey} />
        <Card>
          <CalendarHeader />
          <CalendarBody />
        </Card>
        <Card>WEATHER INFO</Card>
      </CalendarViewContainer>
    </DateProvider>
  );
}
