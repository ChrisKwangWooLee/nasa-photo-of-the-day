import React from 'react';
import styled from 'styled-components';
import {Spinner} from 'reactstrap';

function HeaderTitle(props) {
    const {today, nasaData} = props;
    const HeaderTitle = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        opaicty: 1 !important;
    `
    if(nasaData.length === 0) {
        return (
            <div>
                <HeaderTitle className="header_title">
                    <img className='NASA_logo' src="https://www.nasa.gov/favicon.ico" alt="NASA APOD"/>
                    <h1 style={{color: "white", marginLeft: "1%"}}>APOD of {today.getFullYear()}</h1>
                </HeaderTitle>
                <Spinner type="grow" color="light" />
                <Spinner type="grow" color="light" />
                <Spinner type="grow" color="light" />
            </div>
        )
      }

    return(
        <div>
            <HeaderTitle className="header_title">
                <img className='NASA_logo' src="https://www.nasa.gov/favicon.ico" alt="NASA APOD"/>
                <h1 style={{color: "white", marginLeft: "1%"}}>APOD of {today.getFullYear()}</h1>
            </HeaderTitle>
        </div>
    )
}

export default HeaderTitle;