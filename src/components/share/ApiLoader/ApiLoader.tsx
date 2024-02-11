import React from 'react';
import ApiStatus from "@/types/api/ApiStatus";
interface Props{
    status:ApiStatus
}

export default  function ApiLoader({status}:Props) {
    return (
        <div>
            status === "isLoading" ? <p>page is loading please wait</p>:
            status ===   "hasError" ? <p>there is an error white api</p>:
            <>

            </>
        </div>
    );
}

