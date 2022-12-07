import dayjs from "dayjs";

export const createMockProviderValue = (date: string) => ({
  date: dayjs(date),
  setDate: jest.fn((date) => date),
});
