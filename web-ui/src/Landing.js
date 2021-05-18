import React, { Component } from 'react';
import RGL, { WidthProvider } from "react-grid-layout";
// import ReactDOM from 'react-dom';
import { Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';


const ReactGridLayout = WidthProvider(RGL);

var layout = [
  { x: 2, y: 2, w: 12, h: 1, static: true },
  { x: 2, y: 3, w: 12, h: 3, static: true },
];

//landing page when users first access our site
export default function Landing() {
  return (
    <div className="landing-page"> 
      <ReactGridLayout
              rowHeight= {300}
              className="layout"
              isDraggable={false}
              isResizeable={false}
          >
        <div key="2" data-grid={layout[0]}>
          <p class="name" >Austin Kim</p>
          {/* <p class="down-arrow">&darr;</p> */}
        </div>
        <div key="3" data-grid={layout[1]}>
          <p class="desc1">I’m a designer with passions in graphic design, software development, and user experience.</p>
        </div>
      </ReactGridLayout>
    </div>
  );
}
