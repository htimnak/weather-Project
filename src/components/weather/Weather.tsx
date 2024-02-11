import SearchForm from "@/components/weather/SearchForm";
import WeatherInfo from "@/components/weather/WeatherInfo";
import ForecastList from "@/components/weather/ForecastList";
import {useEffect, useState} from "react";
import {WeatherData} from "@/types/WeatherData";

import {ForecastResponse} from "@/types/api/ForecastResponse";
import {CallForecastApi, CallWeatherApi} from "@/api/api";
import {useWeatherApi} from "@/hook/useWeatherApi";
import {useForecastApi} from "@/hook/useForecastApi";

interface Props{
    city: string
}
function Weather({city}:Props) {
    const [cityState ,setCityState] = useState(city);
        const[coord,setCoord] = useState({lat:0,lon:0})
    const [weatherDataState , setWeatherDataState]=useState<WeatherData>({
        city:"",
        wind:0,
        Humidity:0,
        description:"",
        icon :"",
        daily :[]

    });
    const [forecastState , setForecastState] =useState<ForecastResponse|null>(null);
    const {status,response } =useWeatherApi({city:cityState});
    const {status:ForecastStatus,response:ForecastResponse}= useForecastApi(coord);

    const getWeatherData = async ()=>{
    if(response){
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
        setCoord(response.coord);

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
    useEffect(()=>{
        getWeatherData();
        },[cityState,response]

    );
    return (
        <div className={"bg-white rounded-xl px-8  w-[1000px] h-[500px]  "}>
            <SearchForm city={cityState} setCityState={setCityState} /*getWeatherData={getWeatherData}*//>
            <hr/>
            {
                status === "isLoading" ? <p>page is loading please wait</p>:
                    status ===   "hasError" ? <p>there is an error white api</p>:
                    <>
                        <WeatherInfo Weather={weatherDataState} />
                        {
                            forecastState != null ? <ForecastList forecast={forecastState}/> : ''
                        }
                    </>
            }


        </div>
    );
}

export default Weather;