import React from 'react';

function SearchForm(props) {
    let CityName ="";
    const onchangeHandler = (e)=>{

        CityName = e.target.value;

    }
    const onSubmitHandler = () => {
        console.log(CityName);
    }
    return (
       <div className={" w-full flex justify-center mb-8 mt-28"}>
           <form>
               <input className={" border px-8 py-4 rounded mr-3 "} type={"text"}  onChange={onchangeHandler}/>
               <input className={"bg-orange-300 px-8 py-4 rounded text-white "} type={"submit"} value={"Search"} onSubmit={onSubmitHandler}/>
           </form>
       </div>
    );
}

export default SearchForm;