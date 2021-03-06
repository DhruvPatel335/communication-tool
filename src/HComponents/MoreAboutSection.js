import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "./SectionTitle";

import AboutImgUrl from "../assets/about_us.jpg";

const MoreAboutContainer = styled(Element)`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  @media screen and (max-width: 480px) {
    max-width: 100%;
    flex-direction: column-reverse;
  }
`;

const AboutText = styled.p`
  font-size: 21px;
  color: #2f2f2f;
  font-weight: normal;
  line-height: 1.4;
`;

const AboutImg = styled.img`
  width: 600px;
  height: 500px;
  margin-left: 2em;
  Margin-top: 1em;
  @media screen and (max-width: 480px) {
    width: 370px;
    height: 290px;
    margin-left: 0;
  }
`;

export function MoreAboutSection(props) {
  return (
    <MoreAboutContainer>
      <SectionTitle>More About Team Task</SectionTitle>
      <br/>
      <AboutContainer>
        <AboutText>
          Team Task is about managing your project work along with your 
          teammates in an organised manner. {<br />}
          {<br />} Here you can chat with them, share files, manage your task, to 
          do list, progress of your work and many more.{" "}
          {<br />}
          {<br />} You can work efficiently and effectively here, so let 
          work together for better performance !  
        </AboutText>
        <AboutImg src={AboutImgUrl} />
      </AboutContainer>
    </MoreAboutContainer>
  );
}