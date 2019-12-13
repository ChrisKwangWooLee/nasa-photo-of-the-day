import React from 'react';
import styled from 'styled-components';
function HeaderTitle(props) {
    const {today} = props;
    const HeaderTitle = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        opaicty: 1 !important;
    `

    return(
        <HeaderTitle className="header_title">
            <img className='NASA_logo' src="https://www.nasa.gov/favicon.ico" alt="NASA APOD"/>
            <h1 style={{color: "white"}}>APOD {today.getFullYear()}</h1>
        </HeaderTitle>
    )
}

export default HeaderTitle;