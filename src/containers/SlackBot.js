import React, { Component } from 'react';
import {
  pink500,
  white
} from 'material-ui/styles/colors';
import { Paper, Divider } from 'material-ui';

export default class SlackBot extends Component {
  render() {
    return (
      <div>
        <div style={{margin:'5px 10px'}}>
          <h3>Slack Bot</h3>
          <Divider />
          <p>슬랙을 통해 현재의 피로도를 체크할 수 있습니다.</p>
        </div>
        <Paper style={{margin:'0 10px',padding:'10px',textAlign:'center'}}>
          <img src="/slack.png" style={{width:'50%'}} />
        </Paper>
      </div>
    );
  }
}