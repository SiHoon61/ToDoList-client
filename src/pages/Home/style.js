import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const LeftDiv = styled.div`
  width: 50%; /* 페이지의 60%를 차지하게 설정 */
  display: flex;
  flex-direction: column;
`;

export const RightDiv = styled.div`
  width: 45%; /* 페이지의 35%를 차지하게 설정 */
`;

export const TodoList = styled.div`
  width: 100%;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`;

export const CalendarDay = styled.div`
  padding: 10px;
  background-color: ${({ isCurrentMonth, isSelected }) =>
    isSelected ? "#219ebc" : isCurrentMonth ? "#fff" : "#f0f0f0"};
  color: ${({ isSunday }) => (isSunday ? "red" : "black")};
  text-align: center;
  cursor: pointer;
`;

export const Weather = styled.div``;
