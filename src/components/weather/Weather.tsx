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
    const[isLoading,setIsLoading]=useState(true);
    const [cityState ,setCityState] = useState(city);

    const [weatherDataState , setWeatherDataState]=useState<WeatherData>({
        city:"",
        wind:0,
        Humidity:0,
        description:"",
        icon :"",
        daily :[]

    });
    const [forecastState , setForecastState] =useState<ForecastResponse|null>(null)
    const getWeatherData = async ()=>{
        setIsLoading(true);
        let response = await CallWeatherApi({city:cityState});
        setIsLoading(false);
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
        getWeatherData();
        },[cityState]

    );
    return (
        <div className={" h-[500px] bg-white rounded-xl px-8   "}>
            <SearchForm city={cityState} setCityState={setCityState} /*getWeatherData={getWeatherData}*//>
            <hr/>
            {
                isLoading ? <p>page is loading please wait</p>:
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