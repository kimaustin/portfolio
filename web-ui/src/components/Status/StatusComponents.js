import styled from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.div`
    overflow: hidden;

    /* background: #fff; */
    background: inherit;
    /* transform: rotate(-90deg); */
    font-size: 2em;
    width: 9em;
    height: 1.2em;
    z-index: 999;
    display: flex;
    position: fixed;
    bottom: 1.5rem;
    /* right: 35vw; */
    left: 50vw;
    margin-left: 0.4em;
    overflow-x: hidden;
    /* border-radius: 5px; */

    /* @media screen and (max-width: 580px) {
        width: 150px;
    } */
    &:before {
        background-color: rgba(255,255,255,0.5);
        backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
        -webkit-backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
        content: "";
        height: 100%;
        position: absolute;
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        left: 0;     
        width: 7em;
        margin-left: .5em;
        bottom: 1.2rem;
    }
`

// height: 100%;
// color: black;
// /* justify-self: flex-start; */
// padding-bottom: 1rem;
// cursor: pointer;
// /* font-size: 1.5rem; */
// display: flex;
// align-items: center;
// text-decoration: none;
// position: absolute;
// left: 50vw;
// float: none;

// &:hover {
//     border-bottom: 3px solid black;
// }

// @media screen and (max-width: 768px) {
//     left: 0;     
// }

export const Marquee = styled.div`
    display: grid;
    white-space: nowrap;
    font-size: 0.5em;
    color: black;
    margin-top: 0.6rem;
    position: relative;
    
    animation: ${({starter}) => (starter ? linearText1 : linearText2)} 20s linear infinite;
    animation-delay: ${({starter}) => (starter ? '0s' : '10s')};
`

const linearText1 = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    };
` 

const linearText2 = keyframes`
    from {
        transform: translateX(-200%);
    }
    to {
        transform: translateX(0%);
    };
` 


const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    };
` 

export const RotatingIcon = styled.div`
    top: 0;
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
`