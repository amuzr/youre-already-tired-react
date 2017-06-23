import React, { Component } from 'react';
import {
  pink500,
  white
} from 'material-ui/styles/colors';

export default class Main extends Component {
  render() {
    const mainStyle = {
      backgroundColor:pink500,
      margin:'-20px',
      padding:'40px 0',
      color:white,
      textAlign:'center'
    };
    return (
      <div>
        <div style={mainStyle}>
          <pre className='logo'>{`
██╗   ██╗ █████╗ ████████╗
╚██╗ ██╔╝██╔══██╗╚══██╔══╝
 ╚████╔╝ ███████║   ██║   
  ╚██╔╝  ██╔══██║   ██║   
   ██║   ██║  ██║   ██║   
   ╚═╝   ╚═╝  ╚═╝   ╚═╝   
        `}</pre>
          <div>
            오늘 하루 아무것도 안 한거 같은데, 왜 피곤할까요…<br/>
            알려드립니다. 너는 이미 피로하다!<br/>
          </div>
          <br/>
          <div style={{fontSize:'11px'}}>
            개발자의 코딩 행동 & 패턴을 분석해<br/>
            손목 통증, 눈의 피로감등을 예방할 수 있도록<br/>
            개발자의 아로나민골드같은 이 세상의 개발자를 이롭게 하는 프로그램을 출시했습니다!<br/>
          </div>
        </div>
      </div>
    );
  }
}
