import {json} from "stream/consumers";

export default function CallWeatherApi(Props) {
    let request = new XMLHttpRequest();
    request.onload = function (){
        let response = JSON.parse(this.responseText);
        console.log(response.name);


    }

    request.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=`+Props+`&appid=3dce9b1c66837262a25b3f448d354a76&units=metric`);

    request.send();
}
