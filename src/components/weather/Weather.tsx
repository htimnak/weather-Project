import SearchForm from "@/components/weather/SearchForm";
import WeatherInfo from "@/components/weather/WeatherInfo";
import ForecastList from "@/components/weather/ForecastList";
import {useState} from "react";

function Weather() {
    const [weatherIDataState , setWeatherDataState]=useState<WeatherData>({
        city:"",
        wind:"",
        Humidity:"",
        description:"",
        daily :[]

    });
    return (
        <div className={"w-1/2 h-[500px] bg-white rounded-xl px-8   "}>
            <SearchForm weatherIn={setWeatherDataState}/>
            <hr/>
            <WeatherInfo/>
            <ForecastList/>
        </div>
    );
}

export default Weather;