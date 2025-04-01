import React from "react"

import Home from "../pages/home";
import SignIn from "../pages/signin.jsx";
// import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignInContext from "../context/sigincontext/signinContext.js";
import { useContext } from "react";
const Nav=()=>{
  
 const username=useContext(SignInContext);

  return (
    <>
      <div className='flex justify-between items-center p-2   text-gray-500 h-12 rounded-md mb-0 bg-opacity-10' style={{backgroundColor:'rgb(245,240,230'}} >

        
        
<div className="flex space-x-6">

 <Link to="/">Home</Link>
<Link to="/contact">Contact</Link> 
<Link to="/contact">About us</Link> 



   <div className=""> 
    <input className="rounded-md text-black ml-9  text-center" placeholder="Search"></input>
   </div>

  

    </div>

    <div className='flex justify-center items-center gap-4 px-10'>
          
  

       {username.User.userName?
       <div className="flex">
        <img src="d2.jpg" className="rounded-full h-10 w-10"/>

        <div className="p-2">
       {username.User.userName}
        </div>

         </div>
         
         :
        <div>

          <Link to="/signin">Sign in</Link>
          </div>
       
       }

    
  


    

        </div>

        
       </div>

             </>
  )
}

// const Nav=()=>{
//   return(
//     <>
   

//     </>
//   )
// }


export default Nav
