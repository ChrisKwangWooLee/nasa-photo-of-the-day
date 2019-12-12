import React, {useState} from 'react';

// Import child componenets
import Header from './Header/Header'
import Description from './Description/Description'
import CTA from './CTA/CTA'

function Landing(props) {
    const {nasaData} = props;

    // Display a loading message while the data is fetching
    if (!nasaData) return <h3>Loading...</h3>;

    return(
      <div className="landing">
        <img className="landing_bg" src={nasaData.url}/>
        <Header nasaData={nasaData} />
        <Description nasaData={nasaData}/>
        <CTA />
      </div>
    )
  }

export default Landing;