import { NextUIProvider } from "@nextui-org/react";
import { Route, Routes } from "react-router-dom";
import { GeneralRouter } from ".";
import { RobotsTxt } from "../components";

export const  App=()=> {
  return (
    <>
      <NextUIProvider>
        <Routes>
          <Route path="/robots.txt" element={<RobotsTxt />} />
          <Route path="/*" element={<GeneralRouter/>} />
        </Routes>
      </NextUIProvider>
    </>
  );
}


