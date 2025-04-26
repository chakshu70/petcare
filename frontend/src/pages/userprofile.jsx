import React from "react";
import Nav from "../components/navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import SignInContext from "../context/sigincontext/signinContext";
function UserProfilepage(){
    const [activeTab, setActiveTab] = useState("history"); // State to manage active tab
const e=useContext(SignInContext).User;


    return(
        <>
        <Nav/>
        <div className="border grid grid-cols-4">
<div className=" col-span-1  border-4 items-center h-80 ">
  {e.profilePicture ?
<img src={`${e.profilePicture}`} className="  h-40 w-40 rounded-full m-auto mt-7"></img>

:
      <img src="pug4.jpeg" className="  h-40 w-40 rounded-full m-auto mt-7"></img>

  }
    <button className="border-2 bg-green-500 text-white rounded-md px-4 py-2 mt-7">
        Change Profile Picture
        </button>
</div>
<div className=" border-4 col-span-3">
    {/* name and email */}
   <div>
    <div className=" text-3xl flex justify-start p-4 font-title text-gray-500 ">
    Hey, <p className="font-title"> 
      {e.userName}
    </p>
  
    </div>
    <div className=" text-2xl flex justify-start p-2 pt-0">
        {e.email}
    </div>
    </div>
    
 

{/* Navbar for toggling */}
<div className="flex justify-around mt-4">
            <button
              className={`px-4 py-2 ${
                activeTab === "history"
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-black"
              } rounded-md`}
              onClick={() => setActiveTab("history")}
            >
             <h1>Booking History </h1> 
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "current"
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-black"
              } rounded-md`}
              onClick={() => setActiveTab("current")}
            >
              Current Booking
              </button>
              <button className="bg-gray-200 px-4 py-4 rounded-md">
                Change Password
              </button>
              
              <button className="bg-gray-200 px-4 py-4 rounded-md">
                Logout
              </button>
          </div>

          {/* Content based on active tab */}
          <div className="mt-4">
            {activeTab === "history" && (
              <div>
                <p className="text-4xl">Booking History</p>
                {e.bookingHistory && e.bookingHistory.length > 0 ? (
                e.bookingHistory.map((booking, index) => (
                  <div key={index} className="border p-4 m-2 bg-gray-100 rounded-lg">
                    <p>Date: {booking.date}</p>
                    <p>Time: {booking.time}</p>
                    <p>Location: {booking.location}</p>
                    <p>Creche Name: {booking.crecheName}</p>
                    <p>Price: ${booking.price.toFixed(2)}</p>
                    <Link
                      to={`/biggercard?id=${booking.id}&location=${booking.location}`}
                    >
                      <button className="border-2 border-red-500 bg-red-500 text-white rounded-md px-4 py-2 mt-2">
                        Book again
                      </button>
                    </Link>
                    </div>
                ))
            ) : (
                <div>No booking history</div>
            )
            }
              </div>
            )}
            {activeTab === "current" && (
              <div>
                <p className="text-4xl">Current Booking</p>
                {e.currentBooking && e.currentBooking.length > 0 ? (
                  e.currentBooking.map((booking, index) => (
                    <div key={index} className="border p-4 m-2 bg-gray-100 rounded-lg">
                      <p>Date: {booking.date}</p>
                      <p>Time: {booking.time}</p>
                      <p>Location: {booking.location}</p>
                      <p>Creche Name: {booking.crecheName}</p>
                      <p>Price: ${booking.price.toFixed(2)}</p>
                      <Link
                        to={`/biggercard?id=${booking.id}&location=${booking.location}`}
                      >
                        <button className="border-2 border-red-500 bg-red-500 text-white rounded-md px-4 py-2 mt-2">
                          Cancel Booking
                          </button>
                      </Link>
                    </div>
                  ))
                ) : (
                  <div>No current booking</div>
                )}
              </div>
            )}
            </div>

</div>

        </div>

        </>
    )
}
export default UserProfilepage