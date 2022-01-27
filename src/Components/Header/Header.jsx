import React from "react";
import './Header.scss'
import { NavLink } from "react-router-dom";

function Header() {
    return <>
        <div className="header">
            <span>
                Gurunglashamiz
            </span>

            <nav>
                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink to={'home'} className={({isActive}) => isActive ? 'nav-link--active' : null}>
                            Home
                        </NavLink>
                    </li> 
                    
                    <li className="nav-list__item">
                        <NavLink to={'profile'} className={({isActive}) => isActive ? 'nav-link--active' : null}>
                            Profile
                        </NavLink>
                    </li>

                    <li className="nav-list__item">
                        <NavLink to={'settings'} className={({isActive}) => isActive ? 'nav-link--active' : null}>
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </>
}

export default Header;