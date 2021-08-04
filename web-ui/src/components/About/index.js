import React from 'react';
import { Button } from '../ButtonElement';
import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, Btnwrap, ImgWrap, Img } from './AboutElements';

//TODO the const from Data.js file is passed into the component instance in Home/index.js
// so all the keys and values from that const can be accessed in here
const About = ({
  lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2
}) => {
  
  return (
    <>
      <AboutContainer lightBg={lightBg} id={id}>
        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Btnwrap>
                  <Button to="home" smooth={true} duration={500} spy={true} 
                    exact="true" offset={-80} primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0} dark2={dark ? 1 : 0}>{buttonLabel}</Button>
                </Btnwrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
}

export default About;
