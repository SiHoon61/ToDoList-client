import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  border: 2px solid #333;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  border-radius: 4px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-right: 10px;

  &:checked::after {
    content: "✔";
    color: #333;
    font-size: 14px;
    line-height: 1;
    position: relative;
    top: -1px;
  }
`;

export const Label = styled.label`
  font-size: 1.2rem;
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
  color: ${({ done }) => (done ? "#aaa" : "#000")};
`;
