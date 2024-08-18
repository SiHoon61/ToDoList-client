import React, { useState, useEffect } from "react";
import { MainDiv, LeftDiv, RightDiv, TodoList } from "./style";

import CalendarBody from "../../components/Calendar/Calendar";
import TodoItem from "../../components/TodoItem/TodoItem";

//weather
import Weather from '../../components/Weather/Weather';

const Home = () => {
  return (
    <MainDiv>
      <LeftDiv>
        <CalendarBody />
        <Weather />
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
