import ForecastItem from "@/components/weather/ForecastItem";
import {Daily, ForecastResponse} from "@/types/api/ForecastResponse";
interface Props {
    Forecast: ForecastResponse,
}
function ForecastList({Forecast}:Props) {
    return (
        <div className={"w-full flex flex-row gap-6"}>
            {
                Forecast.daily.map((item:Daily)=>{

                    return( <ForecastItem item={item}/>);

                })
            }
        </div>
    );
}

export default ForecastList;