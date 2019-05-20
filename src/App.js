import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideNav from "./side-nav/SideNav";
import Resource from "./Resource/Resource";
import Project from "./Project/Project";
import Formula from "./Formula/Formula";
import Login from "./Login/Login";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div class="logo">
            Resource Management
          </div>
          <div class="headtitle">Project1</div>
          <div class="user">User Cost Manager</div>
        </header>
        <React.Fragment>
          <SideNav />
        </React.Fragment>
        
      </div>
    </Router>
  );
}

export default App;
