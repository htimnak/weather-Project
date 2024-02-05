import {Daily, ForecastResponse} from "@/types/api/ForecastResponse";
import Weathericon from "@/components/weather/Weathericon";
interface Props{
    item: Daily
}
function ForecastItem({item}:Props) {
    return (
        <div className={"mt-4 ml-4 flex flex-col items-center"}>
            <h2>test</h2>
           <Weathericon icon={item.weather[0].icon} size={36}/>
            <div>
                <span className={"text-orange-300"}>{item.temp.min}</span>
                -
                <span className={"text-orange-300"}>{item.temp.max}</span>
            </div>
        </div>
    );
}

export default ForecastItem;