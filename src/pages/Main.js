import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppBar } from 'material-ui';

import { openDrawer } from '../actions';

class Main extends Component {
  componentWillMount() {
    console.log('main !!');
  }

  render() {
    const {open, onClick} = this.props;
    return (
      <div>
        <header>
          <AppBar title="너는 이미 피곤하다" onLeftIconButtonTouchTap={onClick(open)} />
        </header>
      </div>
    );
  }
}

const drawerStateToProps = (state) => {
  return {
    open: state.open
  }
}

const drawerDispatchToProps = (dispatch) => {  
  return {
    onClick(status){
      console.log(' on click !!');
      dispatch(openDrawer(status));
    }
  }
}

export default connect(
  drawerStateToProps,drawerDispatchToProps
)(Main);