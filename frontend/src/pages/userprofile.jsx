import React from "react";
import Nav from "../components/navbar";

function UserProfilepage(){
const e={
    name:"chakshu",
    email:"123@gmail.com"
}

    return(
        <>
        <Nav/>
        <div className="border grid grid-cols-4">
<div className=" col-span-1  border-4 border-e-red-500 items-center ">pic
    <img src="dd.jpg" className="  h-40 w-40 rounded-full m-auto"></img>
</div>
<div className="border col-span-3">
    <div className="border text-3xl flex justify-start p-4 ">
    Hey,I'm<p className="font-bold"> 
      {e.name}
    </p>
  
    </div>
    <div className="border text-2xl flex justify-start p-2 pt-0">
        {e.email}
    </div>

    
</div>

        </div>

        </>
    )
}
export default UserProfilepage