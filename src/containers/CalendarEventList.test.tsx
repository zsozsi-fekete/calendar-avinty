import { render, screen } from "@testing-library/react";
import dayjs, { Dayjs } from "dayjs";
import { DateContext } from "../providers/DateProvider";
import { createMockProviderValue } from "../utils/testHelpers";
import { CalendarEventList } from "./CalendarEventList";
import testSeedData from "../utils/testSeedData.json";

jest.mock("../utils/seedData.json", () =>
  require("../utils/testSeedData.json")
);

describe("<CalendarEventList />", () => {
  describe("When date is 2022-12-08", () => {
    test("it renders 1 event container with 1 event", () => {
      render(
        <DateContext.Provider value={createMockProviderValue("2022-12-08")}>
          <CalendarEventList />
        </DateContext.Provider>
      );

      const containers = screen.getAllByTestId("calendar-event-container");
      expect(containers.length).toBe(1);

      const events = screen.getAllByTestId("calendar-event");
      expect(events.length).toBe(1);
    });

    test("it positions container in the correct position ((startOfEvent - startOfDay in minutes)px from top) and with (endOfEvent - startOfEvent in minutes)px height", () => {
      const event = testSeedData.events[3];
      const dateStart = dayjs(event.start);
      const dateEnd = dayjs(event.end);
      render(
        <DateContext.Provider value={createMockProviderValue("2022-12-08")}>
          <CalendarEventList />
        </DateContext.Provider>
      );

      const container = screen.getByTestId("calendar-event-container");
      const expectedTop = dateStart.diff("2022-12-08T00:00:00", "minutes");

      expect(container.style.top).toBe(`${expectedTop}px`);

      const ev = screen.getByTestId("calendar-event");
      const expectedHeight = dateEnd.diff(dateStart, "minutes");
      expect(ev.style.height).toBe(`${expectedHeight}px`);
    });
  });

  describe("When date is 2021-07-27", () => {
    test("it renders 2 event container and 3 events", () => {
      render(
        <DateContext.Provider value={createMockProviderValue("2021-07-27")}>
          <CalendarEventList />
        </DateContext.Provider>
      );

      const containers = screen.getAllByTestId("calendar-event-container");
      expect(containers.length).toBe(2);

      const events = screen.getAllByTestId("calendar-event");
      expect(events.length).toBe(3);
    });

    test("it positions the overflowing event's container to the top and the event has the correct height", () => {
      const event = testSeedData.events[0];
      const dateEnd = dayjs(event.end);
      render(
        <DateContext.Provider value={createMockProviderValue("2021-07-27")}>
          <CalendarEventList />
        </DateContext.Provider>
      );

      const containers = screen.getAllByTestId("calendar-event-container");

      expect(containers[0].style.top).toBe("0px");

      const evs = screen.getAllByTestId("calendar-event");
      const expectedHeight = dateEnd.diff(dateEnd.startOf("day"), "minutes");
      expect(evs[0].style.height).toBe(`${expectedHeight}px`);
    });
  });

  describe("When date is 2021-07-26", () => {
    test("it positions the overflowing event's container to the bottom and the event has the correct height", () => {
      const event = testSeedData.events[0];
      const dateStart = dayjs(event.start);
      const dateEnd = dayjs(event.end);
      render(
        <DateContext.Provider value={createMockProviderValue("2021-07-26")}>
          <CalendarEventList />
        </DateContext.Provider>
      );

      const containers = screen.getAllByTestId("calendar-event-container");
      const expectedTop = dateStart.diff("2021-07-26T00:00:00", "minutes");
      expect(containers[0].style.top).toBe(`${expectedTop}px`);

      const evs = screen.getAllByTestId("calendar-event");
      const expectedHeight = dayjs("2021-07-26T23:59:59").diff(
        dateStart,
        "minutes"
      );
      expect(evs[0].style.height).toBe(`${expectedHeight}px`);
    });
  });

  describe("When date is 2021-09-01", () => {
    test("it sets date to 2021-07-27 (closest, not empty day)", () => {
      const initValue = createMockProviderValue("2021-09-01");

      render(
        <DateContext.Provider value={initValue}>
          <CalendarEventList />
        </DateContext.Provider>
      );

      expect(initValue.setDate.mock.calls.length).toBe(1);
      expect(
        (initValue.setDate.mock.calls[0][0] as Dayjs).format("YYYY-MM-DD")
      ).toEqual("2021-07-27");
    });
  });
});
