import React from "react";
import { LoginBg, RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
const Login = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Login Page</p>
        <Input name="Email" placeholder="Email" />
        <Gap height={16} />
        <Input name="Password" placeholder="Password" />
        <Gap height={30} />
        <Button title="Login" />
        <Gap height={100} />
        <Link title="Belum punya akun ? Silahkan daftar" />
      </div>
    </div>
  );
};

export default Login;
