import logo from '../../assets/img/Logo-img.svg';

const Dashboard = () => {
    return(
        <div className="dashboard">
             <div className="logo-wrapper">
                <img src={logo} alt="logo"  /> 
            </div>
            <div className="dashboard-nav">
                <ul>
                    <li><span className="icon"></span> Dashboard </li>
                    <li><span className="icon"></span> Projects</li>
                    <li><span className="icon"></span> Calendar</li>
                    <li><span className="icon"></span> Vacations</li>
                    <li><span className="icon"></span> Employees</li>
                    <li><span className="icon"></span> Messenger</li>
                    <li><span className="icon"></span> Info Portal</li>
                    <span className="active-link"></span>
                </ul>
            </div>
        </div>
    ); 
}
export default Dashboard