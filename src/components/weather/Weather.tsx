import SearchForm from "@/components/weather/SearchForm";
import WeatherInfo from "@/components/weather/WeatherInfo";
import ForecastList from "@/components/weather/ForecastList";
import {useEffect, useState} from "react";
import {WeatherData} from "@/types/WeatherData";

import {ForecastResponse} from "@/types/api/ForecastResponse";
import {CallForecastApi, CallWeatherApi} from "@/api/api";

interface Props{
    city: string
}
function Weather({city}:Props) {

    const [weatherDataState , setWeatherDataState]=useState<WeatherData>({
        city:"",
        wind:0,
        Humidity:0,
        description:"",
        icon :"",
        daily :[]

    });
    const [forecastState , setForecastState] =useState<ForecastResponse|null>(null)
    const getWeatherData = async (city :string)=>{
        let response = await CallWeatherApi({city});

      //  console.log(response);
        const Weather:WeatherData ={
            city:response.name,
            wind:response.wind.speed,
            Humidity:response.main.humidity,
            description:response.weather[0].description,
            icon:response.weather[0].icon,
            daily :[]
        }
        setWeatherDataState(Weather);
        const ForecastResponse = await CallForecastApi({lat:response.coord.lat,lon:response.coord.lon});
        console.log(ForecastResponse.daily);
        setForecastState(ForecastResponse);


    }
    //console.log(forecastState);
    /*if(weatherDataState.city.length === 0){
        getWeatherData(city);
    }*/
    useEffect(()=>{
        getWeatherData(city);
        },[]

    );
    return (
        <div className={" h-[500px] bg-white rounded-xl px-8   "}>
            <SearchForm city={city} getWeatherData={getWeatherData}/>
            <hr/>
            <WeatherInfo Weather={weatherDataState} />
            {
                forecastState != null ? <ForecastList forecast={forecastState}/> : ''
            }

        </div>
    );
}

export default Weather;