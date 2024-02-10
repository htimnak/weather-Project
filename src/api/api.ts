import {json} from "stream/consumers";
import {WeatherResponse} from "@/types/api/WeatherResponse";
import {ForecastResponse} from "@/types/api/ForecastResponse";
import {number} from "prop-types";
import {promises} from "dns";

const baseurl = "https://api.openweathermap.org/data/2.5/";
const apikey = "3dce9b1c66837262a25b3f448d354a76";
interface WeatherProps {
    city: string
}
interface ForecastProps{
    lat:number,
    lon:number
}
export async function CallWeatherApi({city}:WeatherProps):Promise<WeatherResponse | false>  {
    await sleep(2000);
    const response = await fetch(baseurl +`weather?q=${city}&appid=${apikey}&units=metric`);
    if(response.ok){
        return await response.json();
    }else{
        return false;
    }

}
export async function CallForecastApi({lat,lon}:ForecastProps):Promise<ForecastResponse> {
    await sleep(2000);
    const response = await fetch(baseurl +`onecall?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`);
    return await response.json();
}
const sleep =(ms:number)=> new Promise ((r)=>setTimeout(r,ms));
/*request.onload = function (){
       let response = JSON.parse(this.responseText);
       //console.log(response.name);
       callback(response);


   }

   request.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=`+Props+`&appid=3dce9b1c66837262a25b3f448d354a76&units=metric`);

   request.send();*/
/*
let request = new XMLHttpRequest();
*  return new Promise((resolve, reject) => {

        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return;
            }

            if (request.status === 200) {
               // console.log('SUCCESS', request.responseText);
                let response= JSON.parse(request.responseText)
                resolve(response.result);
            } else {
                console.warn('request_error');
            }
        };

        request.open("GET", baseurl +`weather?q=${city}&appid=${apikey}&units=metric`);

        request.send();
    });*/