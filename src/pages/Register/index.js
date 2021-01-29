import React from "react";
import { LoginBg, RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import "./register.scss";
const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Register Page</p>
        <Input name="Full Name" placeholder="Full Name" />
        <Gap height={16} />
        <Input name="Email" placeholder="Email" />
        <Gap height={16} />
        <Input name="Password" placeholder="Password" />
        <Gap height={30} />
        <Button title="Register" />
        <Gap height={100} />
        <Link title="Kembali Ke Login" />
      </div>
    </div>
  );
};

export default Register;
