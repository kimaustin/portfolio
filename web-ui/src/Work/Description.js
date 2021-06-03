import React, { Component } from 'react';
// import { connect } from 'react-redux';

export default function Description({currProject}) {

  // console.log(currProject["semeseter"]);
  console.log(currProject);

  return (
    <div className="work-desc">
      <h3 className="semester">{currProject.semester}</h3>
      <h2 className="class">{currProject.class}</h2>
      <h1 className="proj-name">{currProject.name}</h1>
      <p className="proj-desc">{currProject.desc}</p>
    </div>
  )
}