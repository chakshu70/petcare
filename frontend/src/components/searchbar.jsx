import React from "react";
import alllocation from "../assets/locations.json"
import { Link } from 'react-router-dom';

const Searchbar=({onChange,gotlocation})=>{
let key="PetCare"
    
    const [location, setLocation] = React.useState(gotlocation ? gotlocation : "Select your location");

function isdisabled(event){
if(location==="Select your location"){

    event.preventDefault();
    alert("Please select a location");
}
}

function chooseLocation(event){
    setLocation(event.target.value);
    console.log(event.target.value);
    onChange(event.target.value); // Call the function passed from the parent
    location.reload();

}
      

    return(
        <>
        <div className="container rounded-full shadow-m" style={{backgroundColor:'rgb(245,240,230)'}}>

            <div className="flex">

                <div className="h-10 w-1/2 p-1 flex justify-between">
                    <img src="dot.svg" className="display-relative" alt="location icon" />
                   
                <select className="w-10/12 border-2 rounded-xl text-center" onChange={chooseLocation} >

                        <option value="" disabled selected>{location} </option>
                        {alllocation.map(e => (
                            <option key={e.pincode} value={e.name}>
                                {e.name}
                            </option>
        ))}
       
    
</select>

                </div>

                <div className="h-10 w-1/2  flex justify-between">
                    <img src="clock.svg" className="display-relative" alt="clock icon" />
                    <input 
                        className="w-10/12 border-2 rounded-xl" 
                        placeholder="Select Your Timing"
                    />
                </div>
                {/* {console.log(location)} */}
                {/* <Link to={`/search?location=${location}`} className="bg-red-600 h-8  text-white mt-1 p-1 ml-1 w-1/5 rounded-xl mr-1" */}
                <Link to={`/search?location=${location}`} onClick={isdisabled} className="bg-red-600 h-8  text-white mt-1 p-1 ml-1 w-1/5 rounded-xl mr-1"

                >Submit</Link>

            </div>

        </div>
        </>
    )
}

export default Searchbar;