import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Tab, Nav } from 'react-bootstrap';
// import RGL, { WidthProvider } from "react-grid-layout";
// import { Link } from 'react-router-dom';
// import { api_get, fetch_projects } from './api';
// import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
// import store from '../store';
import Directory from "./Work/Directory";
import Description from "./Work/Description";
import Display from './Work/Display';

function findProjectById(projects, id) {
  for (var i = 0; i < projects.length; i++) {
      if (projects[i].id.toString() === id) {
          return projects[i];
      }
  }
  return null;
}

function Work({projects}) {

  // let currProject;
  // currProject = projects[16];
  // console.log(currProject.imgs);
  var projectId;

  let path_name = window.location.pathname;
  if (path_name.endsWith("k")) {
    projectId = "1";
  } else {
    projectId = path_name.substring(path_name.lastIndexOf("/") + 1);
  }
  var currProject = findProjectById(projects, projectId);

  return (
    <div className="work">
      <div className="projects"><Directory projects={projects} /></div>
      <div className="description"><Description currProject={currProject} /></div>
      <div className="a-project"><Display pictures={currProject.imgs} /></div>
    </div> 
  )
};

export default connect(({projects}) => ({projects}))(Work);