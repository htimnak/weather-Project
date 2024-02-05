import {WeatherData} from "@/types/WeatherData";
import Weathericon from "@/components/Weathericon";
import weather from "@/components/weather/Weather";

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
                <Weathericon icon={Weather.icon} size={85}/>
            </div>
        </div>
    );
}

export default WeatherInfo;