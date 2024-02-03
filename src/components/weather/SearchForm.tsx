import React from 'react';

function SearchForm(props) {
    return (
       <div className={" w-full flex justify-center mb-8 mt-28"}>
           <form>
               <input className={" border px-8 py-4 rounded mr-3 "} type={"text"} />
               <input className={"bg-orange-300 px-8 py-4 rounded text-white "} type={"submit"} value={"Search"}/>
           </form>
       </div>
    );
}

export default SearchForm;