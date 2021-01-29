import React from "react";
import "./input.scss";
const Input = ({ name, ...rest }) => {
  return (
    <div className="input-wrapper">
      <p className="label">{name}</p>
      <input className="input" {...rest} />
    </div>
  );
};

export default Input;
