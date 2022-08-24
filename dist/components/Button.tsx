import React from "react";
import "./Button.scss";

// import PDF from '../../images/Resume.pdf'

type ButtonProps = {
  path: string;
  text: string;
  color?: string;
};

function Button({ path, text, color = "white" }: ButtonProps) {
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
