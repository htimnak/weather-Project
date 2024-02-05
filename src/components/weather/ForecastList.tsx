import ForecastItem from "@/components/weather/ForecastItem";
import {Daily, ForecastResponse} from "@/types/api/ForecastResponse";
interface Props {
    forecast: ForecastResponse,
}
function ForecastList({forecast}:Props) {
    console.log(forecast.daily);
    return (
        <div className={"w-full flex flex-row gap-6"}>
            {

                 forecast.daily.map((item:Daily)=>{

                     return( <ForecastItem item={item}/>);

                 })
            }
        </div>
    );
}

export default ForecastList;