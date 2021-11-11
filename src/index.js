import { render } from "react-dom";
import App from "./App";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import StepOne from '../src/components/SignInPage/stepOne';
import StepTwo from '../src/components/SignInPage/stepTwo';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/stepOne" element={<StepOne />} />
      <Route path="/stepTwo" element={<StepTwo />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);