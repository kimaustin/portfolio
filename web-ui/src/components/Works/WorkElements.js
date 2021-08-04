import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    /* overflow: hidden; */

    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    padding-top: 2rem;
    /* background: red; */
    /* width: 48vw; */
`

export const FiltersContainer = styled.div`
    width: 45vw;
    position: fixed;
    display: flex;
    /* grid-template-columns: 1fr 1fr 1fr; */
    /* padding-top: 1rem; */
    padding-left: 2rem;
    /* left: 10rem; */
    font-size: 2rem;
    overflow-x: hidden;

    @media screen and (max-width: 768px) {
        padding-left: 0.5rem;
        font-size: 1.3rem;
        width: 98vw;
    }
`

export const Filter = styled.div`
    /* display: grid; */
    /* width: 30rem; */
    padding: .5em;
    border: .1em solid black;
    border-radius: 70px;
    cursor: pointer;
    margin-bottom: 1rem;
    /* color: pink; */

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${props => props.bgColor};
        color: white;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: .5rem;
    }
`

export const WorkList = styled.ul`
    /* position: relative; */
    padding-left: 50vw;
    display: grid;
    /* overflow-y: scroll; */
    /* position: absolute; */
    width: 100%;
    /* list-style: none; */
    /* right: 1rem;
    top: 4rem; */

    @media screen and (max-width: 768px) {
        left: 0.5rem;
        /* width: 50vw; */
        padding-top: 6rem;
    }
`

export const ProjectItem = styled.div`
    display: grid;
    margin-bottom: 2rem;
    width: 100%;

    @media screen and (max-width: 768px) {
        border-bottom: 3px solid green;
    }
`
