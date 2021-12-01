import  Dashboard  from "../components/header/Dashboard";

const Start = (props) => {
    return(
      <div className="start">
           <Dashboard/>
           <div className="container">
           <h1>Hello {props.count}</h1>
           </div>
      </div>
    );
}
export default Start;