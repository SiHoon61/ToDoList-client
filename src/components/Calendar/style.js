import styled from "styled-components";

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0;
  border: 1px solid #ccc;
`;

export const CalendarDay = styled.div`
  padding: 10px;
  height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${({ isCurrentMonth }) =>
    isCurrentMonth ? "#fff" : "#f0f0f0"};
  color: ${({ isSunday }) => (isSunday ? "red" : "black")};
  cursor: pointer;
  border: 1px solid #ccc;
  box-sizing: border-box;

  span {
    display: inline-block;
    ${({ isSelected }) =>
      isSelected &&
      `
      background-color: lightgray;
      padding: 2px 6px; 
      color: darkblue;
      border-radius: 4px;
      font-weight: bold; /* 선택된 날짜는 굵게 */
    `}

    ${({ isToday }) =>
      isToday &&
      `
      background-color: black; /* 오늘 날짜에만 검정색 배경 추가 */
      color: white; /* 검정색 배경에 대비되는 흰색 글자 */
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: bold; /* 오늘 날짜는 굵게 */
    `}

    ${({ isSelected, isToday }) =>
      isSelected &&
      isToday &&
      `
      border: 3px solid gray; /* 오늘 날짜가 선택된 경우에 추가적인 검정색 라인 */
    `}
  }
`;

export const EmptyCalendarDay = styled.div`
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  font-size: 30px;
  font-weight: bold;
`;

export const CalendarTitle = styled.div`
  flex-grow: 1;
  text-align: center;

  span {
    font-weight: bold;
    font-size: 24px;
  }
`;

export const CalendarNavButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0 10px;

  &:hover {
    color: #219ebc;
  }
`;

export const CalendarWeekday = styled.div`
  text-align: center;
  font-weight: bold; /* 요일 부분은 굵게 */
  padding: 10px 0;
  border: 1px solid #ccc; /* 요일 부분에도 테두리 추가 */
  box-sizing: border-box;
`;
