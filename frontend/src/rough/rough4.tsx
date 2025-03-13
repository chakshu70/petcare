import React, { useState } from "react";
const Rough4:React.FC=()=>{
const [countvalue, setCountValue] = useState(0);
const decrement = () => {
    setCountValue(countvalue - 1);
};
const increment = () => {
    setCountValue(countvalue + 1);
};
return (
    <>
    <div className="">
        <button onClick={decrement}>
            
            </button>
            <div>
                <h3>{countvalue}</h3>
            </div>
            <button onClick={increment}>
                +
                </button>
             </div>
    </>
)

}
/*
FC
1> less boiler plate in code
2> no this keyword in fc
3>lifecycle methods-
4>hooks not in class component  only in FC
5>FC in trend
*/ 

export default Rough4;