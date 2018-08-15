import React, { Component } from 'react';
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
            <div id="content">   
                {children}
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