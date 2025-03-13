import { useEffect, useState } from "react";
import Nav from "../components/navbar";
import Searchbar from "../components/searchbar";
import Cards from "../components/cards";
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";



function Search(){


function findlocation() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    let q = queryParams.get('location');
    return q;
}

let qa=findlocation();
let [value, setValue] = useState(qa);
let[change,setChange]=useState(false);





let previousUrl = window.location.href;

setInterval(() => {
    if (window.location.href !== previousUrl) {
        previousUrl = window.location.href;
        location.reload();
    }
}, 1000); 


return(
    <>
    <Nav className="bg-gray-800 p-4"/>
    {change}
    {/* {sc} */}
    <div className="p-4">

    <Searchbar gotlocation={value} />

    <Cards location={value} />

    </div>

    </>
)
}
export default Search;