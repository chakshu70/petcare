import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const R7 = () => {
const params=useParams();
const [queryParams,setQueryParams]=useSearchParams();
console.log(queryParams.get("queryname"))
console.log(params);
return(
    <>
    </>
)

}


export default R7;