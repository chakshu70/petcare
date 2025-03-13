function SignIn(){
  function handleSubmit(){
    let u=document.getElementById("username").value;
    let p=document.getElementById("password").value;
    fetch("http://localhost:3000/signin",{
      method: "POST",
      body: JSON.stringify({
        username: u,
        password: p
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json()).then(data => {
      if(data.status === "success"){
        alert("Sign In Successful");
        window.location.href = "/";
      } else {
        alert("Sign In Failed");
      }
    });
  }
  return (
    <div className="bg-slate-800 w-screen h-screen flex justify-center items-center">
<a href="/" className="text-white absolute top-10 left-10 font-title text-2xl">Back to Home</a>
      
      <div className="bg-white h-1/2 w-1/3 shadow-lg rounded-md flex flex-col  ">
      <div className="text-red-500 text-4xl">Sign In</div>

  <form className="flex flex-col space-y-4 p-4">
    <input type="text" className="shadow-xl p-2" placeholder="Username" id="username"/>
    <input type="password" className="shadow-xl p-2" placeholder="Password" id="password"/>
    <button type="submit" className="bg-blue-500 text-white p-2 rounded" onClick={handleSubmit}>Submit</button>
  </form>
      </div>

    </div>
  );
}
export default SignIn;