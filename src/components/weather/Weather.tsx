import SearchForm from "@/components/weather/SearchForm";
import WeatherInfo from "@/components/weather/WeatherInfo";
import ForecastList from "@/components/weather/ForecastList";
import {useState} from "react";
import CallWeatherApi from "@/api/CallWeatherApi";
import {WeatherData} from "@/types/WeatherData";
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
    const getWeatherData = async (city :string)=>{
        let response = await CallWeatherApi({city});

        console.log(response);
        const Weather:WeatherData ={
            city:response.name,
            wind:response.wind.speed,
            Humidity:response.main.humidity,
            description:response.weather[0].description,
            icon:response.weather[0].icon,
            daily :[]
        }
        setWeatherDataState(Weather);
    }
    if(weatherDataState.city.length === 0){
        getWeatherData(city);
    }
    return (
        <div className={" h-[500px] bg-white rounded-xl px-8   "}>
            <SearchForm city={city} getWeatherData={getWeatherData}/>
            <hr/>
            <WeatherInfo Weather={weatherDataState} />
            <ForecastList/>
        </div>
    );
}

export default Weather;