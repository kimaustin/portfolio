import React, { Component } from 'react';
// import { connect } from 'react-redux';

function Picture_Displayed({picture}) {
    console.log(picture);
    return (
        <img src={"imgs/" + picture + ".png"} alt={picture} id="project-img"></img>
    );
}
  
export default function Display({pictures}) {

  let pictures_displayed = pictures.map((picture) => (
      <Picture_Displayed picture={picture} key={picture.id} />
  ));

  return (
    <div>{pictures_displayed}</div>
  )
}