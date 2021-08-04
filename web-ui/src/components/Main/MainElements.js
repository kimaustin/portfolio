import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Container = styled.div`
    /* background: ${({lightBg}) => (lightBg ? 'black' : '#fff')}; */
    /* background: ${props => props.theme.bg}; */
    /* background: red; */
    height: 100%;
    /* border-left: 0.5rem solid red; */
    overflow: hidden;
`;

export const BodySection = styled.div`
    z-index: 998;
    /* height: 94%; */
    display: grid;
    /* grid-template-rows: 40px 40px 40px 40px; */
    width: 48vw;
    position: relative;
    /* margin-top: 16rem; */
    margin-top: 30vh;
    padding-bottom: 25vh;
    padding: 0 0 0 1rem;
    left: 50vw;
    font-size: 2em;

    @media screen and (max-width: 768px) {
        left: 0.1rem;
        width: 90vw;
        margin-top: 45vh;
    }
`;

export const HeaderX = styled.h1`
    font-size: ${({scrollName}) => (scrollName ? '2em' : '12em')};
    letter-spacing: ${({scrollName}) => (scrollName ? '-2px' : '-10px')};
    line-height: 83%;
    position: fixed;
    z-index: 998;
    /* color: ${({lightTxt1}) => (lightTxt1 ? '#fff' : 'black')}; */
    color: ${props => props.theme.fg};
    /* background: ${props => props.theme.bg}; */

    @media screen and (max-width: 960px) {
        transition: 0.4s all ease;
    }
`;

export const MainBio = styled.p`
    z-index: 998;
    font-style: light;
    letter-spacing: -0.5px;
    line-height: 100%;
    width: 90%;
    color: ${props => props.theme.fg};
`;

export const GDHover = styled.a`
    z-index: 997;
    width: 96%;
    /* margin-top: 1rem; */

    &:hover {
        cursor: pointer;
        background-color: yellow;
        transition: all 0.3s ease-in-out;
    }

    &:hover::after {
        content: url(imgs/Selected/Narco.png);
        transform: scale(.3);
        display: block;
        position: absolute;
        left: -50rem; 
        top: -50rem;
    }
`;

export const SDHover = styled.a`
    z-index: 997;
    width: 96%;

    &:hover {
        cursor: pointer;
        background-color: blue;
        color: white;
        transition: all 0.3s ease-in-out;
    }

    &:hover::after {
        content: url(imgs/Selected/SpotifyParty.png);
        transform: scale(.4);
        display: block;
        position: absolute;
        left: -10rem; 
        top: -10rem;
    }
`;

export const UEHover = styled.a`
    z-index: 997;
    width: 96%;

    &:hover {
        cursor: pointer;
        background-color: pink;
        transition: all 0.3s ease-in-out;
    }

    &:hover::after {
        content: url(imgs/Selected/PhotoWalk.mov);
        transform: scale(.4);
        display: block;
        position: absolute;
        left: 0; 
        top: -50rem;
    }
`;

export const ButtonWrapper = styled.div`
    z-index: 999;
    width: 7em;
    height: 2em;
    top: 2em;
    right: 1em;
    position: fixed;
    /* padding-left: -20px; */
    display: flex;
    font-size: 1em;
    /* padding: -10px auto; */
    flex-direction: column;
    align-items: center;
`;
