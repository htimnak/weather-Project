import {useEffect, useState} from "react";
import {CallWeatherApi} from "@/api/api";
import {WeatherResponse} from "@/types/api/WeatherResponse";
interface Props {
    city :string
}
interface WeatherResult {
    isLoading:boolean;
    hasError:boolean,
    response : WeatherResponse | false;
}
export function  useWeatherApi({city}:Props){
    const[isLoading,setIsLoading]=useState(true);
    const [hasError,setHasError]=useState(false);
    const [response,setResponse]=useState<WeatherResponse|false>(false);
     //let response:WeatherResponse | false = false;

    const apiCall =async ()=>{
        setIsLoading(true);
        setHasError(false);
       const result = await CallWeatherApi({city:city});
        setResponse(result);
        //console.log(response);
        setIsLoading(false);
        if(result === false){
            setHasError(true);
            return;
        }

    }
    useEffect(()=>{
        apiCall();
    },[]);


    return {isLoading,hasError,response}

}