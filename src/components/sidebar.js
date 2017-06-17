import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Drawer, MenuItem } from 'material-ui';



class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {open} = this.props;
    return (
      <Drawer docked={false} open={open}>
        <MenuItem><Link to="/">Home</Link></MenuItem>
        <MenuItem><Link to="/chart">Chart</Link></MenuItem>
      </Drawer>
    );
  }
}


const drawerStateToProps = (state) => {
  return {
    open: state.open
  }
}

export default connect(

)(SideBar);