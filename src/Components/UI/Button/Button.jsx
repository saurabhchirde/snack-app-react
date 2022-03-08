import React from "react";

const Button = (props) => {
  return (
    <div className={props.btn}>
      <button
        onClick={props.onClick}
        type={props.type}
        className={props.className}
      >
        {props.label}
      </button>
    </div>
  );
};

export default Button;
