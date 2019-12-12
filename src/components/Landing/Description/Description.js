import React from 'react';

function Description(props) {
    const {nasaData} = props;

    // Display a loading message while the data is fetching
    if (!nasaData) return <h3>Loading...</h3>;

    return(
        <div className="landing-description">
            <h2>{nasaData.title}</h2>
            <p>{nasaData.explanation}</p>
        </div>
    )
}

export default Description