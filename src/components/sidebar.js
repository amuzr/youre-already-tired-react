import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Drawer, MenuItem } from 'material-ui';

import { openDrawer } from '../actions';

class SideBar extends Component {
  render() {
    const {open, onRequestChange} = this.props;
    return (
      <Drawer docked={false} open={open} onRequestChange={onRequestChange}>
        <MenuItem>Menu</MenuItem>
        <Link to="/"><MenuItem>Home</MenuItem></Link>
        <Link to="/chart"><MenuItem>Chart</MenuItem></Link>
      </Drawer>
    );
  }
}

const drawerStateToProps = (state) => {
  const { pages } = state;
  return pages;
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