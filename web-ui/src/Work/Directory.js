import React, { Component } from 'react';
// import { connect } from 'react-redux';

function ProjInfo({project}) {
  return (
    <tr>
      <td>{project.semester}</td>
      <td>{project.class_short}</td>
      <td>{project.name}</td>
    </tr>
  );
}

export default function Directory({projects}) {

  // console.log(projects);

  let project_cards = projects.map((project) => (
    <ProjInfo project={project} key={project.id} />
  ));

  return (
    <div className="directory">
        <table>
            <thead>
                <tr>
                <th>semester</th>
                <th>class</th> 
                <th>project</th>
                </tr>
            </thead>
            <tbody>
                {project_cards}
            </tbody>
        </table>
    </div>
  )
}

// export default connect(({projects}) => ({projects}))(Work);