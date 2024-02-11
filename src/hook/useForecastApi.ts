import {useEffect, useState} from "react";
import {CallForecastApi, CallWeatherApi} from "@/api/api";
import {ForecastResponse} from "@/types/api/ForecastResponse";
import {number} from "prop-types";
interface ForecastProps{
    lat:number,
    lon:number
}
interface WeatherResult {
    status:"pending"|"isLoading"|"hasError"|"isSuccess";
    response : ForecastResponse | false;
}
export function  useForecastApi({lat,lon}:ForecastProps){
    //this is status of api
    /*const[isLoading,setIsLoading]=useState(true);
    const [hasError,setHasError]=useState(false);*/
    const [response,setResponse]=useState<ForecastResponse|false>(false);
    //let response:WeatherResponse | false = false;
    const [status,setStatus]=useState<"pending"|"isLoading"|"hasError"|"isSuccess">("pending")

    const apiCall =async ()=>{
        const result = await CallForecastApi({lat,lon});
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