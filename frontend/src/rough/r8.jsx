import React, {  useEffect, useState } from 'react'
import Nav from '../components/navbar';
import{Provider, useDispatch, useSelector} from "react-redux";
import store from "../pages/store";

const BestSeller = () => {
  const count=useSelector((state)=>state.count);
  const dispatch=useDispatch();
function inc(){
  dispatch({
    type:"Increment",
  })
};
function dec(){
  dispatch({
    type:"Decrement",
  })
};


  return (
<>
<div>
  {/* for ui change use usecontext when there is a hange in onlyui on click or on change 
  for getting raw dat use redux */}
  {/* static refrence checking */}
  {count}
  
</div>

      </>
  )
}

export default BestSeller