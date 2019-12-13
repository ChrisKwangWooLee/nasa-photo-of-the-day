import React, {useState} from 'react';
import styled from 'styled-components';

function Description(props) {
    const {nasaData} = props;
    const [descDisplay, setDsecDisplay] = useState(false);

    function displayHandler() {
        setDsecDisplay(!descDisplay)
    }

    const LandingDescription = styled.div`
        background: rgba(29,35,53,0.8);
        color: white;
        padding: 30px 30px;
        margin: 0 auto;
    `
    return(
        <LandingDescription className="landing-description" style={{marginBottom: "5%"}}>
            <p style={{textAlign: "left"}}>{nasaData.explanation}</p>
        </LandingDescription>
    )
}

export default Description