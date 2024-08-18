import React, { useState } from "react";
import dayjs from "dayjs";
import {
  CalendarDay,
  CalendarGrid,
  CalendarHeader,
  CalendarNavButton,
  CalendarWeekday,
  EmptyCalendarDay,
} from "./style";

const CalendarBody = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(null);

  const today = dayjs();

  const startDay = currentDate.startOf("month");
  const endDay = currentDate.endOf("month");

  const firstDayOfWeek = startDay.day();

  const days = [];
  let day = startDay;

  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(null);
  }

  while (day.isBefore(endDay, "day") || day.isSame(endDay, "day")) {
    days.push(day);
    day = day.add(1, "day");
  }

  return (
    <div>
      <CalendarHeader>
        <CalendarNavButton
          onClick={() => setCurrentDate(currentDate.subtract(1, "month"))}
        >
          &lt;
        </CalendarNavButton>
        <span>{currentDate.format("MM월")}</span>
        <CalendarNavButton
          onClick={() => setCurrentDate(currentDate.add(1, "month"))}
        >
          &gt;
        </CalendarNavButton>
      </CalendarHeader>
      <CalendarGrid>
        {["Sun", "Mon", "Thu", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <CalendarWeekday key={day}>{day}</CalendarWeekday>
        ))}
        {days.map((day, index) =>
          day ? (
            <CalendarDay
              key={day.format("YYYY-MM-DD")}
              isCurrentMonth={day.isSame(currentDate, "month")}
              isSelected={day.isSame(selectedDate, "day")}
              isSunday={day.day() === 0}
              isToday={day.isSame(today, "day")}
              onClick={() => setSelectedDate(day)}
            >
              <span>{day.format("D")}</span>{" "}
            </CalendarDay>
          ) : (
            <EmptyCalendarDay key={index} />
          )
        )}
      </CalendarGrid>
    </div>
  );
};

export default CalendarBody;
