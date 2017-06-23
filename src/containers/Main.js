import React, { Component } from 'react';
import {
  pink500,pink50,pink800,
  white,black
} from 'material-ui/styles/colors';
import { RaisedButton } from 'material-ui';

export default class Main extends Component {
  render() {
    const mainStyle = {
      backgroundColor:pink500,
      margin:'-20px 0 0',
      padding:'40px 0',
      color:white,
      textAlign:'center'
    };
    const commentStyle = {
      textAlign:'center',
      padding:'60px 0',
      backgroundColor:pink50
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
        </div>
        <div style={commentStyle}>
          개발자의 <span style={{color:pink800}}>코딩 행동</span> & <span style={{color:pink800}}>패턴</span>을 분석해<br/>
          손목 통증, 눈의 피로감등을 예방할 수 있도록<br/>
          개발자의 <span style={{color:pink800}}>아로*민골드</span>같은 이 세상의 개발자를 <span style={{color:pink800}}>이롭게</span> 하는 프로그램을 출시했습니다!<br/>
        </div>
        <div style={{textAlign:'center',padding:'60px 0'}}>
          준비되셨나요?<br/><br/>
          <RaisedButton label="지금 시작해보세요 !" style={{color:pink500}} />
        </div>
        <div style={{color:white,backgroundColor:black,textAlign:'center',fontSize:'11px',padding:'40px 0'}}>
          Happy Hacking !<br/><br/>
          <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
          <br/><br/>
          Thank You :D
        </div>
      </div>
    );
  }
}
