//import React from 'react';
import ReactDOM from 'react-dom/client';
import RangeBadge from './RangeBadge';
import State1 from './State1'
import State2 from './State2'
import Game from './game/Game'
import Todo from './todo/Todo';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
//import './index.css';
import App1 from './App1';
import Test from './web3/Test';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  //<RangeBadge removed={true} inRange={true} />
  <Test />
);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
