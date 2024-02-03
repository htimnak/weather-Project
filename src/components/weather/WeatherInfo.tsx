function WeatherInfo() {
    return (
        <div className={"flex flex-row justify-between"}>
            <div>
                <h1>Tehran</h1>
                <p>Scattered clouds</p>
                <p>Humidity: <span className={"text-orange-300"}>8</span>,Wind:<span className={"text-orange-300"}>5.4km/h</span></p>
            </div>
            <div>
                <p>this is icon</p>
            </div>
        </div>
    );
}

export default WeatherInfo;