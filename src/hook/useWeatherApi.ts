import {useEffect, useState} from "react";
import {CallWeatherApi} from "@/api/api";
import {WeatherResponse} from "@/types/api/WeatherResponse";
import ApiStatus from "@/types/api/ApiStatus";

interface Props {
    city :string
}
interface WeatherResult {
    status:"pending"|"isLoading"|"hasError"|"isSuccess";
    response : WeatherResponse | false;
}
export function  useWeatherApi({city}:Props){

    const [response,setResponse]=useState<WeatherResponse|false>(false);
    const [status,setStatus]=useState<ApiStatus>("pending")

    const apiCall =async ()=>{
        setStatus("isLoading");
       const result = await CallWeatherApi({city:city});
        if(result === false){
            setStatus("hasError");
            return;
        }

        setStatus("isSuccess");
        setResponse(result);
    }
    useEffect(()=>{
        apiCall();
    },[city]);


    return {status,response}

}