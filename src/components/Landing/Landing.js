import React, {useState} from 'react';

// Import child componenets
import Header from './Header/Header'
import Description from './Description/Description'
import CTA from './CTA/CTA'

// Import style files
import styled from 'styled-components';
import {Jumbotron, Button} from 'reactstrap';

function Landing(props) {
    const {nasaData, today} = props;

    const Landing = styled.div`
      position: relative;
      max-width: 1280px;
      margin: 0 auto;
      overflow: hidden;
      height: 100vh;
    `
    const Landing_bg = styled.img`
      position: absolute;
      top: 0;
      left: 50%;
      min-height: 1000px;
      overflow: hidden;
      z-index: -100;
    `
    const Jumbotron_container = styled.div`
      width: 70%;
      margin: 5% auto;
    `
    // Display a loading message while the data is fetching
    if (!nasaData) return <h3>Loading...</h3>;

    return(
      <Landing className="landing">
        <Landing_bg className="landing_bg" src={nasaData.url}/>
        <Jumbotron_container>
          <Jumbotron fluid style={{background: 'rgba(29,35,53,0.5)'}}>
            <Header nasaData={nasaData} today={today}/>
            <Description nasaData={nasaData}/>
            <CTA />
          </Jumbotron>
        </Jumbotron_container>
      </Landing>
    )
  }

export default Landing;