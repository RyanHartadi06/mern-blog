import React from "react";
import { LoginBg, RegisterBg } from "../../assets";
import { Input } from "../../components";
import "./register.scss";
const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" />
      </div>
      <div className="right">
        <p>Register Page</p>
        <Input />
      </div>
    </div>
  );
};

export default Register;
