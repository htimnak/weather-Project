import {useState} from "react";
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
     let response:WeatherResponse | false = false;

    const apiCall =async ()=>{
        setIsLoading(true);
        setHasError(false);
        let response = await CallWeatherApi({city:city});

        setIsLoading(false);
        if(response === false){
            setHasError(true);
            return;
        }

    }
    apiCall();

    return {isLoading,hasError,response}

}