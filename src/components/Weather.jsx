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

   

    const [country, setCountry] = useState(null)



    const handleSubmit = (event) => { //Para que no se recarge la pagina
      event.preventDefault()
  
      const city = event.target.city.value
      console.log(event)
  
      const API_KEY = "c1ade1465a6143387e518f01937ca812" 
  
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}` 
  
  
      axios.get(url)
      .then(({data}) => setCountry(data))
      .catch((err) => console.log(err))
    }




  return (
    
    <section className="text-center">

      <form onSubmit={handleSubmit}>
        <input id="city" className='border-2 border-black text-black' type="text" />
        <button className='bg-white/60'>Search</button>
      </form>


  

        <h2 className="py-3 text-2xl">{country?.name}  { weatherInfo?.name}</h2>
        <section className="grid gap-4  sm:grid-cols-[auto_auto] ">
            {/*Seccion superior */}
            <section className="bg-white/60 p-2 rounded-2xl grid grid-cols-2 items-center">
                <h4 className="col-span-2 text-xl">{weatherInfo?.weather[0].description}</h4>
                <span className="text-4xl">{resultTemp} °{isCelsius ? "C" : "F"}</span>
                <div>
                    <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" />
                </div>
            </section>

            {/*Seccion inferior */}
            <section className="bg-white/60 p-2 py-4 rounded-2xl grid grid-cols-3  items-center sm:grid-cols-1 ">
                <article className="flex gap-2 items-center">
                    <div className="w-[40px]">
                        <img src={"/public/images/wind.png"}alt="" />
                    </div>
                    <span>{weatherInfo?.wind.speed} m/s</span>
                </article>

                <article className="flex gap-2 items-center py-5">
                    <div className="w-[40px] ¿">
                        <img src={"/public/images/humidity.png"} alt="" />
                    </div>
                    <span>{weatherInfo?.main.humidity} %</span>
                </article>

                <article className="flex gap-2 items-center ">
                    <div className="w-[40px]">
                        <img src={"/public/images/pressure.png"} alt="" />
                    </div>
                    <span>{weatherInfo?.main.pressure} hPa</span>
                </article>
            </section>
        </section>
        <button onClick={HandleChangeTemp} className="mt-4 bg-white/80 text-black rounded-3xl px-9 py-2">Cambiar a {isCelsius ? "F" : "C"}</button>
    
        
        <h2 className="py-3 text-2xl">{country?.name}</h2>
        <section className="grid gap-4  sm:grid-cols-[auto_auto] ">
            {/*Seccion superior */}
            <section className="bg-white/60 p-2 rounded-2xl grid grid-cols-2 items-center">
                <h4 className="col-span-2 text-xl">{country?.weather[0].description}</h4>
                <span className="text-4xl">{resultTemp} °{isCelsius ? "C" : "F"}</span>
                <div>
                    <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" />
                </div>
            </section>

            {/*Seccion inferior */}
            <section className="bg-white/60 p-2 py-4 rounded-2xl grid grid-cols-3  items-center sm:grid-cols-1 ">
                <article className="flex gap-2 items-center">
                    <div className="w-[40px]">
                        <img src={"/public/images/wind.png"}alt="" />
                    </div>
                    <span>{country?.wind.speed} m/s</span>
                </article>

                <article className="flex gap-2 items-center py-5">
                    <div className="w-[40px] ¿">
                        <img src={"/public/images/humidity.png"} alt="" />
                    </div>
                    <span>{country?.main.humidity} %</span>
                </article>

                <article className="flex gap-2 items-center ">
                    <div className="w-[40px]">
                        <img src={"/public/images/pressure.png"} alt="" />
                    </div>
                    <span>{country?.main.pressure} hPa</span>
                </article>
            </section>
        </section>
        <button onClick={HandleChangeTemp} className="mt-4 bg-white/80 text-black rounded-3xl px-9 py-2">Cambiar a {isCelsius ? "F" : "C"}</button>
     


   
    </section>


  )
}
export default Weather