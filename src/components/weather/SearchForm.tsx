import {useState} from "react";


function SearchForm() {
    const [cityNameState,setCityNameState] = useState("");

    const changeCityNameHandler = (e)=>{
        setCityNameState(e.target.value);


    }
    const submitHandler = (e) => {
        e.preventDefault();

        console.log(cityNameState);
        setCityNameState("");
    }
    return (
       <div className={" w-full flex justify-center mb-8 mt-28"} onSubmit={submitHandler }>
           <form>
               <input className={" border px-8 py-4 rounded mr-3 "} type={"text"} value={cityNameState}  onChange={changeCityNameHandler}/>
               <input className={"bg-orange-300 px-8 py-4 rounded text-white "} type={"submit"} value={"Search"}/>
           </form>
       </div>
    );
}

export default SearchForm;