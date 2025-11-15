import React from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="w-full lg:w-6xl lg:mx-auto">
      <Outlet />
    </div>
  );
};

export default RootLayout;
