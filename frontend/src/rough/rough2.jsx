import React from "react";
import { Link } from 'react-router-dom';

const Rough2=()=>{
    const e={
        name:"Lexi day care",
        displayimg:"https://assets.petbacker.com/user-images/320/u_2c08f572e6.60bd2c6f08346.jpg",
        certificate:["https://content.petbacker.com/images/cms/icons/credentials/id.png","https://content.petbacker.com/images/cms/icons/credentials/id.png","https://content.petbacker.com/images/cms/icons/credentials/id.png"],
        location:"Chandigarh",
        shortdescription:"Love to hande your furry pets.Number of pets",
        price:500,
        rating:3
    }
    
    fetch(`http://localhost:3000/search?location=${location}`).then(response => response.json())
    .then(data=>e=data) ;
return(
    <>
    <div className="grid items-center ">

    
        <div className="container flex h-48 bg-gray-100 w-5/6 mx-auto my-auto rounded-xl shadow-lg ">
            {/* Display image */}
            <div className="image-wrapper ">
                <img src={e.displayimg} alt="" className="h-full w-56 rounded-md p-1"/>
            </div>
            {/* whole content */}
            <div className="displaycontent ml-10 flex-col flex-shrink-0">
                {/* Certificates */}
                <div className="flex h-10 container">
                    {e.certificate.map((e, i) => {
                        return (
                            <div key={i}>
                                <img src={e} alt="certificate" className="h-full p-1" />
                            </div>
                        )
                    })}
                </div>
                {/* name */}
                <div className="text-blue-400 text-2xl font-bold flex justify-start">
                    {e.name}
                </div>
                {/* location */}
                
                <div className=" border-red-400 items-start flex justify-start text-l font-bold text-red-500">
                    {e.location}
                </div>

                {/* short description */}
                <div className="text-gray-500">
                    {e.shortdescription}
                </div>
                {/* Price */}
                <div className="flex justify-start text-red-600 text-xl">
                ₹{e.price} /day
                </div>

                
            </div>
{/* reviews and book now button */}
<div className="  ml-auto mr-20" >
    <div>
        

    <div className="flex items-center pb-12 ">
        {[...Array(5)].map((star, index) => {
            return (
                <span key={index} className={index < e.rating ? "text-yellow-500 text-3xl" : "text-gray-300 text-3xl"}>
                    ★
                </span>
            );
        })}
    
        </div>

<a to="/" className="bg-red-500 rounded-lg p-2  text-white ">Book now</a>


    </div>
</div>

        </div>

        </div>
    </>
)

}

export default Rough2;