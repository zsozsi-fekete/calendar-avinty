import {
  event1,
  event2,
  event3,
  weatherForecast1,
  weatherForecast2,
} from "./dummyTestData";
import { getWeatherData, groupOverlappingEvents } from "./helpers";

describe("Group overlapping events", () => {
  describe("When acc array is empty", () => {
    test("it puts current into a new group and into acc", () => {
      const result = groupOverlappingEvents([], event1);

      expect(result.length).toBe(1);

      const [group] = result;
      expect(group.length).toBe(1);

      const [first] = group;
      expect(first).toEqual(event1);
    });
  });

  describe("When acc array has 1 group with 1 event and curr is not overlapping", () => {
    test("it puts current into a second group", () => {
      const result = groupOverlappingEvents([[event1]], event2);

      expect(result.length).toBe(2);

      const [_firstGroup, secondGroup] = result;
      expect(secondGroup.length).toBe(1);

      const [first] = secondGroup;
      expect(first).toEqual(event2);
    });
  });

  describe("When acc array has 1 group with 1 event and curr is overlapping", () => {
    test("it puts current into the overlapping group", () => {
      const result = groupOverlappingEvents([[event1]], event3);

      expect(result.length).toBe(1);

      const [firstGroup] = result;
      expect(firstGroup.length).toBe(2);

      const [first, second] = firstGroup;
      expect(first).toEqual(event1);
      expect(second).toEqual(event3);
    });
  });

  describe("When acc array has 1 group with 4 overlapping events and curr is overlapping with the 4th one", () => {
    test("it puts current into a new group", () => {
      // event3 overlaps with event2
      const result = groupOverlappingEvents(
        [[event1, event1, event1, event3]],
        event2
      );

      expect(result.length).toBe(2);

      const [firstGroup, secondGroup] = result;
      expect(firstGroup.length).toBe(4);
      expect(secondGroup.length).toBe(1);

      const [first] = secondGroup;
      expect(first).toEqual(event2);
    });
  });

  describe("When acc array has 1 group with 4 overlapping events and curr is overlapping with one of the first 3", () => {
    test("it puts current into the first group", () => {
      // event3 overlaps with event2
      const result = groupOverlappingEvents(
        [[event1, event1, event3, event3]],
        event2
      );

      expect(result.length).toBe(1);

      const [firstGroup] = result;
      expect(firstGroup.length).toBe(5);

      const fifth = firstGroup[4];
      expect(fifth).toEqual(event2);
    });
  });
});

describe("Get weather data", () => {
  describe("When list is empty", () => {
    test("it returns empty object", () => {
      const result = getWeatherData([], "2022-12-08T12:00:00");

      expect(result).toEqual({});
    });
  });

  describe("When list has one data", () => {
    test("it returns that data", () => {
      const result = getWeatherData([weatherForecast1], "2022-12-08T12:00:00");

      expect(result).toEqual(weatherForecast1);
    });
  });

  describe("When list has more data", () => {
    test("it returns data which is closest to startDate", () => {
      const result = getWeatherData(
        [weatherForecast1, weatherForecast2],
        "2022-12-08T12:00:00"
      );

      expect(result).toEqual(weatherForecast2);
    });
  });
});
