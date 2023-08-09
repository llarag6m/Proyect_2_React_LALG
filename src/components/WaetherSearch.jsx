import axios from "axios"
import { useState } from "react"

const WaetherSearch = () => {

    const [country, setCountry] = useState(null)

    const [isCelsius, setIsCelsius] = useState(true)
   

    const KelvinToCelsius = (tempK) =>{
       return (tempK - 273.15).toFixed(2)
    }

    const KelvinToFarenheit = (tempK) =>{
        return (((tempK - 273.15) * 9/5) + 32).toFixed(2)
    }

    const HandleChangeTempSearch = () =>{
        setIsCelsius(!isCelsius)
    }

    const resultTemp1 = isCelsius ? KelvinToCelsius(country?.main.temp) : KelvinToFarenheit(country?.main.temp)

   

    const handleSubmit = (event) => { 
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
    
    <section className="mx-6 ">
        <div>
            <p className=" text-center text-xl text-white p-3">Search cities and countries</p>  
        </div>
     <div className="h-5">
      <form onSubmit={handleSubmit} className="h-5">
        <input id="city" className='border-2 border-black text-black ' type="text" />
        <button className='bg-gray-200 text-black rounded-lg mx-4 border-x-8'>Search</button>
      </form>
    </div>
        
        <h2 className="py-3 text-2xl">{country?.name}</h2>
        <section className=" grid gap-4  sm:grid-cols-[auto_auto] ">
            {/*Seccion superior */}
            <section className=" bg-white/60 p-2 rounded-2xl grid grid-cols-2 items-center">
                <h4 className="col-span-2 text-xl">{country?.weather[0].description}</h4>
                <span className="text-4xl">{resultTemp1} °{isCelsius ? "C" : "F"}</span>
                <div>
                    <img src={`https://openweathermap.org/img/wn/${country?.weather[0].icon}@4x.png`} alt="" />
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
        <button onClick={HandleChangeTempSearch} className="mt-4 bg-white/80 text-black rounded-3xl px-9 py-2">Cambiar a {isCelsius ? "F" : "C"}</button>
    </section>
  )
}
export default WaetherSearch