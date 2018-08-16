import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class Layout extends Component {
  constructor() {
    super();
    /*this.onClick = this.onClick.bind(this);
    this.onActive = this.onActive.bind(this);
    this.state = { expanded: false };*/
  }
  /*
  onClick() {
    //this.setState(prevState => ({ expanded: !prevState.expanded }));
    console.log("onClick");
  }

  onActive(active) {
    //this.setState({ active });
    console.log("onActive");    
  }*/

  render() {      
    const { children, title } = this.props;
    return (
      <div>
        <nav className="green lighten-1" role="navigation">
          <div class="nav-wrapper">
            <span class="brand-logo center">{title}</span>
            <ul class="right hide-on-med-and-down">              
              <li><NavLink  to="/listPets"><i class="Large material-icons">pets</i></NavLink></li>
              <li><NavLink  to="/createPet"><i class="Large material-icons">plus_one</i></NavLink></li>
              <li><NavLink  to="/"><i class="Large material-icons">home</i></NavLink></li>
            </ul>
          </div>
        </nav>
        <div className="section">
          <div className="row">
              <div className="container">
                {children}
              </div>
          </div>
        </div>
      </div>
    );
  }
}


Layout.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired
};

Layout.defaultProps = {
    expanded: false
};

export default Layout;