import React, { Component } from 'react';
// import RGL, { WidthProvider } from "react-grid-layout";
import { Link } from 'react-router-dom';
import { api_get, fetch_projects } from './api';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
// import store from '../store';

// const ReactGridLayout = WidthProvider(RGL);

// 1.714 = 1 col in 7-Column 
// *2 = 3.428, *3 = 5.142 
var layout = [
  { x: 0, y: 0, w: 3.4, h: 10, static: true },
  { x: 3.4, y: 0, w: 5.2, h: 10, static: true },
  { x: 8.6, y: 0, w: 3.4, h: 10, static: true },
];

function ProjInfo({project}) {
  // var event_path = "/parties/" + party.id
  return (
    <tr>
      <td>{project.name}</td>
      <td>{project.class_short}</td>
      <td>{project.semester}</td>
    </tr>
    // <Col md="6" style={{ 'paddingBottom':'20px', 'paddingRight':'30px', 'paddingTop':'0px'}}>
    //   <Card className="project-card">
    //     <Card.Title><strong>{project.name}</strong></Card.Title>
    //     <Card.Text>{project.class_short}</Card.Text>
    //     <Card.Text>{project.semester}</Card.Text>
    //     <Link to={{pathname: `/projects/` + project.id}}>
    //       <Button variant="primary">&darr;</Button>
    //     </Link>
    //   </Card>
    // </Col>
  );
}

function Work({projects}) {

  // let projects = api_get("/projects");

  console.log(projects);

  let project_cards = projects.map((project) => (
    <ProjInfo project={project} key={project.id} />
  ));

  return (
    <div className="landing-page">
      <div className="explorer">
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>class</th> 
              <th>semester</th>
            </tr>
          </thead>
          <tbody>
            {project_cards}
          </tbody>
        </table>
      </div>
      <div className="work">artwork here</div>
      <div className="work-desc">description</div>
    </div>
  )
}

// function state2props({projects}) {
//   return { projects };
// }

export default connect(({projects}) => ({projects}))(Work);


//landing page when users first access our site
// export default function Landing() {
//   return (
//     <div className="work">
//         <ReactGridLayout
//               rowHeight= {100}
//               className="layout"
//               isDraggable={false}
//               isResizeable={false}
//           >
//           <div key="1" data-grid={layout[0]}>
//             <div class="work-left">date class name</div>
//           </div>
//           <div key="2" data-grid={layout[1]}>
//             <div class="work-left">artwork here</div>
//           </div>
//           <div key="3" data-grid={layout[2]} style="background-color: black">
//             <div class="work-left">description</div>
//           </div>
//         </ReactGridLayout>
//     </div>
//   );
// }
