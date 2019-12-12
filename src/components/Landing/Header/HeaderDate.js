import React from 'react';

function HeaderDate(props) {
    const {nasaData} = props;

    // Display a loading message while the data is fetching
    if (!nasaData) return <h3>Loading...</h3>;

    return(
        <div className="header_date">
            <p>{nasaData.date}</p>
        </div>
    )
}

export default HeaderDate;