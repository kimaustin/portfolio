import React, { Component } from 'react';
import RGL, { WidthProvider } from "react-grid-layout";
// import ReactDOM from 'react-dom';
import { Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const ReactGridLayout = WidthProvider(RGL);

var layout = [
  { x: 0, y: 0, w: 4, h: 5, static: true },
  { x: 4, y: 0, w: 8, h: 3, static: true },
  { x: 4, y: 3, w: 8, h: 2, static: true },
];

export default function About() {
  return (
    <div className="about">
     <ReactGridLayout
              rowHeight= {100}
              className="layout"
              isDraggable={false}
              isResizeable={false}
          >
          <div key="1" data-grid={layout[0]}>
            <div class="about-left">date class name</div>
          </div>
          <div key="2" data-grid={layout[1]}>
            <div class="about-left">artwork here</div>
          </div>
          <div key="3" data-grid={layout[2]} style="background-color: black">
            <div class="about-left">description</div>
          </div>
      </ReactGridLayout>
    </div>
  );
}
