import {WeatherData} from "@/types/WeatherData";

interface Props{
    Weather :WeatherData
}
function WeatherInfo({Weather}:Props) {


    return (
        <div className={"flex flex-row justify-between"}>
            <div>
                <h1 className={"text-2xl"}>{Weather.city}</h1>
                <p>{Weather.description}</p>
                <p>Humidity: <span className={"text-orange-300"}>{Weather.Humidity}</span>,Wind:<span className={"text-orange-300"}>{Weather.wind}</span></p>
            </div>
            <div>
                <div id="icon"><img id="wicon" src="" alt="Weather icon"/></div>
            </div>
        </div>
    );
}

export default WeatherInfo;