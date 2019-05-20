import React from "react";
import "./sideNav.css";
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Resource from "../Resource/Resource";
import Project from "../Project/Project";
import Formula from "../Formula/Formula";
import Login from "../Login/Login";

class SideNav extends React.Component {
  state = {
    state: {
      showNav: false
    }
  };

  openNavClick = e => {
    e.preventDefault();
    this.openNav();
  };

  closeNavClick = e => {
    e.preventDefault();
    this.closeNav();
  };

  openNav = () => {
    this.setState({
      showNav: true
    });

    document.addEventListener("keydown", this.handleEscKey);
  };
  closeNav = () => {
    this.setState({
      showNav: false
    });

    document.removeEventListener("keydown", this.handleEscKey);
  };

  handleEscKey = e => {
    if (e.key === "Escape") {
      this.closeNav();
    }
  };

  render() {
    const { showNav } = this.state;
    let navCoverStyle = { width: showNav ? "100%" : "0" };
    let sideNavStyle = { width: showNav ? "15vw" : "0" };

    return (
      <React.Fragment>
        <span onClick={this.openNavClick} class="open-nav">
          &#9776;
        </span>
        <div
          onClick={this.navCoverClick}
          class="nav-cover"
          style={navCoverStyle}
        />
        <div name="side-nav" class="side-nav" style={sideNavStyle}>
          <a href="#" onClick={this.closeNavClick} class="close-nav">
            &times;
          </a>
          <div><NavLink to="/Resource">Resource</NavLink></div>
          <div><NavLink to="/Project">Project</NavLink></div>
          <div><NavLink to="/Formula">Formula</NavLink></div>
        </div>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/Resource" component={Resource}/>
        <Route path="/Project" component={Project}/>
        <Route path="/Formula" component={Formula}/>
      </Switch>
    </React.Fragment>
     
    );
  }
}

export default SideNav;
