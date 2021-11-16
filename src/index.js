import React, { render } from "react-dom";
import App from "./App";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import StepOne from '../src/components/SignInPage/StepOne';
import StepTwo from '../src/components/SignInPage/StepTwo';
import StepThree from '../src/components/SignInPage/StepThree';
import StepFour from '../src/components/SignInPage/StepFour';

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route exact path="/stepOne" element={<StepOne/>} />
      <Route exact path="/stepTwo" element={<StepTwo/>} />
      <Route exact path="/StepThree" element={<StepThree/>}/>
      <Route exact path="/StepFour" element={<StepFour/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);