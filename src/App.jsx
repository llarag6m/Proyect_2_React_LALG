import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";
import Loader from "./components/Loader";


function App() {

  const [weatherInfo, setWeatherInfo] = useState(null);


  const success = (pos) => {

    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
  
    console.log(pos)


    const API_KEY = "c1ade1465a6143387e518f01937ca812"

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
 

   axios.get(url)
   .then(({data}) => setWeatherInfo(data))
   .catch((err) => console.log(err))

  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  
  }, [])


  return (
    <main className=" bg-[url('/public/Fonds/fond.jpg')] text-white min-h-screen  font-lato flex justify-center  items-center bg-center bg-cover ">
      <Weather className="hidden" weatherInfo = {weatherInfo}/>
      <Loader />
    </main>
  );
}

export default App;
