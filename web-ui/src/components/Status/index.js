import React from 'react';
import { Container, Marquee } from './StatusComponents';

const Status = () => {
    return (
        <Container>
            {/* <RotatingIcon>❖</RotatingIcon> */}
            <Marquee starter={true}>#GraphicDesign #UI #UX #Web #Digital #Photography #Art</Marquee>
            <Marquee starter={false}>#GraphicDesign #UI #UX #Web #Digital #Photography #Art</Marquee>
        </Container>
    );
};

export default Status;
 