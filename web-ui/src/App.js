import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import "./App.scss";

import NavBar from "./NavBar";
import Landing from "./Landing";
import Work from "./Work";
import Nektine from "./Nektine";
import About from "./About";

//Our App Components
export default function App() {
  return (
    // <Container fluid>
    <div className="container">
      <div className="frame">
      <NavBar />  
        {/* {(success || error) && <AlertBanner error={error} success={success}/>} */}
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/work/:projectId?">
            <Work />
          </Route>
          <Route path="/nektine" exact>
            <Nektine />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
      </div>
    </div>
    // </Container>
  );
}

// export default connect(({error, success}) => ({error, success}))(App);
