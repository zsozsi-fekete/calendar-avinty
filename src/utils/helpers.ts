import dayjs, { Dayjs } from "dayjs";
import { ApiTypes, Event, WeatherForecast } from "../shared/types";

export function startsOrEndsOnDate(date: Dayjs, ev: Event) {
  return date?.isSame(ev.start, "day") || date?.isSame(ev.end, "day");
}

export function sortEventsAscending(a: Event, b: Event) {
  return dayjs(a.start).diff(b.start);
}

export function isOverlappingEvents(ev1: Event, ev2: Event) {
  const ev1Start = dayjs(ev1.start);
  const ev1End = dayjs(ev1.end);
  const ev2Start = dayjs(ev2.start);
  return (
    ev1Start.isSame(ev2Start) ||
    (ev2Start.isAfter(ev1Start) && ev2Start.isBefore(ev1End))
  );
}

export function groupOverlappingEvents(acc: Event[][], curr: Event) {
  if (acc.length === 0) {
    return [[curr]];
  }
  let pushed = false;
  for (let i = 0; i < acc.length; i++) {
    const group = acc[i];
    if (
      group
        .slice(0, 3)
        .some((groupItem) => isOverlappingEvents(groupItem, curr))
    ) {
      acc[i].push(curr);
      pushed = true;
      break;
    }
  }
  if (!pushed) {
    acc.push([curr]);
  }
  return acc;
}

export function positiveOrZero(num: number) {
  return num < 0 ? 0 : num;
}

export function isInTheNextFiveDays(startDate: string) {
  const today = dayjs();
  return today.isBefore(startDate) && dayjs(startDate).diff(today, "days") < 5;
}

export function getApiType(startDate: string) {
  if (isInTheNextFiveDays(startDate)) return ApiTypes.Forecast;
  return ApiTypes.Weather;
}

export function getWeatherData(list: WeatherForecast[], startDate: string) {
  const eventDay = dayjs(startDate);
  return list?.reduce((acc, curr, i) => {
    if (i === 0) return curr;
    if (
      Math.abs(eventDay.diff(curr.dt_txt)) < Math.abs(eventDay.diff(acc.dt_txt))
    )
      return curr;
    return acc;
  }, {} as WeatherForecast);
}

export function getEndOffset(
  startDate: Dayjs,
  endDate: Dayjs,
  currentDate: Dayjs
) {
  if (endDate.isSame(startDate, "day")) {
    return endDate.diff(startDate, "minutes");
  }
  if (startDate.isSame(currentDate, "day")) {
    return startDate.endOf("day").diff(startDate, "minutes");
  }
  return endDate.diff(currentDate.startOf("day"), "minutes");
}

export function getCorrectStartDate(startDate: Dayjs, currentDate: Dayjs) {
  if (currentDate.isSame(startDate, "day")) return startDate;
  return currentDate;
}
