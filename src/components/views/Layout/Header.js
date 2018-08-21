import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
            <span className="brand-logo center">{props.title}</span>
            <ul className="right hide-on-med-and-down">              
                <li><NavLink  to="/listPets"><i className="Large material-icons">pets</i></NavLink></li>
                <li><NavLink  to="/createPet"><i className="Large material-icons">plus_one</i></NavLink></li>
                <li><NavLink  to="/"><i className="Large material-icons">home</i></NavLink></li>
            </ul>
            </div>
        </nav>            
    );
}

export default Header;