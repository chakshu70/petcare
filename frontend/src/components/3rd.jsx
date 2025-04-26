import React from "react";
import { Link } from "react-router-dom";

const Third=()=>{

const BestCreches=[{
    displayImage:"pug2.jpg",
    rating:4,
    crecheName: "Pet Oasis",
    location: "Faridabad",
    id:8
},
{
    displayImage:"pug2.jpg",
    rating:5,
    crecheName:"Ambala pet care",
    location:"Ambala",
    id:9
},
{
    displayImage:"pug2.jpg",
    rating:4,
    crecheName:"Pet Haven",
    location:"Panipat",
    id:1
},
{
    displayImage:"pug2.jpg",
    rating:4,
    crecheName:"Karnal Pet Retreat",
    location:"Karnal",
    id:13
}]

return (
    <>
    <div className="container w-full bg-white mt-10 mb-10 ">
        <div className="flex justify-start">
<div className=" ml-4 text-5xl font-title text-orange-400 mb-4">
Best Creches In Your Area
</div>
</div>


<div className="flex items-center justify-between ">
{BestCreches&&BestCreches.map((e,i)=>(
    
    <div  style ={{width:285}} className=" border-2  rounded-xl" role="button "  >
<img src={`${e.displayImage}`} className="h-1/2 rounded-xl"></img>
<div>
    <p>{e.crecheName}</p>
    {/* <p>{e.rating}</p> */}
    {[...Array(5)].map((star, index) => {
            return (
                <span key={index} className={index < e.rating ? "text-yellow-500 text-3xl" : "text-gray-300 text-3xl"}>
                    ★
                </span>
            );
        })}
    <p>{e.location}</p>
    <Link to={`/biggercard?id=${e.id}&location=${e.location}`}>
  <button className="bg-red-300 text-white rounded-xl p-2 m-2">View details</button>
    </Link>
</div>
</div>

))
}



{/* <div style ={{width:285}} className=" border-2  border-yellow-600 rounded-xl" role="button "  >
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
</div> */}

</div>
    </div>
    </>
)
}

export default Third;