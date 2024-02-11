import {useEffect, useState} from "react";
import {CallForecastApi, CallWeatherApi} from "@/api/api";
import {ForecastResponse} from "@/types/api/ForecastResponse";
interface Props {
    city :string
}
interface WeatherResult {
    status:"pending"|"isLoading"|"hasError"|"isSuccess";
    response : ForecastResponse | false;
}
export function  useWeatherApi({lat,lon}:Props){
    //this is status of api
    /*const[isLoading,setIsLoading]=useState(true);
    const [hasError,setHasError]=useState(false);*/
    const [response,setResponse]=useState<ForecastResponse|false>(false);
    //let response:WeatherResponse | false = false;
    const [status,setStatus]=useState<"pending"|"isLoading"|"hasError"|"isSuccess">("pending")

    const apiCall =async ()=>{
        const result = await CallForecastApi({lat:lat,lon:lon});
        setStatus("isLoading");

        //console.log(response);

        if(result === false){
            setStatus("hasError");
            return;
        }

        setStatus("isSuccess");
        setResponse(result);


    }
    useEffect(()=>{
        apiCall();
    },[lat,lon]);


    return {status,response}

}