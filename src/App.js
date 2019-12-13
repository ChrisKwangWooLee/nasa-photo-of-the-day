// import general files and dependencies
import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';

// import child components
import Landing from './components/Landing/Landing'
import Previous from './components/Previous/Previous'

function App() {
  // set up states
  const today = new Date;
  const default_today = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() - 1}`;
  const [nasaData, setNasaData] = useState([]);
  const [date, setDate] = useState(default_today);

  // Make API request and set up state (nasaData)
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=rhKDstkI9im8qkPVZiC42tWMjKC9R61qsf0w7X3D&date=${date}`)
    .then(response => {
      console.log(response);
      setNasaData(response.data);   // object
    })
  }, [date])

  function handleDateChange(newDate) {
    setDate(newDate);
  }
  
  // Display a loading message while the data is fetching
  
  
  return (
    <div className="App">
      <Landing nasaData={nasaData} today={today}/>
      <Previous today={today} handleDateChange={handleDateChange}/>
    </div>
  );
}

export default App;