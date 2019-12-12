import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DatesCard from './DatesCard';

function Dates(props) {
    const {day} = props;
    const [deepNasaData, setDeepNasaData] = useState("");

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=rhKDstkI9im8qkPVZiC42tWMjKC9R61qsf0w7X3D&date=${day}`)
        .then(response => {
            console.log(response);
            setDeepNasaData(response.data);
        })
        .catch(err => {
            console.log('Error message: ', err);
        })
    },[day]);

    return(
        <div>
            <p>{day}</p>
            <DatesCard deepNasaData={deepNasaData} />
        </div>
    )
}

export default Dates;