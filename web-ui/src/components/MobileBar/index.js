import React from 'react';
import { MobileBarContainer, Icon, CloseIcon, MobileBarWrapper, MobileBarMenu, MobileBarRoute } from './MobileBarElements'

const MobileBar = ({isOpen, toggle}) => {
    return (
        <MobileBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <MobileBarWrapper>
                <MobileBarMenu>
                    <MobileBarRoute to="/main" onClick={toggle}>work</MobileBarRoute>
                    <MobileBarRoute to="/archive" onClick={toggle}>archive</MobileBarRoute>
                    <MobileBarRoute to="/info" onClick={toggle}>info</MobileBarRoute>
                </MobileBarMenu>
            </MobileBarWrapper>
        </MobileBarContainer>
    )
};

export default MobileBar; 
