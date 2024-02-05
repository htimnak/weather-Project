import {json} from "stream/consumers";

export default async function CallWeatherApi(Props) {
    let request = new XMLHttpRequest();

    return new Promise((resolve, reject) => {

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

        request.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=`+Props+`&appid=3dce9b1c66837262a25b3f448d354a76&units=metric`);

        request.send();
    });

    /*request.onload = function (){
        let response = JSON.parse(this.responseText);
        //console.log(response.name);
        callback(response);


    }

    request.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=`+Props+`&appid=3dce9b1c66837262a25b3f448d354a76&units=metric`);

    request.send();*/
}
