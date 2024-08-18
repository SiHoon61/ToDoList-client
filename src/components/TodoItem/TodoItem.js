import React, { useState } from "react";
import { ItemWrapper, Checkbox, Label } from "./style";

const TodoItem = ({ text, done: initialDone }) => {
  const [done, setDone] = useState(initialDone);

  const toggleDone = () => {
    setDone(!done);
  };

  return (
    <ItemWrapper>
      <Checkbox type="checkbox" checked={done} onChange={toggleDone} />
      <Label done={done}>{text}</Label>
    </ItemWrapper>
  );
};

export default TodoItem;
