import './MainCard.css'
function MainCard({ weather }) {
    if (!weather) return null;
    const iconCode = weather.list[0].weather[0].icon
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const dateStr=weather.list[0].dt_txt
    const date=dateStr.split(" ")[0]
    
    return (
        <div className="main-container">
            <img src={iconUrl} alt="weathericon" />
            <div>
                <h3>{date}</h3>
                <h1>{weather.city.name}</h1>
                <p>Temperature:{weather.list[0].main.temp}</p>
                <p>{weather.list[0].weather[0].description}</p>
            </div>
        </div>

    )

}
export default MainCard