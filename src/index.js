import React, { render } from "react-dom";
import App from "./App";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import StepOne from '../src/components/SignInPage/StepOne';
import StepTwo from '../src/components/SignInPage/StepTwo';
import StepThree from '../src/components/SignInPage/StepThree';
import StepFour from '../src/components/SignInPage/StepFour';
import Start from '../src/pages/Start';

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/StepOne" element={<StepOne/>} />
      <Route path="/StepTwo" element={<StepTwo/>} />
      <Route path="/StepThree" element={<StepThree/>}/>
      <Route path="/StepFour" element={<StepFour/>}/>
      
    </Routes>
    <Routes>
      <Route path="/Start"  element={<Start/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);