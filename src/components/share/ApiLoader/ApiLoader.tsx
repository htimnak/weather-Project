import React from 'react';
import ApiStatus from "@/types/api/ApiStatus";
interface Props{
    status:ApiStatus;
    children:React.ReactNode
}

export default  function ApiLoader({status,children}:Props) {
    return (
        <>
            {
                status === "isLoading" ? <p>page is loading please wait</p>:
                status ===   "hasError" ? <p>there is an error white api</p>:
                children
            }

        </>
    );
}

