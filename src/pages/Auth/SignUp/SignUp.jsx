import React, { useState } from "react";
import Section from "../../../components/Section/Section";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

const SignUp = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  //   change input
  const handleChange = (target) => {
    const name = target.name;
    const value = target.value;
    setSignUpDetails({ ...signUpDetails, [name]: value });
    setError({ fullName: "", email: "", password: "", confirmPassword: "" });
  };
  //   form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    for (const key in signUpDetails) {
      const fieldName = signUpDetails[key];
      if (fieldName?.trim() == "") {
        setError({ ...error, [key]: `${key} is required` });
        return;
      }
    }
    if (signUpDetails?.password !== signUpDetails?.confirmPassword) {
      setError({ ...error, confirmPassword: "Confirm password not matched" });
      return;
    }
    console.log(signUpDetails);
  };
  return (
    <div className="h-screen flex flex-col-reverse lg:flex-row">
      <div className="flex-1 bg-black flex items-center justify-center">
        <img src="../../../../src/assets/signup.png" alt="" />
      </div>

      <div className="flex-1 p-10 flex flex-col gap-10 items-center justify-center">
        <h2 className="text-2xl font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <Input
            label={"full name"}
            type={"text"}
            name={"fullName"}
            placeholder={"Enter your full name"}
            changeFunc={handleChange}
          />
          {error?.fullName && (
            <p className="text-red-500 text-base">{error?.fullName}</p>
          )}
          <Input
            label={"email"}
            type={"email"}
            name={"email"}
            placeholder={"Enter your email"}
            changeFunc={handleChange}
          />
          {error?.email && (
            <p className="text-red-500 text-base">{error?.email}</p>
          )}
          <Input
            label={"password"}
            type={"password"}
            name={"password"}
            placeholder={"Enter your password"}
            changeFunc={handleChange}
          />
          {error?.password && (
            <p className="text-red-500 text-base">{error?.password}</p>
          )}
          <Input
            label={"confirm Password"}
            type={"password"}
            name={"confirmPassword"}
            placeholder={"Rewrite your password"}
            changeFunc={handleChange}
          />
          {error?.confirmPassword && (
            <p className="text-red-500 text-base">{error?.confirmPassword}</p>
          )}
          <Button label={"SignUp"} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
