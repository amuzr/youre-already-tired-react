import React, { Component } from 'react';
import {
  pink500,
  white
} from 'material-ui/styles/colors';
import { Paper, Divider } from 'material-ui';

export default class ChromePush extends Component {
  render() {
    return (
      <div>
        <div style={{margin:'5px 10px'}}>
          <h3>Chrome Push</h3>
          <Divider />
          <p>피곤해질 때 쯤 휴식필요를 알리는 푸시 메세지를 받을 수 있습니다.</p>
        </div>
        <Paper style={{margin:'0 10px',padding:'10px',textAlign:'center'}}>
          <img src="/chromepush.png" style={{width:'100%'}} />
        </Paper>
      </div>
    )
  }
}