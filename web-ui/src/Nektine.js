import React, { Component } from 'react';
import RGL, { WidthProvider } from "react-grid-layout";
// import ReactDOM from 'react-dom';
import { Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const ReactGridLayout = WidthProvider(RGL);

var layout = [
  { x: 0, y: 0, w: 4, h: 6, static: true },
  { x: 4, y: 0, w: 8, h: 4, static: true },
  { x: 4, y: 4, w: 8, h: 2, static: true },
];

export default function Nektine() {
  return (
    <div className="nektine">
     <ReactGridLayout
              rowHeight= {100}
              className="layout"
              isDraggable={false}
              isResizeable={false}
          >
          <div key="1" data-grid={layout[0]}>
            <div class="about-left">posters</div>
          </div>
          <div key="2" data-grid={layout[1]}>
            <div class="about-left">photography</div>
          </div>
          <div key="3" data-grid={layout[2]} style="background-color: black">
            <div class="about-left">music</div>
          </div>
      </ReactGridLayout>
    </div>
  );
}
