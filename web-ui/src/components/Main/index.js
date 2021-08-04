import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button2 } from '../ButtonElement';
import Navigation from '../Navigation';
import SideBar from '../SideBar';
import ReactTooltip from 'react-tooltip';
import { theme1, theme2 } from '../Themes';
import Status from '../Status';
import { Container, BodySection, HeaderX, MainBio, GDHover, SDHover, UEHover, ButtonWrapper } from './MainElements';

const Main = () => {
        
    const [scrollName, setScrollName] = useState(false);
    const [colorThemeInvert, setColorThemeInvert] = useState(false);

    const changeName = () => {
        if(window.scrollY >= 60) {
            setScrollName(true);
        } else {
            setScrollName(false);
        }   
    };

    useEffect(() => {
        window.addEventListener('scroll', changeName)
    }, []);

    return (
        <Container>
            <BodySection>
                <MainBio>Hi, I'm Austin<br></br>I’m a designer with passions in </MainBio>
                <GDHover>Graphic Design,</GDHover>
                <SDHover>Software Development, and</SDHover>
                <UEHover>User Experience</UEHover>
            </BodySection>
        </Container>
    );
};

export default Main;
