import "./clientDashboard.css";
//import desktopLogo from "../assets/images/Desktop-Laptop_Background 2.png"; //
import SideNavLogo from "../assets/images/Logo 2_32x32.png";
import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWallet, /*faSignOutAlt, */ faExchangeAlt } from '@fortawesome/free-solid-svg-icons';


function ClientDashboard() {
    return (
        <div id="DashContainer">  
            <div id="SideBar">
                <ul id="NavList">
                    <div id="NavLogo">
                        <NavLink id="SideNavLogo" to="/">
                            <img src={SideNavLogo} alt="SideNavLogo" />
                        </NavLink>
                    </div>
                    <li id="listSide">
                        <NavLink id="dashLink" to="/">
                            <FontAwesomeIcon icon={faHome} /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="dashLink" to="budgetApp">
                            <FontAwesomeIcon icon={faWallet} /> Budget App
                        </NavLink>
                    </li>
                      
                    <li>
                        <NavLink id="dashLink" to="TransferFund">
                            <FontAwesomeIcon icon={faExchangeAlt} /> Fund Transfer
                        </NavLink>
                    </li>
                </ul>
            </div>

            <Outlet />
            
        </div>
    );
}

export default ClientDashboard;
