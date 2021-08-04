import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Container = styled.div`
    position: sticky;
    height: 2em;
    display: flex;
    justify-content: space-between;
    z-index: 900;
    top: 1em;
    margin: 1em;
    font-size: 1rem;
`;

export const NavHome = styled(LinkRouter)`
    height: 100%;
    color: black;
    /* justify-self: flex-start; */
    /* padding-bottom: 0.5rem; */
    margin-left: -.5rem;
    padding-left: .5rem;
    padding-right: .5rem;
    cursor: pointer;
    /* font-size: 1.5rem; */
    display: flex;
    align-items: center;
    text-decoration: none;
    position: absolute;
    left: 50vw;
    float: none;
    border: 1px solid black;
    border-radius: 70px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: black;
        color: white;
    }

    @media screen and (max-width: 768px) {
        left: 0.1rem;
        font-size: 1.5rem;
    }
`;

export const NavDOMLink = styled(LinkRouter)`
    /* margin-bottom: 1em; */
    padding: .4rem .5rem .4rem .5rem;
    color: black;
    display: flex;
    align-items: left;
    text-decoration: none;
    height: 100%;
    cursor: pointer;

    border: 1px solid black;
    border-radius: 70px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: black;
        color: white;
    }
`;

export const NonMobile = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    /* text-align: right; */
    position: absolute;
    justify-content: space-between;
    right: 0;
    height: 100%;

    /* margin-right: -22px; */

    @media screen and (max-width: 768px) {
        display: none;       
    }
`;

export const Mobile = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        padding: 0;
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1.5rem;
        cursor: pointer;
        color: black;
    }
`;