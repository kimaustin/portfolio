import "./App.scss";
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "./components/Home";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Status from "./components/Status";
import MobileBar from "./components/MobileBar";
import { Button2 } from "./components/ButtonElement";
import DarkModeButton from "./components/DarkModeButton";
import Works from "./components/Works";
import WorkExpanded from "./components/Works/WorkExpanded"

//Our App Components
function App() {

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <MobileBar isOpen={isOpen} toggle={toggle} />
      <Navigation toggle={toggle} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/works" exact>
            <Works />
          </Route>
          <Route path="/works/:workId?" >
            <WorkExpanded />
          </Route>
          <Route path="/main" exact>
            <Main/>
          </Route>
        </Switch>
      <Status />
      <DarkModeButton />
    </Router>
  );
}

export default App;