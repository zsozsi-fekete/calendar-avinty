import {
  CalendarViewContainer,
  CalendarViewHeader,
} from "../components/CalendarViewComponents";
import Card from "../components/Card";
import { CalendarBody } from "../containers/CalendarBody";
import { CalendarHeader } from "../containers/CalendarHeader";
import { EventInfo } from "../containers/EventInfo";
import { DateProvider } from "../providers/DateProvider";
import { EventsProvider } from "../providers/EventsProvider";

export function CalendarView({
  apiKey,
  removeApiKey,
}: {
  apiKey: string;
  removeApiKey: () => void;
}) {
  return (
    <DateProvider>
      <EventsProvider>
        <CalendarViewContainer>
          <CalendarViewHeader apiKey={apiKey} removeApiKey={removeApiKey} />
          <Card>
            <CalendarHeader />
            <CalendarBody />
          </Card>
          <Card>
            <EventInfo />
          </Card>
        </CalendarViewContainer>
      </EventsProvider>
    </DateProvider>
  );
}
