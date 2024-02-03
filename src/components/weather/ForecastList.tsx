import ForecastItem from "@/components/weather/ForecastItem";

function ForecastList() {
    return (
        <div className={"w-full flex flex-row gap-6"}>
            <ForecastItem/>
            <ForecastItem/>
            <ForecastItem/>
            <ForecastItem/>
            <ForecastItem/>
            <ForecastItem/>
            <ForecastItem/>


        </div>
    );
}

export default ForecastList;