import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Drawer, MenuItem, Divider } from 'material-ui';
import {
  pink500,
  white
} from 'material-ui/styles/colors';

import { openDrawer } from '../actions';

class SideBar extends Component {
  render() {
    const {open, onRequestChange} = this.props;
    const sideTitleStyle = {height:'64px',lineHeight:'64px',fontSize:'24px',color:white,backgroundColor:pink500};
    const linkStyle = {textDecoration:'none'};

    return (
      <Drawer docked={false} open={open} onRequestChange={onRequestChange}>
        <Link style={linkStyle} to="./"><MenuItem style={sideTitleStyle}>You're already tired</MenuItem></Link>
        <MenuItem>Introduce</MenuItem>
        <Link style={linkStyle} to="./chart"><MenuItem >Chart</MenuItem></Link>
        <Divider />
        <MenuItem>Slack Bot</MenuItem>
        <MenuItem>Chrome Push</MenuItem>
        <Divider />
        <MenuItem>Github</MenuItem>
      </Drawer>
    );
  }
}

const drawerStateToProps = (state) => {
  const { main } = state;
  return main;
}

const drawerDispatchToProps = (dispatch) => {  
  return {
    onRequestChange(status){
      dispatch(openDrawer(true));
    }
  }
}

export default connect(
  drawerStateToProps,drawerDispatchToProps
)(SideBar);