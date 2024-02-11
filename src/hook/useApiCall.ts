import {useEffect, useState} from "react";
import {WeatherResponse} from "@/types/api/WeatherResponse";
import ApiStatus from "@/types/api/ApiStatus";
import {CallWeatherApi} from "@/api/api";

interface Props <S,T>{
    func:(arg:T)=>Promise<S| false>;
    params:T;
    refresh ? :Array<any>
}
export  default function useApiCall<S,T>({func,params,refresh=[]}:Props<S,T>){

    const [response,setResponse]=useState<S|false>(false);
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
    },refresh);


    return {status,response}


}