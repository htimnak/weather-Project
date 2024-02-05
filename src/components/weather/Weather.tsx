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
    const [weatherIDataState , setWeatherDataState]=useState<WeatherData>({
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
    if(weatherIDataState.city.length === 0){
        getWeatherData(city);
    }
    return (
        <div className={"w-1/2 h-[500px] bg-white rounded-xl px-8   "}>
            <SearchForm weatherIn={setWeatherDataState}/>
            <hr/>
            <WeatherInfo city={city} getWeatherData={getWeatherData} />
            <ForecastList/>
        </div>
    );
}

export default Weather;