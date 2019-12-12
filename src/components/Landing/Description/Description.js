import React from 'react';
import styled from 'styled-components';

function Description(props) {
    const {nasaData} = props;

    // Display a loading message while the data is fetching
    if (!nasaData) return <h3>Loading...</h3>;

    const Landing_Description = styled.div`
        background: rgba(29,35,53,0.8);
        color: white;
        padding: 30px 30px;
        margin: 0 auto;
    `
    return(
        <Landing_Description className="landing-description">
            <h2 style={{fontFamily: "San Serif"}}>{nasaData.title}</h2>
            <p style={{textAlign: "left"}}>{nasaData.explanation}</p>
        </Landing_Description>
    )
}

export default Description