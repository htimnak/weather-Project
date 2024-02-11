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
    //this is status of api
    /*const[isLoading,setIsLoading]=useState(true);
    const [hasError,setHasError]=useState(false);*/
    const [response,setResponse]=useState<WeatherResponse|false>(false);
     //let response:WeatherResponse | false = false;
    const [status,setStatus]=useState<"pending"|"isLoading"|"hasError"|"isSuccess">("pending")

    const apiCall =async ()=>{

       const result = await CallWeatherApi({city:city});
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
    },[city]);


    return {isLoading,hasError,response}

}