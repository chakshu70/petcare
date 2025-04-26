import { useState,useContext } from "react";
import SignInContext from "./signinContext";

const SigninO=(props)=>{
const[User,setUser]=useState({
    isLoggedIn:false,
    userName:null,
    crecheOwner:false,
    email:null,
    bookingHistory:[],
    currentBooking:[],
    profilePicture:null,
});

const signInHandler=(data)=>{
    console.log(data)
    setUser({
        
        isLoggedIn: true,
        userName: data.userName,
        email: data.email,
        bookingHistory: data.bookingHistory,
        currentBooking: data.currentBooking,
        profilePicture: data.profilePicture,
        crecheOwner:data.crecheOwner
    });
console.log(User)
}
return(
    <SignInContext.Provider value={{User:User,signInHandler:signInHandler}}>
        {props.children}
    </SignInContext.Provider>

)
}
export default SigninO;