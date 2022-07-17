import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';

// 만든 파일을 실제로 랜더링 하려면 index.js 파일을 수정해야됨 

setInterval(()=> { 
  ReactDOM.render(
    <React.StrictMode>
      <Clock/>
    </React.StrictMode>,
    document.getElementById('root')
  );
},1000); //1초마다 갱신 

// ReactDOM.render(
//   <React.StrictMode>
//     <Library/>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
