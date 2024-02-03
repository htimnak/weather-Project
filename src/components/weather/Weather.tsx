import SearchForm from "@/components/weather/SearchForm";
import WeatherInfo from "@/components/weather/WeatherInfo";
import ForecastList from "@/components/weather/ForecastList";

function Weather() {
    return (
        <div>
            <SearchForm/>
            <WeatherInfo/>
            <ForecastList/>
        </div>
    );
}

export default Weather;