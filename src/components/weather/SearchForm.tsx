import {ChangeEvent, Dispatch, FormEvent, SetStateAction, useState} from "react";
import Api from "@/api/api";
import Weather from "@/components/weather/Weather";
import {WeatherResponse} from "@/types/api/WeatherResponse";
interface Props {
    city: string,
    setCityState : Dispatch<SetStateAction<string>>
}

function SearchForm({city,setCityState}:Props) {
    const [cityNameState,setCityNameState] = useState<string>(city);

    const changeCityNameHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        setCityNameState(e.target.value);


    }
    const submitHandler = (e :FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCityState(cityNameState);
    }
    return (
       <div className={" w-full flex justify-center mb-8 mt-28"}>
           <form  onSubmit={submitHandler}>
               <input className={" border px-8 py-4 rounded mr-3 "} type={"text"} value={cityNameState}  onChange={changeCityNameHandler}/>
               <input className={"bg-orange-300 px-8 py-4 rounded text-white "} type={"submit"} value={"Search"}/>
           </form>
       </div>
    );
}

export default SearchForm;