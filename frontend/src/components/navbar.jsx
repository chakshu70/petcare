// import React, { use } from "react"

// import Home from "../pages/home";
// import SignIn from "../pages/signin.jsx";
// // import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import SignInContext from "../context/sigincontext/signinContext.js";
// import { useContext } from "react";
// const Nav=()=>{
  
//  const username=useContext(SignInContext);

//   return (
//     <>
//       <div className='flex justify-between items-center p-2   text-gray-500 h-12 rounded-md mb-0 bg-opacity-10' style={{backgroundColor:'rgb(245,240,230'}} >

        
        
// <div className="flex space-x-6">

//  <Link to="/">Home</Link>
// <Link to="/contact">Contact</Link> 
// <Link to="/about">About us</Link> 



//    <div className=""> 
//     <input className="rounded-md text-black ml-9  text-center" placeholder="Search"></input>
//    </div>

  

//     </div>

//     <div className='flex justify-center items-center gap-4 px-10'>
          
  

//        {username.User.userName?
//        <Link to="/userProfile">
//        <div className="flex">
//        {username.User.profilePicture ?
// <img src={`${username.User.profilePicture}`} className="rounded-full h-10 w-10"></img>

// :
//       <img src="defaultuserpic.png" className="  rounded-full h-10 w-10"></img>

//   }
//         {/* <img src={username.User.profilePicture} className="rounded-full h-10 w-10"/> */}

//         <div className="p-2">
//        {username.User.userName}
//         </div>

//          </div>
//          </Link>
//          :
//         <div>

//           <Link to="/signin">Sign in</Link>
//           </div>
       
//        }

    
  


    

//         </div>

        
//        </div>

//              </>
//   )
// }

// // const Nav=()=>{
// //   return(
// //     <>
   

// //     </>
// //   )
// // }


// export default Nav


import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SignInContext from "../context/sigincontext/signinContext.js";

const Nav = () => {
  const username = useContext(SignInContext);

  return (
    <div className="flex justify-between items-center p-4 bg-white bg-opacity-80 shadow-md rounded-md border-2">
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-gray-700 hover:text-blue-500 transition duration-200">Home</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-500 transition duration-200">Contact</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-500 transition duration-200">About Us</Link>

        {/* <div className="relative">
          <input
            type="text"
            className="rounded-md text-black pl-3 pr-10 py-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search"
          />
          <button className="absolute right-1 top-1.5 text-gray-500 hover:text-blue-500">
            🔍
          </button>
        </div> */}
      </div>

      <div className="flex items-center gap-4">
        {username.User.userName ? (
          <Link to="/userProfile" className="flex items-center space-x-2">
            <img
              src={username.User.profilePicture || "defaultuserpic.png"}
              alt="Profile"
              className="rounded-full h-10 w-10 border border-gray-300"
            />
            <span className="text-gray-700">{username.User.userName}</span>
          </Link>
        ) : (
          <Link to="/signin" className="text-gray-700 hover:text-blue-500 transition duration-200">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
