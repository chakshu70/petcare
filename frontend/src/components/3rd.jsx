import React from "react";

const Third=()=>{
return (
    <>
    <div className="container w-full bg-white mt-10 mb-10 ">
        <div className="flex justify-start">
<div className=" ml-4 text-3xl font-title text-blue-400 mb-4">
Best Creches In Your Area
</div>
</div>
<div className="flex items-center justify-between">

<div  style ={{width:285}} className=" border-2  border-x-yellow-200  bg-yellow-100 rounded-xl" role="button "  >
<img src="dd.jpg" className="h-1/2 rounded-xl"></img>
<div>
    <p>Lexi day care</p>
    <p>rating</p>
    <p>Adress</p>
<button className="bg-slate-300 text-red-500 rounded-xl">View details</button>
</div>
</div>

<div style ={{width:285}} className=" border-2  border-yellow-600 rounded-xl" role="button "  >
<img src="dd.jpg" className="h-1/2 rounded-xl"></img>
<div>
    <p>Creche Name</p>
    <p>rating</p>
    <p>Adress</p>
<button className="bg-white text-red-500 rounded-xl">View details</button>
</div>
</div>

<div  style ={{width:285}} className="border-2  border-green-600 rounded-xl" role="button "  >
<img src="dd.jpg" className="h-1/2 rounded-xl"></img>
<div>
    <p>Creche Name</p>
    <p>rating</p>
    <p>Adress</p>
<button className="bg-white text-red-500 rounded-xl">View details</button>
</div>
</div>

<div style ={{width:285}}  className=" border-2  border-green-600 rounded-xl" role="button "  >
<img src="dd.jpg" className="h-1/2 rounded-xl"></img>
<div>
    <p>Creche Name</p>
    <p>rating</p>
    <p>Adress</p>
<button className="bg-white text-red-500 rounded-xl">View details</button>
</div>
</div>

</div>
    </div>
    </>
)
}

export default Third;