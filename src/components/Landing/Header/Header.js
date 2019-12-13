import React from 'react';
import HeaderTitle from './HeaderTitle';
import HeaderDate from './HeaderDate'

function Header(props) {
    const {nasaData, today} = props;

    return(
        <header>
            <HeaderTitle today={today} nasaData={nasaData}/>
            <HeaderDate nasaData={nasaData}/>
        </header>
    )
}
  export default Header;