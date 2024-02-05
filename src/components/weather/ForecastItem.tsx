import {Daily, ForecastResponse} from "@/types/api/ForecastResponse";
interface Props{
    item: Daily
}
function ForecastItem({item}:Props) {
    return (
        <div className={"mt-4 ml-4 flex flex-col items-center"}>
            <h2>{}</h2>
            <p>this is icon</p>
            <p><span className={"text-orange-300"}>32</span>-<span className={"text-orange-300"}>39</span></p>
        </div>
    );
}

export default ForecastItem;