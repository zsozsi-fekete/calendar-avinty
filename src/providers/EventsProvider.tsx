import React, { createContext, ReactNode, useState } from "react";
import { Event } from "../shared/types";

export const EventsContext = createContext(
  {} as {
    events: Event[];
    setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
  }
);

export const EventsProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<Event[]>([]);

  const value = {
    events,
    setEvents,
  };

  return (
    <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
  );
};
