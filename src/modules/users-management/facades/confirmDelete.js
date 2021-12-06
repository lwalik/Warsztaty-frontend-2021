import React, { useState } from "react";

export const ConfirmDeleteUser = () => {
  const [isClicked, setClicked] = useState(false);

  return { isClicked, setClicked };
};
