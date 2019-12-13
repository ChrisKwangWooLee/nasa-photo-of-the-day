import React from 'react';
import styled from 'styled-components';

function HeaderDate(props) {
    const {nasaData} = props;

    // Display a loading message while the data is fetching
    if (!nasaData) return <h3>Loading...</h3>;

    const HeaderDate = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

    return(
        <HeaderDate className="header_date">
            <h2 style={{fontFamily: "San Serif", color: "white"}}>{nasaData.title}</h2>
            <div>
                <p style={{color: "white"}}>{nasaData.date}</p>
                
            </div>
        </HeaderDate>
    )
}

export default HeaderDate;