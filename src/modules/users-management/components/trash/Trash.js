import React, { useState } from "react";

import "./Trash.css";

const Trash = ({ className, userId, onClick }) => {
  return (
    <button
      className={`${className} trash-button`}
      onClick={(e) => {
        e.stopPropagation();
        onClick(userId);
      }}
    >
      <svg
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 172.541 172.541"
        style={{ enableBackground: "new 0 0 172.541 172.541" }}
      >
        <g>
          <path
            d="M166.797,25.078h-13.672h-29.971V0H49.388v25.078H19.417H5.744v15h14.806l10,132.463h111.443l10-132.463h14.805V25.078z
         M64.388,15h43.766v10.078H64.388V15z M128.083,157.541H44.46L35.592,40.078h13.796h73.766h13.796L128.083,157.541z"
          />
          <rect x="80.271" y="65.693" width="12" height="66.232" />
          <rect x="57.271" y="65.693" width="12" height="66.232" />
          <rect x="103.271" y="65.693" width="12" height="66.232" />
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </button>
  );
};

export default Trash;
