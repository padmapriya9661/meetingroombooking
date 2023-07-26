import React from "react";
import './App.css';
import { 
    FaTh,
    FaUserAlt,
    FaBars,



} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({children}) => {
    const menuItem=[
        {
            path:'/dashboard',
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:'/bookings',
            name:"Bookings",
            icon:<FaUserAlt/>
        },
        {
            path:'/rooms',
            name:"Rooms",
            icon:<FaUserAlt/>
        },
        {
            path:'/users',
            name:"Users",
            icon:<FaUserAlt/>
        }
    ]
    

    return(
        <div className="sidebar-container">
            <div className="sidebar-sidebar">
                <div className="sidebar-top_section">
                    <h1 className="sidebar-logo">Logo</h1>
                    <div className="sidebar-bars">
                        <FaBars/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="sidebar-link" activeclassName="sidebar-active">
                            <div className="sidebar-icon">{item.icon}</div>
                            <div className="sidebar-link_text">{item.name}</div>
                        </NavLink>
                    ))
                }

            </div>
            <main>{children}</main>
            
        </div>
    );
};
export default Sidebar;