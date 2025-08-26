import React, { createContext, useContext, useState } from "react";

// Helper function to get today's start timestamp (00:00:00)
const getTodayTimestamps = () => {
  const now = new Date();
  const startOfDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  ).getTime();
  const endOfDay = startOfDay + 24 * 60 * 60 * 1000 - 1; // end of today 23:59:59
  return { start: startOfDay, end: endOfDay };
};

type DateRangeContextType = {
  start: number;
  end: number;
  title: string;
  setRange: (start: number, end: number, title: string) => void;
};

const DateRangeContext = createContext<DateRangeContextType | undefined>(
  undefined
);

export const DateRangeProvider = ({ children }: { children: React.ReactNode }) => {
  const today = getTodayTimestamps();

  const [start, setStart] = useState<number>(today.start);
  const [end, setEnd] = useState<number>(today.end);
  const [title, setTitle] = useState<string>("Today");

  const setRange = (s: number, e: number, t: string) => {
    setStart(s);
    setEnd(e);
    setTitle(t);
  };

  return (
    <DateRangeContext.Provider value={{ start, end, title, setRange }}>
      {children}
    </DateRangeContext.Provider>
  );
};

export const useDateRange = () => {
  const ctx = useContext(DateRangeContext);
  if (!ctx) throw new Error("useDateRange must be used inside DateRangeProvider");
  return ctx;
};
