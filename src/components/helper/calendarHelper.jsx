import {
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
  addDays,
  format,
} from "date-fns";
import { useState } from "react";

const getCurrentMonth = (date) => format(date, "MMMM");
const getCurrentYear = (date) => format(date, "yyyy");
const formatDate = (date) => format(date, "yyyy-MM-dd");

const getCalendarDates = () => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };
  const today = new Date();
  const startDate = startOfWeek(startOfMonth(today), { weekStartsOn: 1 });
  const endDate = endOfWeek(endOfMonth(today), { weekStartsOn: 1 });

  const { nowDay, setNowDay } = useState;

  const calendar = [];

  let currentDay = startDate;
  while (currentDay <= endDate) {
    calendar.push({
      date: formatDate(currentDay),
      monthName: getCurrentMonth(currentDay),
      year: getCurrentYear(currentDay),
    });
    currentDay = addDays(currentDay, 1);
  }

  return calendar;
};

export { formatDate, getCalendarDates };
