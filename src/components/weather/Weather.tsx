import SearchForm from "@/components/weather/SearchForm";
import WeatherInfo from "@/components/weather/WeatherInfo";
import ForecastList from "@/components/weather/ForecastList";
import {useEffect, useState} from "react";
import {WeatherData} from "@/types/WeatherData";

import {ForecastResponse} from "@/types/api/ForecastResponse";
import {CallForecastApi, CallWeatherApi} from "@/api/api";
import {useWeatherApi} from "@/hook/useWeatherApi";
import {useForecastApi} from "@/hook/useForecastApi";
import ApiLoader from "@/components/share/ApiLoader/ApiLoader";

interface Props{
    city: string
}
function Weather({city}:Props) {
    const [cityState ,setCityState] = useState(city);
    const[coord,setCoord] = useState({lat:0,lon:0})
    const [forecastState , setForecastState] =useState<ForecastResponse|null>(null);
    const {status,response } =useWeatherApi({city:cityState});
    const {status:ForecastStatus,response:ForecastResponse}= useForecastApi(coord);
    useEffect(()=>{
        if(response){
            setCoord(response.coord);
        }
    },[response])
    let weather :null| WeatherData= null;
    if(response){
        weather= {
            city:response.name,
            wind:response.wind.speed,
            Humidity:response.main.humidity,
            description:response.weather[0].description,
            icon:response.weather[0].icon,
            daily :[]
        }





    }
    useEffect(()=>{
        if(ForecastResponse){
            setForecastState(ForecastResponse);
        }
    },[ForecastResponse])

    //console.log(forecastState);
    /*if(weatherDataState.city.length === 0){
        getWeatherData(city);
    }*/

    return (
        <div className={"bg-white rounded-xl px-8  w-[1000px] h-[500px]  "}>
            <SearchForm city={cityState} setCityState={setCityState} /*getWeatherData={getWeatherData}*//>
            <hr/>
            <ApiLoader status={status}>
                {weather && <WeatherInfo Weather={weather}/>}
                <ApiLoader status={ForecastStatus}>
                    { forecastState && <ForecastList forecast={forecastState}/>}
                </ApiLoader>
            </ApiLoader>



        </div>
    );
}

export default Weather;