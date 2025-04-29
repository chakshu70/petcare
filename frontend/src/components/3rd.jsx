// import React from "react";
// import { Link } from "react-router-dom";

// const Third=()=>{

// const BestCreches=[{
//     displayImage:"pug2.jpg",
//     rating:4,
//     crecheName: "Pet Oasis",
//     location: "Faridabad",
//     id:8
// },
// {
//     displayImage:"pug2.jpg",
//     rating:5,
//     crecheName:"Ambala pet care",
//     location:"Ambala",
//     id:9
// },
// {
//     displayImage:"pug2.jpg",
//     rating:4,
//     crecheName:"Pet Haven",
//     location:"Panipat",
//     id:1
// },
// {
//     displayImage:"pug2.jpg",
//     rating:4,
//     crecheName:"Karnal Pet Retreat",
//     location:"Karnal",
//     id:13
// }]

// return (
//     <>
//     <div className="container w-full bg-white mt-10 mb-10 ">
//         <div className="flex justify-start">
// <div className=" ml-4 text-5xl font-title text-orange-400 mb-4">
// Best Creches In Your Area
// </div>
// </div>


// <div className="flex items-center justify-between ">
// {BestCreches&&BestCreches.map((e,i)=>(
    
//     <div  style ={{width:285}} className=" border-2  rounded-xl" role="button "  >
// <img src={`${e.displayImage}`} className="h-1/2 rounded-xl"></img>
// <div>
//     <p>{e.crecheName}</p>
    
//     {[...Array(5)].map((star, index) => {
//             return (
//                 <span key={index} className={index < e.rating ? "text-yellow-500 text-3xl" : "text-gray-300 text-3xl"}>
//                     ★
//                 </span>
//             );
//         })}
//     <p>{e.location}</p>
//     <Link to={`/biggercard?id=${e.id}&location=${e.location}`}>
//   <button className="bg-red-300 text-white rounded-xl p-2 m-2">View details</button>
//     </Link>
// </div>
// </div>

// ))
// }





// </div>
//     </div>
//     </>
// )
// }

// export default Third;

import React from "react";
import { Link } from "react-router-dom";




const Third = () => {
let arr;

  fetch("https://dog.ceo/api/breed/hound/images").then(res=>{
    return res.json();
  }).then(res=>{
    console.log(res.message[1])
  arr=res.message[1];
  // arr[1]=res.message.african[0];
  // arr[2]=res.message.african[0];
  // arr[3]=res.message.african[0];
  })



  const BestCreches = [
    {
      displayImage:"pug4.jpeg",
      rating: 4,
      crecheName: "Pet Oasis",
      location: "Faridabad",
      id: 8
    },
    {
      displayImage: "pug2.jpg",
      rating: 5,
      crecheName: "Ambala Pet Care",
      location: "Ambala",
      id: 9
    },
    {
      displayImage: "pug5.jpg",
      rating: 4,
      crecheName: "Pet Haven",
      location: "Panipat",
      id: 1
    },
    {
      displayImage: "pug6.jpg",
      rating: 4,
      crecheName: "Karnal Pet Retreat",
      location: "Karnal",
      id: 13
    }
  ];

  return (
    <div className="w-full bg-white mt-16 mb-16 px-6">
      {/* Section heading */}
      <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-8 font-title tracking-wide transition-transform duration-300 ease-in-out hover:text-yellow-400 hover:scale-105 ">
  Best Creches In Your Area
</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {BestCreches.map((e, i) => (
            <div
              key={i}
              className="border rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-slate-50"
            >
              <img
                src={`${e.displayImage}`}
                alt={e.crecheName}
                className="h-48 w-full object-scale-down"
              />

              <div className="p-4">
                {/* Creche name */}
                <h3 className="text-lg font-semibold text-gray-800">{e.crecheName}</h3>

                {/* Star rating */}
                <div className="flex  items-center ml-14 mb-4">
                  {[...Array(5)].map((star, index) => (
                    <span
                      key={index}
                      className={
                        index < e.rating
                          ? "text-yellow-400 text-xl"
                          : "text-gray-300 text-xl"
                          
                      }

                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Location */}
                <p className="text-gray-500 mb-4">{e.location}</p>

                {/* Button */}
                <Link to={`/biggercard?id=${e.id}&location=${e.location}`}>
                  <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 rounded-xl">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Third;