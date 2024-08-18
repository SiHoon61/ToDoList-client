import React, { useState } from "react";
import {
  MainDiv,
  LeftDiv,
  RightDiv,
  TodoList,
  TodoInputWrapper,
  TodoInput,
  AddButton,
  ShowInputButton,
} from "./style";

import CalendarBody from "../../components/Calendar/Calendar";
import TodoItem from "../../components/TodoItem/TodoItem";
import axios from "axios";

//weather
import BeforeWeather from "../../components/BeforeWeather/BeforeWeather";
import TodayWeather from "../../components/TodayWeather/TodayWeather";
const Home = () => {
  const [todos, setTodos] = useState([
    { text: "독서", done: false },
    { text: "개발공부", done: false },
    { text: "빨래", done: true },
    { text: "장보기", done: true },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [showInput, setShowInput] = useState(false); // 입력창 표시 여부 관리

  const handleAddTodo = async () => {
    if (newTodo.trim() !== "") {
      try {
        // 서버로 새로운 할 일을 보내는 요청
        const response = await axios.post("https://example.com/api/todos", {
          text: newTodo,
          done: false,
        });
        setTodos([...todos, { text: newTodo, done: false }]);
        setNewTodo(""); // 입력창 초기화
        setShowInput(false); // 입력창 숨김
        console.log("서버 응답:", response.data);
      } catch (error) {
        console.error("서버 요청 중 오류 발생:", error);
      }
    }
  };

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const handleDateClick = async (date) => {
    try {
      // 서버로 날짜를 보내는 요청
      const response = await axios.post(
        "https://example.com/api/selected-date",
        {
          date: date.format("YYYY-MM-DD"),
        }
      );
      console.log("서버 응답:", response.data);
    } catch (error) {
      console.error("서버 요청 중 오류 발생:", error);
    }
  };

  return (
    <MainDiv>
      <LeftDiv>
        <CalendarBody onDateClick={handleDateClick} />
        <BeforeWeather />
        <TodayWeather />
      </LeftDiv>
      <RightDiv>
        <TodoList>
          <span>오늘의 할 일</span>
          {todos.map((todo, index) => (
            <TodoItem key={index} text={todo.text} done={todo.done} />
          ))}
          <ShowInputButton onClick={toggleInput}>
            {showInput ? "취소" : "할 일 추가"}
          </ShowInputButton>
          {showInput && (
            <TodoInputWrapper>
              <TodoInput
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="새로운 할 일을 입력하세요"
              />
              <AddButton onClick={handleAddTodo}>추가</AddButton>
            </TodoInputWrapper>
          )}
        </TodoList>
      </RightDiv>
    </MainDiv>
  );
};

export default Home;
