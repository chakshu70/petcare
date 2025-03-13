import React from "react";
import { useState } from "react";
const Rough3:React.FC=()=>{


    function printInput(e:React.ChangeEvent<HTMLInputElement>){
        i=e.target.value
        setInput(e.target.value);
console.log(i);
    }
    function updateValue(e:React.MouseEventHandler<HTMLButtonElement>){
        console.log(e);
            }

            const [input,setInput]=useState("");
            let i="";
    return (
        <>
        <div className="">
<input type="text" onChange={printInput} value={input}  />

<button onClick={()=>{
setInput("")
}}>
    submit
    </button>
        </div>
        </>
    )
}
export default Rough3;