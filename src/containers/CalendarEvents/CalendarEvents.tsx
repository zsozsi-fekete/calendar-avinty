import seedData from "../../utils/seedData.json";
import { SeedData } from "../../shared/types";
import { useContext, useEffect } from "react";
import { DateContext } from "../../providers/DateProvider";
import { Event } from "../../shared/types";
import {
  groupOverlappingEvents,
  positiveOrZero,
  sortEventsAscending,
  startsOrEndsOnDate,
} from "../../utils/helpers";
import styles from "./CalendarEvents.module.css";
import dayjs from "dayjs";
import { CalendarEventWrapper } from "../CalendarEventWrapper";

export function CalendarEvents() {
  const { date, setDate } = useContext(DateContext);
  const { events } = seedData as SeedData;
  const groupedEvents = events
    .filter((ev) => startsOrEndsOnDate(date!, ev))
    .sort(sortEventsAscending)
    .reduce(groupOverlappingEvents, [] as Event[][]);

  //   useEffect(() => {
  //     if (groupedEvents.length === 0 && date) {
  //       const sortedEvents = events.sort((a, b) => {
  //         const diffA = Math.abs(date.diff(a.start, "days"));
  //         const diffB = Math.abs(date.diff(b.start, "days"));
  //         return diffA - diffB;
  //       });
  //       if (sortedEvents.length !== 0) {
  //         setDate(dayjs(sortedEvents[0].start));
  //       }
  //     }
  //   }, [date]);

  console.log(groupedEvents);
  return (
    <>
      {groupedEvents.map((group) => {
        const [first, second, third, ...rest] = group;

        const startDate = dayjs(first.start);
        const startOffset = startDate.diff(date?.startOf("day"), "minutes");
        return (
          <div
            key={first.id}
            className={styles.Container}
            style={{ top: `${positiveOrZero(startOffset)}px` }}
          >
            <CalendarEventWrapper event={first} selectedDate={startDate} />
            {second && (
              <CalendarEventWrapper event={second} selectedDate={startDate} />
            )}
            {third && (
              <CalendarEventWrapper event={third} selectedDate={startDate} />
            )}
            {rest.length > 0 && (
              <div style={{ width: "10px" }}>{rest.length}</div>
            )}
          </div>
        );
      })}
    </>
  );
}
