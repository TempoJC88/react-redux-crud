import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

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
        <Header title={title}></Header>
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