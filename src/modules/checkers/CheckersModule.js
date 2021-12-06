import React, { useState } from "react";
import Board from "./components/board/Board";
import CheckBox from "./components/check-box/CheckBox";

const CheckersModule = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <Board checked={checked} />
      <CheckBox checked={checked} onChange={(e) => setChecked(!checked)} />
    </>
  );
};

export default CheckersModule;
