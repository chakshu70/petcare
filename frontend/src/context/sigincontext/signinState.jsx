import { useState,useContext } from "react";
import SignInContext from "./signinContext";

const SigninO=(props)=>{
const[User,setUser]=useState({
    isLoggedIn:null,
    userName:null
});

const signInHandler=(a,b)=>{
    console.log(a,b)
    setUser({
        isLoggedIn:a, 
        userName:b
    })
}
return(
    <SignInContext.Provider value={{User:User,signInHandler:signInHandler}}>
        {props.children}
    </SignInContext.Provider>

)
}
export default SigninO;