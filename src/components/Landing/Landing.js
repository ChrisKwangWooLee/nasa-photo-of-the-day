import React, {useState} from 'react';

// Import child componenets
import Header from './Header/Header'
import Description from './Description/Description'
import CTA from './CTA/CTA'

// Import style files
import styled from 'styled-components';
import {Collapse, Button} from 'reactstrap';

function Landing(props) {
    const {nasaData, today} = props;
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);
    // Style
    const Landing = styled.div`
      position: relative;
      max-width: 1280px;
      margin: 0 auto;
      overflow: hidden;
      height: 100vh;
      background: black;
      z-index: 5;
      display: flex;
      justify-content: center;
    `
    const LandingBgImage = styled.img`
      position: absolute;
      top: 0;
      height: 100vh;
      overflow: hidden;
      min-height: 1000px;
      z-index: -100;
    `
    const LandingBgVideo = styled.iframe`
      position: absolute;
      top: 0;
      height: 100vh;
      width: 100vw;
      overflow: hidden;
      min-height: 1000px;
      z-index: -100;
      frameborder="0";
      allowfullscreen;
    `

    const JumbotronContainer = styled.div`
      width: 50%;
      margin: 5% auto;
      border: 1px solid white;
    `

    const MyJumbotron = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
    `

    return(
      <Landing className="landing">
        {nasaData.media_type === 'image' ? <LandingBgImage className="landing_bg" src={nasaData.url}/> : <LandingBgVideo classNName="landing_bg" src={nasaData.url}/>}
        <JumbotronContainer style={isOpen ? {width: "60%", margin: "5% auto", border: "1px solid white"} : {height: "0", width: "0", border: "none", marginRight: "20%"}}>
          <MyJumbotron fluid style={{background: 'rgba(29,35,53,0.6)', height: "100%"}}>
          
            <Button color="outline-light" onClick={toggle} style={{ marginBottom: '1rem', width: "100px", margin: "0 auto 1rem auto" }}>{isOpen?"Collapse":"Open"}</Button>
            <Collapse isOpen={isOpen}>
              <Header nasaData={nasaData} today={today}/>
              <Description nasaData={nasaData}/>
              <CTA />
            </Collapse>

          </MyJumbotron>
        </JumbotronContainer>
      </Landing>
    )
  }

export default Landing;