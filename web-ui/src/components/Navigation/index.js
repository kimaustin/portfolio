import React from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button2 } from '../ButtonElement';
import { Container, NavHome, NonMobile, NavDOMLink, Mobile } from './NavigationElements';

const Navigation = ({toggle}) => {
    return (
        <Container>
            <NavHome to="/main">austin kim</NavHome>
            <NonMobile>
                <NavDOMLink to="/works">work</NavDOMLink>
                <NavDOMLink to="/archive">archive</NavDOMLink>
                <NavDOMLink to="/">info</NavDOMLink>
            </NonMobile>
            <Mobile onClick={toggle}>
                <FaBars />
            </Mobile>
        </Container>
    );
};

export default Navigation;
