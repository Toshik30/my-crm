import {Outlet, Link } from "react-router-dom";
import '../src/assets/scss/style.css'
import SignInPage from "./components/SignInPage/SignInPage";

export default function App() {
  return (
    <div>
      <SignInPage/>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/stepOne">step One</Link> |{" "}
        <Link to="/stepTwo">step Two</Link>
      </nav>
      <Outlet/>
    </div>
  );
}