import styled, { keyframes } from "styled-components";

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

export const ShowInputButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: #219ebc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: #197b8c;
  }
`;

const slideDown = keyframes`
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: auto;
    opacity: 1;
  }
`;

export const TodoInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  animation: ${slideDown} 0.3s ease forwards;
`;

export const TodoInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  margin-right: 10px;
  box-sizing: border-box;
`;

export const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #219ebc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #197b8c;
  }
`;
