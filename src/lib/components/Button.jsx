import React from "react";
import "./Button.css";

function Button({ path, text, color = "white" }) {
  return (
    <a
      href={path}
      target="_blank"
      rel="noreferrer"
      className="btn"
      style={{ backgroundColor: color }}
    >
      <div className="btn-inner">
        <span className="btn-text" data-text={text}>
          {text}
        </span>
      </div>
    </a>
  );
}

export default Button;
