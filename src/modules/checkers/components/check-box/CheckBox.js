import React, { useState } from "react";

import "./CheckBox.css";

const CheckBox = ({ checked, onChange }) => {
  return (
    <div className="checkbox-container">
      <label>
        <input
          type="checkbox"
          className="checkbox-input"
          checked={checked}
          onChange={onChange}
        />
        {checked ? <span>Add/Remove ON</span> : <span>Add/Remove OFF</span>}
      </label>
    </div>
  );
};

export default CheckBox;
