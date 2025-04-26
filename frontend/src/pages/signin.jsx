import React, { useState } from "react";
import { useContext,useEffect } from "react";
import SignInContext from "../context/sigincontext/signinContext";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const now = Date();
   const a=useContext(SignInContext);
   const navigate=useNavigate();

    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

function callHandeler(data,role){
    if(role==="user"){
a.signInHandler(data);
navigate('/')}
else if(role==="crecheowner"){
    a.signInHandler(data);
    navigate('/owner')
}



}


    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        fetch("http://localhost:3000/signin", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                currentPassword: password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.status === "signedin"  ) {
                    alert("Sign In Successful");
                    callHandeler(data.data,"signedin");
                    
                }
                else if (data.status === "user loggedin") {
                    alert("Already Logged In");
                    callHandeler(data.data,"user");
                }
                else if (data.status === "crecheowner loggedin") {
                    alert("creche Owner Logged In");
                    callHandeler(data.data,"crecheowner");
                }
                else {
                    alert("Sign In Failed");
                }
            })
            .catch((error) => {
                console.error("Error during sign in:", error);
                alert("An error occurred. Please try again.");
            });
    };

    return (
        <div className="bg-slate-800 w-screen h-screen flex justify-center items-center">
           
            <div className="text-white absolute top-10 left-10 font-title text-2xl">
            <Link to='/'>back to home</Link>

            </div>
           

            <div className="bg-white h-1/2 w-1/3 shadow-lg rounded-md flex flex-col">
                <div className="text-red-500 text-4xl">Sign In</div>

                <form className="flex flex-col space-y-4 p-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="shadow-xl p-2"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Update state on input change
                    />
                    <input
                        type="password"
                        className="shadow-xl p-2"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Update state on input change
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;