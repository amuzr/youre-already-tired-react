import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppBar } from 'material-ui';
import {
  pink500,
  white
} from 'material-ui/styles/colors';

import { openDrawer } from '../actions';

class Header extends Component {

  render() {
    const {open, onClick} = this.props;
    // const contentStyle = {  transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };
    // if(open) contentStyle.marginLeft = 256;

    const appBarStyle = {textAlign:'center',boxShadow:'none',backgroundColor:pink500};

    return (
      <header>
        <AppBar style={appBarStyle} onLeftIconButtonTouchTap={() => onClick(open)} />
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