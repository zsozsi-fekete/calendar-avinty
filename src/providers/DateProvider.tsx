import dayjs, { Dayjs } from "dayjs";
import React, { createContext, useState } from "react";

export const DateContext = createContext(
  {} as {
    date: Dayjs | null;
    setDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>>;
  }
);

export const DateProvider = ({ children }: { children: JSX.Element }) => {
  const [date, setDate] = useState<Dayjs | null>(dayjs());

  const value = {
    date,
    setDate,
  };

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};
