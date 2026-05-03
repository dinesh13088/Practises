import "./WeatherCard.css"
function WeatherCard({ weather, index }) {
    if (!weather) return null;
    const iconCode = weather.list[index].weather[0].icon
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const dateStr=weather.list[index].dt_txt
    const time = new Date(dateStr.replace(" ", "T")); 

    
    const formatted = time.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: undefined,
        hour12: true,
    })
    const date=dateStr.split(" ")[0]

    return (
        <div className="container">
            <h2>{date}</h2>
            <h3>{formatted}</h3>
            <img src={iconUrl} alt="weathericon" />
            <p>{weather.list[index].main.temp}K</p>
        </div>
    )

}
export default WeatherCard