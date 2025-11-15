import React from "react";
import BaseLayer from "../../components/BaseLayer/BaseLayer";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router";
import Section from "../../components/Section/Section";

const NotFound = () => {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };
  const notFoundContent = (
    <div className="flex items-center justify-center flex-col gap-5">
      <img
        src="../../../src/assets/404.png"
        alt=""
        className="flex-1 h-full object-contain"
      />
      <Button label={"Back To Home"} click={backToHome} />
    </div>
  );
  return (
    <Section>
      <div>
        <BaseLayer content={notFoundContent} />
      </div>
    </Section>
  );
};

export default NotFound;
