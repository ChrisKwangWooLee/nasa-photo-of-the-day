import React, {useEffect, useState} from 'react';  

function Dates(props) {
    const {day} = props;

    return(
        <div>
            <p>{day}</p>
        </div>
    )
}

export default Dates;