import React from 'react';
import HeaderTitle from './HeaderTitle';
import HeaderDate from './HeaderDate'

function Header(props) {
    const {nasaData} = props;

    // Display a loading message while the data is fetching
    if (!nasaData) return <h3>Loading...</h3>;

    return(
        <header>
            <HeaderTitle />
            <HeaderDate nasaData={nasaData}/>
        </header>
    )
}
  export default Header;