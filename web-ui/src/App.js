import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import "./App.scss";

import NavFrame from "./NavFrame";
import Landing from "./Landing";
import Work from "./Work";
import Nektine from "./Nektine";
import About from "./About";

//Our App Components
export default function App() {
  return (
    <Container fluid>
      <div className="frame">
        {/* {(success || error) && <AlertBanner error={error} success={success}/>} */}
        <NavFrame />
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/work" exact>
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
    </Container>
  );
}

// export default connect(({error, success}) => ({error, success}))(App);
