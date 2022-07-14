import React from 'react';
import { Route, Routes, BrowserRouter, Outlet, HashRouter } from 'react-router-dom';
import Game from './game/Game';
import App from './App';

const Home = () => {
  return (
  <div>
    <div>hello world</div>
    
    <Outlet />
  </div>
)};

const About = () => {
  return <div>1111</div>
}

const Dashboard = () => {
  return <div>今日活跃用户: 42</div>
}

const NotFound = () => {
  return <div>你来到了没有知识的荒原</div>
}


export default function App1() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>}/>

        <Route path="game" element={<Game/>}/>

        <Route path="home" element={<Home/>}>
          <Route path="about" element={<About/>}/>
          <Route path="board" element={<Dashboard/>}/>
        </Route>
        
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
     {/* </BrowserRouter> */}
    </HashRouter>
  );
}