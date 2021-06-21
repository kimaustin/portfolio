import React, { Component } from 'react';
import List from 'react-list-select';
// import { connect } from 'react-redux';

function ProjInfo({project}) {
  return (
    <tr>
      <td>{project.semester}</td>
      <td>{project.class_short}</td>
      <td><a href={"/work/" + project.id}>{project.name}</a></td>
    </tr>
  );
}

export default function Directory({projects}) {

  // console.log(projects);

  let project_cards = projects.map((project) => (
    <ProjInfo project={project} key={project.id} />
  ));

  // return (
  //   <div className="directory">
  //       <table>
  //           <thead>
  //               <tr>
  //               <th>semester</th>
  //               <th>class</th> 
  //               <th>project</th>
  //               </tr>
  //           </thead>
  //           <tbody>
  //               {project_cards}
  //           </tbody>
  //       </table>
  //   </div>
  // )

  let items = [];
  
  for (var i = 0; i < projects.length; i++) {
    var tempProj = {
      semester: projects[i].semester,
      class: projects[i].class,
      project: projects[i].name
    }
    items.push(tempProj);
  }

  let projectsList = (
    <List
      items={items}
      selected={[0]}
      disabled={[4]}
      multiple={true}
      // onChange={(selected: number) => { console.log(selected) }}
    />
  )

  return (
    <div>
      {projectsList}
    </div>
  )
}

// export default connect(({projects}) => ({projects}))(Work);

// ReactDOM.renderComponent(list, document.getElementById('container'))