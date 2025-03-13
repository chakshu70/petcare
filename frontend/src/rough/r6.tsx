//Creating a timer in React.js using useEffect
import React, { useState, useEffect } from "react";

const R6 = () => {
  const [inputSeconds, setInputSeconds] = useState(0);
  const [currSeconds, setCurrSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {

    let intervalId = 0;
    // if (currSeconds === 0) {
    //   return;
    // }

   intervalId = setInterval(() => {

      setCurrSeconds((previousSeconds) =>{ 
        if(currSeconds==0){clearInterval(intervalId)}

        previousSeconds - 1});
      
    }, 1000);

  }, [isActive]);



  function startTimer() {
    setIsActive(true);
  }

  function setTimer() {
    setCurrSeconds(inputSeconds);
  }

  return (
    <>
      <h3 className="text-2xl front-bold">Timer</h3>
      <input
        type="number"
        placeholder="Enter time in seconds"
        className="border"
        onChange={(e) => setInputSeconds(parseInt(e.target.value))}
      />
      <button onClick={setTimer} className="border rouded-sm p-1">
        Set
      </button>
      <button onClick={startTimer} className="border rouded-sm p-1">
        Start Timer
      </button>
      <div className="">Current Time:{currSeconds}</div>
    </>
  );
};

export default R6;