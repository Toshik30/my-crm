// import React, {useState, useEffect} from 'react';
import logo from '../../assets/img/Logo-img.svg';

const Dashboard = () => {
    // const [count, setCount] = useState(0);
    const navLi = document.querySelector('.active-link');
    // useEffect(() => {
        
    //     console.log(document.querySelector('h1'))
    //     document.querySelector('h1').textContent = `вы нажали ${count} раз`;
        
        
    // });
   
    return(
        <div className="dashboard">
             <div className="logo-wrapper">
                <img src={logo} alt="logo"  /> 
            </div>
            <div className="dashboard-nav">
                <ul>
                    <li onClick={() => {navLi.style.cssText = 'top: -10%;'}  }><span className="icon"></span> Dashboard </li>
                    <li onClick={() => {navLi.style.top = '5%'}}><span className="icon"></span> Projects</li>
                    <li onClick={() => {navLi.style.top = '20%'}}><span className="icon"></span> Calendar</li>
                    <li onClick={() => {navLi.style.top = '35%'}}><span className="icon"></span> Vacations</li>
                    <li onClick={() => {navLi.style.top = '50%'}}><span className="icon"></span> Employees</li>
                    <li onClick={() => {navLi.style.top = '65%'}}><span className="icon"></span> Messenger</li>
                    <li onClick={() => {navLi.style.top = '80%'}}><span className="icon"></span> Info Portal</li>
                    <span className="active-link"></span>
                </ul>
            </div>
        </div>
    ); 
}
export default Dashboard