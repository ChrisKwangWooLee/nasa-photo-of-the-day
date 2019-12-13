import React from 'react';

function DatesCard(props) {
    const {deepNasaData} = props;
    return(
        <div className="dates_card">
            <img src={deepNasaData.url} />
            <div>
                <h2>{deepNasaData.title}</h2>
                <p>{deepNasaData.explanation}</p>
            </div>
        </div>
    )
}

export default DatesCard;