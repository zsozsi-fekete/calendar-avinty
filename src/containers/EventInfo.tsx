import { useContext } from "react";
import { EventsContext } from "../providers/EventsProvider";
import { EventDetailsWrapper } from "./EventDetailsWrapper";

export function EventInfo() {
  const { events } = useContext(EventsContext);
  return (
    <>
      {events.map((ev) => (
        <EventDetailsWrapper key={ev.id} event={ev} />
      ))}
    </>
  );
}
