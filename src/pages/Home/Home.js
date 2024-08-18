import React, { useState, useEffect } from "react";
import { MainDiv, LeftDiv, RightDiv, Weather, TodoList } from "./style";

import CalendarBody from "../../components/Calendar/Calendar";
import TodoItem from "../../components/TodoItem/TodoItem";

const Home = () => {
  return (
    <MainDiv>
      <LeftDiv>
        <CalendarBody />
        <Weather>날씨입니다</Weather>
      </LeftDiv>
      <RightDiv>
        <TodoList>
          <span>오늘의 할 일</span>
          <TodoItem text="독서" done={false} />
          <TodoItem text="개발공부" done={false} />
          <TodoItem text="빨래" done={true} />
          <TodoItem text="장보기" done={true} />
        </TodoList>
      </RightDiv>
    </MainDiv>
  );
};

export default Home;
