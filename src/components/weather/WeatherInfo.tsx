function WeatherInfo() {
    let iconcode ="10d";
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

    return (
        <div className={"flex flex-row justify-between"}>
            <div>
                <h1>Tehran</h1>
                <p>Scattered clouds</p>
                <p>Humidity: <span className={"text-orange-300"}>8</span>,Wind:<span className={"text-orange-300"}>5.4km/h</span></p>
            </div>
            <div>
                <div id="icon"><img id="wicon" src="" alt="Weather icon"/></div>
            </div>
        </div>
    );
}

export default WeatherInfo;