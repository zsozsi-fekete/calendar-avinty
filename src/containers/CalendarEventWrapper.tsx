import dayjs, { Dayjs } from "dayjs";
import { useContext } from "react";
import { CalendarEvent } from "../components/CalendarEventsComponents";
import { EventsContext } from "../providers/EventsProvider";
import { Event } from "../shared/types";
import { getEndOffset, positiveOrZero } from "../utils/helpers";

export function CalendarEventWrapper({
  event,
  selectedDate,
}: {
  event: Event;
  selectedDate: Dayjs;
}) {
  const { setEvents } = useContext(EventsContext);
  const startDate = dayjs(event.start);
  const endDate = dayjs(event.end);
  const startOffset = startDate.diff(selectedDate, "minutes");
  const endOffset = getEndOffset(startDate, endDate, selectedDate);

  const title = `${startDate.format("HH:mm")} - ${endDate.format("HH:mm")}`;
  const description = event.title;
  const style: React.CSSProperties = {
    top: `${positiveOrZero(startOffset)}px`,
    height: `${endOffset}px`,
  };

  const onClick = () => setEvents([event]);

  return (
    <CalendarEvent
      title={title}
      description={description}
      style={style}
      onClick={onClick}
    />
  );
}

export function CalendarRestWrapper({ rest }: { rest: Event[] }) {
  const { setEvents } = useContext(EventsContext);
  const title = `+ ${rest.length}`;
  const style: React.CSSProperties = {
    flex: "unset",
    height: "20px",
    padding: "0px 2px",
  };

  const onClick = () => setEvents(rest);

  return (
    <CalendarEvent
      style={style}
      title={title}
      description=""
      onClick={onClick}
    />
  );
}
