import {useEffect, useState} from "react";
import {WeatherResponse} from "@/types/api/WeatherResponse";
import ApiStatus from "@/types/api/ApiStatus";
import {CallWeatherApi} from "@/api/api";

interface Props <T>{
    func:(arg:T)=>{};
    params:T
}
export  default function useApiCall<s,T>({func,params}:Props<T>){

    const [response,setResponse]=useState<s|false>(false);
    const [status,setStatus]=useState<ApiStatus>("pending")

    const apiCall =async ()=>{
        setStatus("isLoading");
        const result = await func(params) ;
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