import seedData from "../utils/seedData.json";
import { SeedData } from "../shared/types";
import { useContext, useEffect } from "react";
import { DateContext } from "../providers/DateProvider";
import { Event } from "../shared/types";
import {
  getCorrectStartDate,
  groupOverlappingEvents,
  positiveOrZero,
  sortEventsAscending,
  startsOrEndsOnDate,
} from "../utils/helpers";
import dayjs from "dayjs";
import {
  CalendarEventWrapper,
  CalendarRestWrapper,
} from "./CalendarEventWrapper";
import { CalendarEventsContainer } from "../components/CalendarEventsComponents";

export function CalendarEventList() {
  const { date, setDate } = useContext(DateContext);
  const { events } = seedData as SeedData;
  const groupedEvents = events
    .filter((ev) => startsOrEndsOnDate(date!, ev))
    .sort(sortEventsAscending)
    .reduce(groupOverlappingEvents, [] as Event[][]);

  useEffect(() => {
    if (groupedEvents.length === 0 && date) {
      const sortedEvents = events.sort((a, b) => {
        const diffA = Math.abs(date.diff(a.start, "days"));
        const diffB = Math.abs(date.diff(b.start, "days"));
        return diffA - diffB;
      });
      if (sortedEvents.length !== 0) {
        setDate(dayjs(sortedEvents[0].start).startOf("day"));
      }
    }
  }, []);

  return (
    <>
      {groupedEvents.map((group) => {
        const [first, second, third, ...rest] = group;

        const startDate = getCorrectStartDate(dayjs(first.start), date!);
        const startOffset = startDate.diff(date?.startOf("day"), "minutes");
        return (
          <CalendarEventsContainer
            key={first.id}
            style={{ top: `${positiveOrZero(startOffset)}px` }}
          >
            <CalendarEventWrapper event={first} selectedDate={startDate} />
            {second && (
              <CalendarEventWrapper event={second} selectedDate={startDate} />
            )}
            {third && (
              <CalendarEventWrapper event={third} selectedDate={startDate} />
            )}
            {rest.length > 0 && <CalendarRestWrapper rest={rest} />}
          </CalendarEventsContainer>
        );
      })}
    </>
  );
}
