import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">            
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink  to="/pets">Pets</NavLink></li>            
            </ul>
            </div>
        </nav>                
    );
}

export default Header;