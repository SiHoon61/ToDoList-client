import React, { useState, useEffect } from "react";
import {
  MainDiv,
  LeftDiv,
  RightDiv,
  CalendarDay,
  CalendarGrid,
  Weather,
} from "./style";
import dayjs from "dayjs";

const CalendarBody = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(null);

  const startDay = currentDate.startOf("month").startOf("week");
  const endDay = currentDate.endOf("month").endOf("week");

  const days = [];
  let day = startDay;

  while (day.isBefore(endDay, "day")) {
    days.push(day);
    day = day.add(1, "day");
  }

  return (
    <div>
      <div>
        <button
          onClick={() => setCurrentDate(currentDate.subtract(1, "month"))}
        >
          이전 달
        </button>
        <span>{currentDate.format("YYYY년 MM월")}</span>
        <button onClick={() => setCurrentDate(currentDate.add(1, "month"))}>
          다음 달
        </button>
      </div>
      <CalendarGrid>
        {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
          <div key={day}>{day}</div>
        ))}
        {days.map((day) => (
          <CalendarDay
            key={day.format("YYYY-MM-DD")}
            isCurrentMonth={day.isSame(currentDate, "month")}
            isSelected={day.isSame(selectedDate, "day")}
            isSunday={day.day() === 0}
            onClick={() => setSelectedDate(day)}
          >
            {day.format("D")}
          </CalendarDay>
        ))}
      </CalendarGrid>
    </div>
  );
};

const Home = () => {
  return (
    <MainDiv>
      <LeftDiv>
        <CalendarBody />
        <Weather>날씨입니다</Weather>
      </LeftDiv>
      <RightDiv>
        <div>
          <h3>오늘의 할 일</h3>
          <div>
            <input type="checkbox" />
            <label>독서</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>개발공부</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>빨래</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>장보기</label>
          </div>
        </div>
      </RightDiv>
    </MainDiv>
  );
};

export default Home;
