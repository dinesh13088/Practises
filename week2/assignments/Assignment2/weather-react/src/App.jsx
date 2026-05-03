import { useState } from "react";
import SearchForm from "./components/SearchForm.jsx";
import MainCard from "./components/MainCard.jsx";
import WeatherCard from "./components/ WeatherCard.jsx";
import "./App.css"

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const getWeather = async (city) => {
    setLoading(true)
    setError("")
    setWeather(null)

    try {

      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`)
      if (!response.ok) {
        throw new Error("city not found")
      }
      const data = await response.json()
      setWeather(data)
      console.log(data)
    }
    catch (err) {
      setError("failed to fetch weather data")
    }
    finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(city)
  }

  return (
    <>
      <SearchForm city={city} setCity={setCity} handleSubmit={handleSubmit} />

      {loading && (<p className="loading">loading Weather dat...</p>)}
      {error && <p className="error">{error}</p>}

      {weather && !loading &&
        (
          <>
            <MainCard weather={weather} />
            <div className="wrapper">
              {
              [1,2,3,4,5].map((index)=>(<WeatherCard key={index} index={index} weather={weather}/>))
              }
            </div>
          </>)

      }




    </>
  );
}

export default App;