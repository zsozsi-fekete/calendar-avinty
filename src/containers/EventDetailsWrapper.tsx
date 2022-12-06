import dayjs from "dayjs";
import {
  EventDetails,
  EventInfoContainer,
  EventWeatherDetails,
} from "../components/EventInfoComponents";

import { Event } from "../shared/types";

export function EventDetailsWrapper({ event }: { event: Event }) {
  const startDate = dayjs(event.start);
  const endDate = dayjs(event.end);

  return (
    <EventInfoContainer key={event.id}>
      <EventDetails
        title={event.title}
        time={`${startDate.format("HH:mm")} - ${endDate.format("HH:mm")}`}
      />
      <EventWeatherDetails />
    </EventInfoContainer>
  );
}
