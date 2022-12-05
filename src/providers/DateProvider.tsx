import dayjs, { Dayjs } from "dayjs";
import React, { createContext, ReactNode, useState } from "react";

export const DateContext = createContext(
  {} as {
    date: Dayjs | null;
    setDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>>;
  }
);

export const DateProvider = ({ children }: { children: ReactNode }) => {
  const [date, setDate] = useState<Dayjs | null>(dayjs("2021-07-26"));

  const value = {
    date,
    setDate,
  };

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};
