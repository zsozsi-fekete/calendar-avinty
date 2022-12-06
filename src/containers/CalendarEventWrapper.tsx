import dayjs, { Dayjs } from "dayjs";
import { CalendarEvent } from "../components/CalendarEventsComponents";
import { Event } from "../shared/types";
import { positiveOrZero } from "../utils/helpers";

export function CalendarEventWrapper({
  event,
  selectedDate,
}: {
  event: Event;
  selectedDate: Dayjs;
}) {
  const startDate = dayjs(event.start);
  const endDate = dayjs(event.end);
  const startOffset = startDate.diff(selectedDate, "minutes");
  const isSameDay = endDate.isSame(startDate, "day");
  const endOffset = isSameDay
    ? endDate.diff(startDate, "minutes")
    : startDate.endOf("day").diff(startDate, "minutes");

  const title = `${startDate.format("HH:mm")} - ${endDate.format("HH:mm")}`;
  const description = event.title;
  const style: React.CSSProperties = {
    top: `${positiveOrZero(startOffset)}px`,
    height: `${endOffset}px`,
  };

  return (
    <CalendarEvent title={title} description={description} style={style} />
  );
}
