import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SignInContext from "../context/sigincontext/signinContext";

const Second=()=>{

const a= useContext(SignInContext).User;


return(
    <>
    <div className="conatiner rounded h-60 w-full bg-white flex justify-between">


<div className=" w-full h-full  mt-2 rounded-lg border-4 flex ">

<div className="relative w-1/2 h-full  p-2">
<img src="pug3.jpg " className="h-full w-full rounded-lg "></img>

<div className="absolute top-20 left-10 w-1/3    text-white text-4xl font-title">
    Register Your Own Creche.
</div>

</div>

<div className="relative w-1/2 h-full  p-2">

<Link to="/registercreche">
<img src="pug3.jpg " className="h-full w-full rounded-lg "></img>

<div className="absolute top-20 left-10 w-1/3    text-white text-4xl font-title">
    Register Your Own Creche.
</div>
</Link>
</div>



</div>





    </div>
    </>
)

}

export default Second;