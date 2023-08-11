import { useState } from "react"
import axios from "axios";



const Weather = ({weatherInfo}) => {
    

    const [isCelsius, setIsCelsius] = useState(true)
   

    console.log(weatherInfo)

    const KelvinToCelsius = (tempK) =>{
       return (tempK - 273.15).toFixed(2)
    }

    const KelvinToFarenheit = (tempK) =>{
        return (((tempK - 273.15) * 9/5) + 32).toFixed(2)
    }

    const HandleChangeTemp = () =>{
        setIsCelsius(!isCelsius)
    }

    const resultTemp = isCelsius ? KelvinToCelsius(weatherInfo?.main.temp) : KelvinToFarenheit(weatherInfo?.main.temp)
   



  return (
    
    <section className="text-center">

  <h1 className="text-3xl"> Current location </h1>

        <h2 className="py-3 text-2xl">{weatherInfo?.sys.country}  { weatherInfo?.name}</h2>
        <section className="grid gap-4  sm:grid-cols-[auto_auto] ">
            {/*Seccion superior */}
            <section className="bg-white/20  p-2 rounded-2xl grid grid-cols-2 items-center">
                <h4 className="col-span-2 text-xl">{weatherInfo?.weather[0].description}</h4>
                <span className="text-4xl">{resultTemp} °{isCelsius ? "C" : "F"}</span>
                <div>
                    <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" />
                </div>
            </section>

            {/*Seccion inferior */}
            <section className="bg-white/20  p-2 py-4 rounded-2xl grid grid-cols-3  items-center sm:grid-cols-1 ">
                <article className="inline-grid items-center">
                    <div className="w-[40px]">
                        <img src={"/images/wind.png"}alt="" />
                    </div>
                    <span>{weatherInfo?.wind.speed} m/s</span>
                </article>

                <article className="flex gap-2 items-center py-5">
                    <div className="w-[40px] ¿">
                        <img src={"/images/humidity.png"} alt="" />
                    </div>
                    <span>{weatherInfo?.main.humidity} %</span>
                </article>

                <article className="flex gap-2 items-center ">
                    <div className="w-[40px]">
                        <img src={"/images/pressure.png"} alt="" />
                    </div>
                    <span>{weatherInfo?.main.pressure} hPa</span>
                </article>
            </section>
        </section>
        <button onClick={HandleChangeTemp} className="mt-4 bg-white/80 text-black rounded-3xl px-9 py-2 mb-5">Switch to{isCelsius ? "F" : "C"}</button>

    </section>


  )
}
export default Weather