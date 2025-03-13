import React from "react";
import Searchbar from "./searchbar";
const Top=()=>{
return(
    <>
    <div className="container">
<div >


<div className="relative w-full h-full ">
    <img src="/dd.jpg" className="w-full h-full   "></img>
</div>

<div className="absolute top-20   flex flex-col items-center left-36">
    <div className="text-white   right-36 text-7xl mb-4 mt-6 font-title  w-96">
    Pet Care
    </div>

    <div className="h-15 w-1/3 mt-2  text-2xl font-sans text-white">
We care for you!
</div>

<div className=" mt-20 ml-6">
<Searchbar  />
</div>

</div>


</div>

    </div>
    
    </>
)


}

export default Top