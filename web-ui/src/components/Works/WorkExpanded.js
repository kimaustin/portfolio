import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

function Picture_Displayed({picture}) {
    console.log(picture);
    return (
        <img src={"/imgs/" + picture + ".png"} alt={picture} width="200px" id="project-img"></img>
    );
}

const WorkExpanded = ({ projects }) => {

    const location = useLocation();
    let work_id = location.pathname.split("/")[2] - 1;
    let work = projects[work_id];
    
    const pictures_displayed = work.imgs.map((picture) => (
        <Picture_Displayed picture={picture} key={picture.id} />
    ));

    return (
        <Container>
            <h1>WORK# {work_id}</h1>
            <p>{work.desc}</p>
            <div>{pictures_displayed}</div>
        </Container>
    );
};
  

const Container = styled.div`
    display: flex;
    margin: 1rem;
`

export default connect(({projects}) => ({projects}))(WorkExpanded);
