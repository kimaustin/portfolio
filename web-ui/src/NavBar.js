import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import RGL, { WidthProvider } from "react-grid-layout";
import { Nav, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ReactGridLayout = WidthProvider(RGL);

var layout = [
  { x: 0, y: 0, w: 2, h: 2, static: true },
  { x: 9.2, y: 0, w: .9, h: 2, static: true },
  { x: 10.1, y: 0, w: .9, h: 2, static: true },
  { x: 11, y: 0, w: .9, h: 2, static: true },
];

export default function NavBar() {
  return (
    <div className="nav-bar">
      <ReactGridLayout
            rowHeight= {300}
            className="layout"
            isDraggable={false}
            isResizeable={false}
        >
        <div key="1" data-grid={layout[0]}>
          <Link className="nav" to="/">N</Link>
        </div>
        <div key="2" data-grid={layout[1]}>
          <Link className="nav" to="/work"><span class="dot"></span>Work</Link>
        </div>
        <div key="3" data-grid={layout[2]}>
          <Link className="nav"to="/nektine"><span class="dot"></span>Nektine</Link>
        </div>
        <div key="4" data-grid={layout[3]} style="background-color: black">
          <Link className="nav" to="/about"><span class="dot"></span>Me</Link>
        </div>
      </ReactGridLayout>
    </div>
  );
}