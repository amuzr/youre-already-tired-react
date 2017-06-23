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
        <Link style={linkStyle} to="/" onClick={onRequestChange}><MenuItem style={sideTitleStyle}>You're already tired</MenuItem></Link>
        <Link style={linkStyle} to="/introduce" onClick={onRequestChange}><MenuItem >Introduce</MenuItem></Link>
        <Link style={linkStyle} to="/chart" onClick={onRequestChange}><MenuItem >Chart</MenuItem></Link>
        <Divider />
        <Link style={linkStyle} to="/slackbot" onClick={onRequestChange}><MenuItem >Slack Bot</MenuItem></Link>
        <Link style={linkStyle} to="/chromepush" onClick={onRequestChange}><MenuItem >Chrome Push</MenuItem></Link>
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