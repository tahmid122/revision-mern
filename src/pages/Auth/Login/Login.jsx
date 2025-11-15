import React, { useState } from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import toast from "react-hot-toast";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const handleChange = (target) => {
    const name = target.name;
    const value = target.value;
    setLoginInfo({ ...loginInfo, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    for (const key in loginInfo) {
      if (loginInfo[key]?.trim() == "") {
        toast.error(`${key?.toUpperCase()} is required`);
        return;
      }
    }
    console.log(loginInfo);
  };
  return (
    <div className="h-screen flex">
      <div className="flex-1 bg-black flex items-center justify-center">
        <img src="../../../../src/assets/roadmapfull.png" alt="" />
      </div>

      <div className="flex-1 p-10 flex flex-col gap-10 items-center justify-center">
        <h2 className="text-2xl font-bold">Login</h2>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <Input
            label={"email"}
            type={"email"}
            name={"email"}
            placeholder={"Enter your email"}
            changeFunc={handleChange}
          />
          <Input
            label={"password"}
            type={"password"}
            name={"password"}
            placeholder={"*******"}
            changeFunc={handleChange}
          />
          <Button label={"Login"} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
