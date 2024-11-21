import { NextUIProvider } from "@nextui-org/react";
import { Route, Routes } from "react-router-dom";
import { GeneralRouter } from ".";

export const  App=()=> {
  return (
    <>
      <NextUIProvider>
        <Routes>
          <Route path="/*" element={<GeneralRouter/>} />
        </Routes>
      </NextUIProvider>
    </>
  );
}


