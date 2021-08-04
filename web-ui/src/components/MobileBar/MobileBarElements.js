import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const MobileBarContainer = styled.aside`
    overflow: hidden;

    position: fixed;
    z-index: 999;
    width: 100%;
    height: 88%;
    padding-top: 5em;
    background: #0d0d0d;
    /* display: grid; */
    display: ${({ isOpen }) => (isOpen ? 'none' : 'grid')};
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    /* opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')}; */
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    outline: none;
`;

export const MobileBarWrapper = styled.div`
    color: #fff;
`;

export const MobileBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const MobileBarRoute = styled(LinkRouter)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    /* padding: 16px 64px; */
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;