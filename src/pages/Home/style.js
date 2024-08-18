import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
`;

export const LeftDiv = styled.div`
  width: 60%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin-left: 60px;
`;

export const RightDiv = styled.div`
  width: 45%;
  justify-content: center;
  display: flex;
`;

export const TodoList = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 20px;
  box-sizing: border-box;

  span {
    display: block;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 50px;
  }
`;

export const Weather = styled.div``;
