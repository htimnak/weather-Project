import SearchForm from "@/components/weather/SearchForm";
import WeatherInfo from "@/components/weather/WeatherInfo";
import ForecastList from "@/components/weather/ForecastList";

function Weather() {
    return (
        <div className={"w-1/2 h-[500px] bg-white rounded-xl px-8   "}>
            <SearchForm/>
            <hr/>
            <WeatherInfo/>
            <ForecastList/>
        </div>
    );
}

export default Weather;