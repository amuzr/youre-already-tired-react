import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppBar } from 'material-ui';

import { openDrawer } from '../actions';

class Header extends Component {

  render() {
    const {open, onClick} = this.props;
    const contentStyle = {  transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };

    if(open) contentStyle.marginLeft = 256;
    
    return (
      <header style={contentStyle}>
        <AppBar title="너는 이미 피곤하다" onLeftIconButtonTouchTap={() => onClick(open)} />
      </header>      
    );
  }
}

const drawerStateToProps = (state) => {
  const { main } = state;
  return main;
}

const drawerDispatchToProps = (dispatch) => {  
  return {
    onClick(status){
      dispatch(openDrawer(status));
    }
  }
}

export default connect(
  drawerStateToProps,drawerDispatchToProps
)(Header);