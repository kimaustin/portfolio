import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import styled from 'styled-components';
// import { keyframes } from 'styled-components';


//TODO: include 3 tags for each GD, SD, and EX for filters HERE.



const SingleWork = ({id, projectPath, title, company, type, img, imgPath, alt, shortDesc, description}) => {
    return (
        <Container>
            <IndexNum>{id}</IndexNum>
            <Title to={projectPath} imgPath={imgPath}>{title}<Image><img src={imgPath} style={{width: '80vw'}}></img></Image></Title>
            <ShortDesc>{shortDesc}</ShortDesc>
        </Container>
    );
};

const Container = styled.div`
    /* display: flex; */
    width: 100%;
    /* position: absolute; */
    /* display: grid; */
`

const IndexNum = styled.p`
    font-size: 1rem;
    position: absolute;
    margin-left: -1rem;

    @media screen and (max-width: 768px) {
        left: 0.75rem;
    }
`

const Title = styled(LinkRouter)`
    width: 50%;
    font-size: 5rem;
    text-decoration: none;
    color: black;
    line-height: 83%;
    /* position: absolute; */
    left: .5rem;
    top: -1rem;
    letter-spacing: -1px;

    @media screen and (max-width: 768px) {
        left: 16px;
    }

    &:hover {
        color: grey;
        transition: all 0.2s ease-in-out;
    }
    /* &:hover::after {
        content: url(imgs/Selected/Narco.png);
        /* content: url(${props => props.imgPath}); */
        /* content: image-set("image1x.png" 1x, "image2x.png" 2x); */
        /* width: 10vw; 
        transform: scale(.3);
        display: block;
        position: absolute;
        left: -95rem; 
        top: -30rem; */
    } */
`

const ShortDesc = styled.p`
    padding-top: 1rem;
`

const Image = styled.div`  
    display: block;
    position: fixed;
    width: 43vw;
    height: 60vh;
    left: 2rem;
    bottom: 2rem;
    color: white;
    font-size: 1rem;
    background: black;
    overflow: hidden;
    /* transition: 1s; */
    opacity: 0;
    transition: opacity 0.2s ease-in-out;

    /* background-image: ${props => props.imgPath}; */
    /* content: url(${props => props.imgPath}); */
    /* background-image: url(imgs/Selected/Narco.png); */
    /* background-size: auto; */

    ${Title}:hover & {
       /* display: block; */
       opacity: 1;
       /* transform: rotate(90deg); */
    }
`

export default SingleWork;
