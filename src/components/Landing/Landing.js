import React from 'react';

// Import child componenets
import Header from './Header/Header'
import Description from './Description/Description'
import CTA from './CTA/CTA'

// Import style files
import styled from 'styled-components';
import {Jumbotron} from 'reactstrap';

function Landing(props) {
    const {nasaData, today} = props;

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
    const LandingBg = styled.img`
      position: absolute;
      top: 0;
      height: 100vh;
      overflow: hidden;
      min-height: 1000px;
      z-index: -100;
    `
    const JumbotronContainer = styled.div`
      width: 70%;
      margin: 5% auto;
    `
    // Display a loading message while the data is fetching
    if (!nasaData) return <h3>Loading...</h3>;

    return(
      <Landing className="landing">
        <LandingBg className="landing_bg" src={nasaData.url}/>
        <JumbotronContainer>
          <Jumbotron fluid style={{background: 'rgba(29,35,53,0.5)'}}>
            <Header nasaData={nasaData} today={today}/>
            <Description nasaData={nasaData}/>
            <CTA />
          </Jumbotron>
        </JumbotronContainer>
      </Landing>
    )
  }

export default Landing;