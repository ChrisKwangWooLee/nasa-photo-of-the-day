import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DatesCard from './DatesCard';

// HTTP Call Function
// function useHttpCall(url) {
//     const [nasaNewData, setNasaNewData] = useState(null);
//     const [error, setError] = useState(null);
    
//     useEffect(() => {
//       axios
//         .get(url)
//         .then(response => {
//             setNasaNewData(response.data);
//         })
//         .catch(err => {
//           if (!url) {
//             setError(null);
//           } else {
//             setError(error);
//           }
//         });
//     }, [url]);
//     return { nasaNewData, error };
//   }

//   function Dates(props) {
//     const {day} = props;

//     const [modalShow, setModalShow] = useState(false);
//     const [endpoint, setEndpoint] = useState(null);
  
//     const { nasaNewData, error } = useHttpListCall(endpoint);
  
//     const handleClick = () => {
//       setModalShow(true);
//       setEndpoint(`https://api.nasa.gov/planetary/apod?api_key=rhKDstkI9im8qkPVZiC42tWMjKC9R61qsf0w7X3D&date=${day}`);
//     };
  
//     console.log(endpoint, nasaNewData, error);
  
//     return (
//       <React.Fragment>
//         <div>
//           <button onClick={handleClick}>Show modal of Github users</button>
//         </div>
//         {modalShow && nasaNewData && !error && (
//           <div>
//             {nasaNewData.map(user => {
//               return <div key={user.id}>{user.login}</div>;
//             })}
//           </div>
//         )}
//       </React.Fragment>
//     );
//   };
  

function Dates(props) {
    const {day} = props;
    // const [deepNasaData, setDeepNasaData] = useState("");

    function handleAPIrequest() {
    // useEffect(() => {
    //     axios.get(`https://api.nasa.gov/planetary/apod?api_key=rhKDstkI9im8qkPVZiC42tWMjKC9R61qsf0w7X3D&date=${day}`)
    //     .then(response => {
    //         console.log(response);
    //         setDeepNasaData(response.data);
    //     })
    //     .catch(err => {
    //         console.log('Error message: ', err);
    //     })
    // },[day]);
    }

    return(
        <div>
            <p>{day}</p>
            {/* <DatesCard deepNasaData={deepNasaData} /> */}
        </div>
    )
}

export default Dates;