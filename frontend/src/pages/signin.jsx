// import React, { useState } from "react";
// import { useContext,useEffect } from "react";
// import SignInContext from "../context/sigincontext/signinContext";
// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

// function SignIn() {
//     const now = Date();
//    const a=useContext(SignInContext);
//    const navigate=useNavigate();

    
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

// function callHandeler(data,role){
//     if(role==="user"){
// a.signInHandler(data);
// navigate('/')}
// else if(role==="crecheowner"){
//     a.signInHandler(data);
//     navigate('/owner')
// }



// }


//     // Handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault(); // Prevent default form submission

//         fetch("http://localhost:3000/signin", {
//             method: "POST",
//             body: JSON.stringify({
//                 username: username,
//                 currentPassword: password,
//             }),
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 if (data.status === "signedin"  ) {
//                     alert("Sign In Successful");
//                     callHandeler(data.data,"signedin");
                    
//                 }
//                 else if (data.status === "user loggedin") {
//                     alert("Already Logged In");
//                     callHandeler(data.data,"user");
//                 }
//                 else if (data.status === "crecheowner loggedin") {
//                     alert("creche Owner Logged In");
//                     callHandeler(data.data,"crecheowner");
//                 }
//                 else {
//                     alert("Sign In Failed");
//                 }
//             })
//             .catch((error) => {
//                 console.error("Error during sign in:", error);
//                 alert("An error occurred. Please try again.");
//             });
//     };

//     return (
//         <div className="bg-slate-800 w-screen h-screen flex justify-center items-center">
           
//             <div className="text-white absolute top-10 left-10 font-title text-2xl">
//             <Link to='/'>back to home</Link>

//             </div>
           

//             <div className="bg-white h-1/2 w-1/3 shadow-lg rounded-md flex flex-col">
//                 <div className="text-red-500 text-4xl">Sign In</div>

//                 <form className="flex flex-col space-y-4 p-4" onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         className="shadow-xl p-2"
//                         placeholder="Username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)} // Update state on input change
//                     />
//                     <input
//                         type="password"
//                         className="shadow-xl p-2"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)} // Update state on input change
//                     />
//                     <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default SignIn;


import React, { useState } from "react";
import { useContext } from "react";
import SignInContext from "../context/sigincontext/signinContext";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const a = useContext(SignInContext);
    const navigate = useNavigate();
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function callHandeler(data, role) {
        if (role === "user") {
            a.signInHandler(data);
            navigate('/');
        } else if (role === "crecheowner") {
            a.signInHandler(data);
            navigate('/owner');
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
                if (data.status === "signedin") {
                    alert("Sign In Successful");
                    callHandeler(data.data, "signedin");
                }
                else if (data.status === "user loggedin") {
                    alert("Already Logged In");
                    callHandeler(data.data, "user");
                }
                else if (data.status === "crecheowner loggedin") {
                    alert("Creche Owner Logged In");
                    callHandeler(data.data, "crecheowner");
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
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-screen h-screen flex justify-center items-center">
            {/* Back to Home Link */}
            <div className="text-white absolute top-10 left-10 font-semibold text-lg">
                <Link to='/' className="hover:text-blue-300 transition-colors duration-200">Back to Home</Link>
            </div>

            {/* Sign In Card */}
            <div className="bg-white w-full sm:w-96 md:w-96 lg:w-1/3 xl:w-1/4 shadow-xl rounded-2xl p-8 flex flex-col space-y-6">
                <div className="text-3xl font-bold text-center text-blue-600 mb-6">Welcome Back</div>

                {/* Form */}
                <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="shadow-lg p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Update state on input change
                    />
                    <input
                        type="password"
                        className="shadow-lg p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Update state on input change
                    />
                    <button 
                        type="submit" 
                        className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                        Sign In
                    </button>
                </form>

                {/* Forgot Password Link */}
                <div className="text-center mt-4">
                    <Link to="/forgot-password" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300">
                        Forgot Password?
                    </Link>
                </div>

                {/* Sign Up Link */}
                <div className="text-center mt-2">
                    <span className="text-sm text-gray-500">Don't have an account? </span>
                    <Link to="/signup" className="text-sm text-blue-600 hover:text-blue-700 transition-colors duration-300">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignIn;