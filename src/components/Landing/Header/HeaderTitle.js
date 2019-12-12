import React from 'react';
import styled from 'styled-components';
function HeaderTitle(props) {
    const {today} = props;
    const Header_title = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        opaicty: 1 !important;
    `

    return(
        <Header_title className="header_title">
            <img className='NASA_logo' src="https://www.nasa.gov/favicon.ico" />
            <h1 style={{color: "white"}}>APOD {today.getFullYear()}</h1>
        </Header_title>
    )
}

export default HeaderTitle;