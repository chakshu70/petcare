import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useParams } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import { useState } from 'react';
import ReviewBox from './reviews';
import { useContext } from 'react';
import SignInContext from '../context/sigincontext/signinContext';
import Nav from './navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function New() {

const user=useContext(SignInContext);

const [e, setE] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const params = useParams();
const [queryParams] = useSearchParams();
const navigate = useNavigate();
const a = queryParams.get('id');
const location = queryParams.get('location');


useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/biggercard?id=${a}&location=${location}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data)
            setE(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    fetchData();
}, [a, location]);

function isloggedin() {
    e.preventdefault();
    alert("please login");
    navigate("/")
}

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, backgroundColor: 'black' }} // Change color here
            onClick={onClick}
        />
    );
};

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    adaptiveHeight: true // Enable adaptive height
};

if (loading) {
    return <div>Loading...</div>;
}

if (error) {
    return <div>Error: {error}</div>;
}

if (!e) {
    return <div>No data found.</div>;
}

    return (
        <>
        <div className='grid grid-cols-4 gap-4'>

            {/* left grid */}
            <div className=" col-span-3 p-4">

            <div className='mb-2 -mt-10 w-full'>
             <Nav/>

             </div>
                {/* top name */}
                <div className="flex ">
                    <img src="dd.jpg" className="h-24 w-24 rounded-full" alt="Display" />
                    <div className="ml-12">
                        <div className="text-4xl ">{e.name}</div>
                        <div className="flex ">
                            <p className="p-2">by {e.ownername}</p>
                            <div className ="flex items-center ">
                                {[...Array(5)].map((star, index) => {
                                    return (
                                        <span key={index} className={index < e.rating ? "text-yellow-500 text-3xl" : "text-gray-300 text-3xl"}>
                                            ★
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className=" p-8 ml-auto text-3xl text-purple-500 font-serif">At INR {e.price}/day</div>
                </div>
                <hr className='m-4 '/>
                {/* location */}
                <div className="flex m-4 ">
                    <div className=""><img className="h-10" src="dot.svg" alt="" /></div>
                    <div className="p-2">{e.location}</div>
                </div>
                <hr className='m-4 '/>

                {/* photos */}
                <div>
                        <Slider {...settings}>
                            {e.allimg.map((img, index) => (
                                <img key={index} className="p-2 h-60 w-44 m-2" src={img} alt={`Slide ${index}`} />
                            ))}
                        </Slider>
                    </div>
                    <hr className='m-4' />

                {/* description */}
                
                <div className="flex flex-col  m-10 shadow-lg p-3">
                <div className='text-2xl flex flex-start m-2  text-blue-700 font-bold'>About the creche owner</div>
                    <div className='flex flex-start '>
                    {e.fulldescription}
                    </div>
                </div>
                <hr className='m-4 '/>

                  {/* accepted Pet Types */}
                  <div className='m-10 shadow-lg p-3'>
                <div className='flex flex-start felx-col'>
                  <p  className='text-2xl text-blue-700 font-bold  '>Accepted pet Types</p>  
                  </div>
                <div className="flex w-full  ">
          <ul className="flex flex-wrap justify-between w-full  p-4 rounded-lg   ">
        {e.petTypeAccepted.map((item, index) => (
          <li key={index} className="flex items-center text-lg text-gray-800 mb-2 w-1/2">
            <span className="mr-2 list-disc">•</span>
            {item}
          </li>
               ))}
               </ul>
            </div>
                 </div>
    <hr className='m-4 '/>

                {/* skills */}
                
                <div className='m-10 shadow-lg p-3'>
                <div className='flex flex-start felx-col'>
                  <p  className='text-2xl text-blue-700 font-bold  '>Skills</p>  
                  </div>
                <div className="flex w-full  ">
          <ul className="flex flex-wrap justify-between w-full  p-4 rounded-lg   ">
        {e.skills.map((item, index) => (
          <li key={index} className="flex items-center text-lg text-gray-800 mb-2 w-1/2">
            <span className="mr-2 list-disc">•</span>
            {item}
          </li>
               ))}
               </ul>
            </div>
                 </div>
                 <hr className='m-4 '/>


                 {/* About Creche */}

                 <div className='flex  m-10 flex-col  items-start shadow p-3'> 
                    <div className="text-2xl text-blue-700 font-bold   ">About {e.name}</div>
                    {/* summary */}
                    <div className='flex flex-col items-start'>
                    <div className="text-xl  mt-10 font-semibold">Summary</div>
                    <div className=" mt-3">{e.summary}</div>
                    </div>
                    <hr className='m-4 '/>


                    {/* no of pets watched at a time */}
                    <div className='flex flex-col items-start'>
                    <div className="text-xl  mt-10 font-semibold">Number of pets that will be watched at one time.</div>
                    <div className=" mt-3">{e.noofpetswatched}</div>
                    </div>
                    <hr className='m-4 '/>


                    {/* accepted pet size */}
                    <div className='flex flex-col items-start'>
                    <div className="text-xl  mt-10 font-semibold">Accepted Pet size</div>
                    <div className=" mt-3 flex justify-evenly w-full">{e.petsize.map((e,i)=>{
                        return (
                            <div key={i} className='p-5 pt-0 items-center'>
                        <img key={i} src={e.src} alt="" className='h-10 w-10 m-2'/>
                        <p>{e.weight}</p>
                            </div>
                        )
                    })}</div>
                    </div>
                    <hr className=' '/>


                    {/* no of breaks in a day */}
                    <div className='flex flex-col items-start'>
                    <div className="text-xl  mt-10 font-semibold">The numbner of potty breaks</div>
                    <div className=" mt-3">{e.pottybreaks}</div>
                    </div>

                    {/* type of home */}
                    <div className='flex flex-col items-start '>
                    <div className="text-xl  mt-10 font-semibold">Type of home i stay in</div>
                    <div className=" mt-3">{e.typeOfHome}</div>
                    </div>

                    {/* emergency transport */}
                    <div className='flex flex-col items-start'>
                    <div className="text-xl  mt-10 font-semibold">Emergency Transport</div>
                    <div className=" mt-3">{e.EmergencyTransport}</div>
                    </div>

                 </div>
                 <hr className='m-4 '/>

                 {/* Reviews */}
                 <div className='m-10 border rounded-lg '>
                    <div className='text-2xl flex flex-start m-2 text-blue-700 font-bold '>Reviews</div>
                    <div className='flex flex-start align-start m-auto'>
                    <ReviewBox  prereviews={e.reviews} crecheName={e.name} location={location}  />

                    </div>

                    </div>
                    <hr/>


                {/* left grid end */}   
                </div>

{/* right grid */}
<div className="fixed  right-4  bg-white border  shadow-lg h-full top-0  overflow-y-auto ">
<div className='border'>
    <div className=' bg-slate-200 h-14 text-3xl text-center'> Services and Rates</div>
  
    
   { /* Book Now */}
        <div className=" items-center mt-4">
            <div className='flex'>
            <img src="bookicon.png" alt="" className='h-14 p-2' />
             <div className="  p-3 text-2xl text-gray-400">Make a reservation </div>
             </div>

             <div className=" text-l text-gray-400    ">Book a place for your pet now</div>
             <Link to={user.User.isLoggedIn ? "/booking" : "/"} 
                   onClick={(e) => {
                       if (!user.User.isLoggedIn) {
                           e.preventDefault();
                           alert("Please sign in");
                           navigate("/");
                       }
                   }} 
                   state={{ id: e.crecheid, location: location }}>
             <button className="bg-purple-500 text-white text-2xl m-4 p-2">Book now</button>
        </Link>

        </div>
        <hr className='m-4 '/>

        {/* Talk and Greet */}
    <div className=" items-center">
        <div className='flex'>
        <img src="talk andgreet.png" alt="" className='h-16' />
         <div className="  p-4 text-2xl text-gray-400">Talk and Greet</div>
         </div>

         <div className=" text-l text-gray-400    ">Get to know each other first</div>
         <button className="bg-purple-500 text-white text-2xl m-4 p-2">
            <Link to="/contact">
            Contact now
            </Link>
            </button>
    </div>

</div>
                {/* end */}
                </div>
            </div>
        </>
    );
}

export default New;

