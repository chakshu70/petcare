import React from "react"
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import SignInContext from '../context/sigincontext/signinContext';
const Cards=({location})=>{
    const a=useContext(SignInContext);
        const [data, setData] = React.useState("");
        useEffect(() => {
                fetch(`http://localhost:3000/searchlocation/${(location)}`).then(response =>{ 
                    return response.json();
                }
                )
                .then(data=>{
                   
                    setData(data);
            }) ;
        },[location]);
                
console.log(data)
        return(
            <>

            {data && data.map((e, i) => (


            <div className="grid items-center p-3  ">

            <Link to={`/biggercard?id=${e.crecheid}&location=${location}`}>
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
        
        
        
        </div>
        </div>
        
        </div>
        </Link>
        </div>



             ))}
            </>
        )
}

export default Cards;




