import React from "react";

const Rough=()=>{
    return(
        <>
      
      <div className="flex justify-between shadow-black items-center w-1/3">
      
      <div className="flex flex-col items-center border-2 shadow-lg">
          <div className="bg-red-500  flex items-center alig">
            <img src="peakpx.jpg" className=" p-2"/>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl">bianco chair</h1>
            <h3>fabric</h3>
            <h2 className="text-red-500">$45</h2>
          </div>
        </div>
      
        <div className="flex flex-col items-center border-2 shadow-lg">
          <div className="bg-red-500 relative  flex items-center alig">
            <img src="peakpx.jpg" className="  p-2"/>
            <img src="dot.svg" className="absolute  top-3 h-7 w-10 right-0"/>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl">bianco chair</h1>
            <h3>fabric</h3>
            <h2 className="text-red-500">$45</h2>
          </div>
        </div>
      
      
        <div className="flex flex-col items-center border-2 shadow-lg">
          <div className="bg-red-500  flex items-center alig">
            <img src="peakpx.jpg" className=" p-2"/>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl">bianco chair</h1>
            <h3>fabric</h3>
            <h2 className="text-red-500">$45</h2>
          </div>
        </div>
      
      </div>
      
      
      
        </>
      )
}
export default Rough;