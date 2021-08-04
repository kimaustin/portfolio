import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleWork from './SingleWork';
import { work1, work2, work3, work4, work5, work6 } from './WorkData';
import { Container, FiltersContainer, Filter, WorkList, ProjectItem } from './WorkElements';

const Works = () => {
  return (
    <Container>
      <FiltersContainer>
          <Filter bgColor={'yellow'}>Graphic Design</Filter>
          <Filter bgColor={'green'}>Software Development</Filter>
          <Filter bgColor={'blue'}>Experience Design</Filter>
      </FiltersContainer>
      <WorkList>
        <ProjectItem>
          <SingleWork {...work1}/>
        </ProjectItem>
        <ProjectItem>
          <SingleWork {...work2}/>
        </ProjectItem>
        <ProjectItem>
          <SingleWork {...work3}/>
        </ProjectItem>
        <ProjectItem>
          <SingleWork {...work4}/>
        </ProjectItem>
        <ProjectItem>
          <SingleWork {...work5}/>
        </ProjectItem>
        <ProjectItem>
          <SingleWork {...work6}/>
        </ProjectItem>
        {/* <ProjectItem>
          <p>6</p>
          <h1>Personal Identity Project</h1><br></br>
          <p>Product Poster Series</p>
        </ProjectItem> */}
      </WorkList>
    </Container>
  )
};

export default Works;