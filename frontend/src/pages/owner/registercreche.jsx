
import React, { useState } from 'react';
import { useContext } from 'react';
import SignInContext from '../../context/sigincontext/signinContext';
// import { v4 as uuidv4 } from 'uuid'
const RegisterCreche = () => {
const context = useContext(SignInContext);
let editing=false;
const fetchData = async () => {
    fetch(`http://localhost:3000/registercreche/?id=${context.id}&location=${context.location}&username=${context.username}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify({
        //     location:context.location,
        //     username:context.userName,
        //     password:context.password,
        //     id:context.id,  
        // })
    }).then((response) => {
        if(response!=null){
        editing=true;
        return response.json();

    }
        else{
            return null;
        }
    })
}
const [formData, setFormData] = useState(() => {
    const data = fetchData();
    return data ? data : {
           name: '',
        displayimg: '',
        certificate: [],
        location: '',
        shortdescription: '',
        price: '',
        rating: 0,
        ownername: '',
        allimg: [],
        fulldescription: '',
        skills: [],
        summary: '',
        noofpetswatched: '',
        petsize: [],
        pottybreaks: '',
        typeOfHome: '',
        Emergencytransport: '',
        petTypeaccepted: [],
        bookings:[],
        username: '',
        password: '',
        id:0,
    };
});

    
       const [pageNo,setpageNo]=useState(0);
    const incrementPage=()=>{
        setpageNo(pageNo+1);
    }
    const decrementPage=()=>{
        setpageNo(pageNo-1);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Here you can handle form submission, e.g., send data to an API
        fetch('http://localhost:3000/registercreche', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data:formData,
                editing:editing,}
            ),
        }).then((response) => {
            if (response.ok) {
                alert('Creche registered successfully!');
            } else {
                alert('Error registering creche:', response.statusText);
            }
        })
    };
    const petsizepic={
        "0-5kg":"icon1.png",
        "5-10kg":"icon2.png",
        "10-20kg":"icon3.png",
        "20-40kg":"icon4.png",
    }

    return (
        <>
<div>
        {/* page 1 */}
        {pageNo===0 &&(
<div className='bg-slate-600'>
    {/* Owner name */}
    <div className=' text-white text-2xl'>
Registeration Details
    </div>
    <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
    <label >Your Name</label>
    <input type="text" placeholder=' Name'   onChange={handleChange}
    name="ownername"
  className='shadow-xl rounded-md w-1/2  m-2'
  required
  value={formData.ownername}

 />
    </div>

    {/* Creche Name */}
    <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
    <label >Creche Name</label>
    <input type="text" placeholder=''   onChange={handleChange}
        name="name"

  className='shadow-xl rounded-md w-1/2  m-2'
  required
  value={formData.name}

 />
    </div>

    {/* location */}
    <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
    <label >Choose your location</label>
<select   className='shadow-xl rounded-md w-1/2  m-2' onChange={handleChange}     name="location"
>
    <option value="Yamunanagar">Yamunanagar</option>
    <option value="Panipat">Panipat</option>
    <option value="Faridabad">Faridabad</option>
    <option value="Ambala">Ambala</option>
    <option value="Karnal">Karnal</option>
    <option value="Rohtak">Rohtak</option>
    <option value="Gurugram">Gurugram</option>
    <option value="location" selected disabled>Location</option>

</select>


</div>

    {/* short description */}
    <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
    <label >Short description about you creche</label>
    <input type="text" placeholder='Short Description'   onChange={handleChange}
  className='shadow-xl rounded-md w-1/2  m-2'
  required
  value={formData.shortdescription}
  name="shortdescription"

 />
    </div>
{/* type of home */}
<div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
    <label >What is your Home type</label>

<select   className='shadow-xl rounded-md w-1/2  m-2' onChange={handleChange}     name="typeOfHome"
>
    <option value="flat">Flat</option>
    <option value="house">house</option>
    <option value="dedicatedcreche">dedicated creche</option>
    <option value="null" selected disabled>type of home</option>

</select>
</div>

    <button  className='p-2 bg-red-500 rounded-lg text-white' onClick={incrementPage}>Next</button>


</div>
        )}

{/* page 2 */}
{pageNo===1 &&(

<div className='bg-slate-600'>
<div className='flex '>
        <div><button onClick={decrementPage} className='text-white text-2xl'>Prev Page</button></div>
    </div>
{/* Pet Type Accepted */}
<div className='m-8 flex flex-col border-4 items-center justify-center rounded-md bg-slate-100 relative'>
    <label className='text-lg font-medium mb-2'>Pet Types Accepted</label>

    <div className='flex flex-wrap gap-4'>
        {['Cat', 'Dog', 'Rabbit', 'Mouse'].map((petType) => (
            <label key={petType} className='flex items-center space-x-2'>
                <input
                    type="checkbox"
                    name="petTypeaccepted"
                    value={petType}
                    onChange={(e) => {
                        const { checked, value } = e.target;
                        console.log(checked, value);
                        setFormData((prevData) => ({
                            ...prevData,
                            petTypeaccepted: checked
                                ? [...prevData.petTypeaccepted, value]
                                : prevData.petTypeaccepted.filter((type) => type !== value),
                        }));
                        }}
                    className='form-checkbox h-5 w-5 text-blue-600'
                />
                <span>{petType}</span>
            </label>
        ))}
    </div>
</div>
{/* No of pets watched */}
    <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
    <label >No of pets watched</label>
    <input type="text" placeholder='No of pets watched at once'   onChange={handleChange}
    name="noofpetswatched"
  className='shadow-xl rounded-md w-1/2  m-2'
  required
  value={formData.noofpetswatched}

 />
    </div>

    {/* pet size  */}
    <div className='m-8 flex flex-col border-4 items-center justify-center rounded-md bg-slate-100 relative'>
    <label className='text-lg font-medium mb-2'>Pet Types Accepted</label>

    <div className='flex flex-wrap gap-4'>
        {['0-5kg', '5-10kg', '10-20kg', '20-40kg'].map((petsize) => (
            <label key={petsize} className='flex items-center space-x-2'>
                <input
                    type="checkbox"
                    name="petsize"
                    value={petsize}
                    onChange={(e) => {
                        const { checked, value } = e.target;
                        console.log(checked, value);
                        setFormData((prevData) => ({
                            ...prevData,
                            petsize: checked
                                ? [...prevData.petsize, {src:petsizepic[value],
                                    weight:value} 
                                ]
                                : prevData.petsize.filter((type) => type.weight !== value ),
                        }));
                    }}
                    className='form-checkbox h-5 w-5 text-blue-600'
                />
                <span>{petsize}</span>
            </label>
        ))}
    </div>
</div>

{/* No of potty breaks */}
<div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
    <label >No of potty breaks</label>
    <input type="text" placeholder='No of breaks'   onChange={handleChange}
    name="pottybreaks"
  className='shadow-xl rounded-md w-1/2  m-2'
  required
  value={formData.pottybreaks}

 />
    </div>

    <button  className='p-2 bg-red-500 rounded-lg text-white' onClick={incrementPage}>Next</button>


</div>
)}

{/* page 3 */}
{pageNo===2 &&(

<div className='bg-slate-600'>
<div className='flex '>
        <div><button onClick={decrementPage} className='text-white text-2xl'>Prev Page</button></div>
    </div>
    {/* price   */}
    <div className='text-white text-2xl'>General Details</div>
    <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
    <label >price </label>
    <input type="text" placeholder=' Price'   onChange={handleChange}
    name="price"
  className='shadow-xl rounded-md w-1/2  m-2'
  required
  value={formData.price}

 />
    </div>
   

    {/* summary  */}
    <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
    <label >summary</label>
    <input type="text" placeholder='name'   onChange={handleChange}
        name="summary"

  className='shadow-xl rounded-md w-1/2  m-2'
  required
  value={formData.summary}

 />
    </div>

    {/* Emergency Transport */}
    <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
    <label >Emergency Transport Available</label>
<select   className='shadow-xl rounded-md w-1/2  m-2' onChange={handleChange}     name="emergencyTransport"
>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
   

</select>


</div>

    {/* full description */}
    <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
    <label >Full description about you creche</label>
    <input type="text" placeholder='Full Description'   onChange={handleChange}
  className='shadow-xl rounded-md w-1/2  m-2'
  required
  value={formData.fulldescription}
  name="fulldescription"

 />
    </div>
{/* Skills */}
{/* <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
    <label >Choose your location</label>

<select   className='shadow-xl rounded-md w-1/2  m-2' onChange={handleChange}     name="location"
>
    <option value="flat">Flat</option>
    <option value="house">house</option>
    <option value="dedicatedcreche">dedicated creche</option>
    <option value="null" selected disabled>type of home</option>

</select>
</div> */}

    <button  className='p-2 bg-red-500 rounded-lg text-white' onClick={incrementPage}>Next</button>


</div>
)}

{/* page 4 */}
{pageNo===3 &&(
<div className='bg-slate-600'>
     {/* display images */}
     <div className='flex '>
        <div><button onClick={decrementPage} className='text-white text-2xl'>Prev Page</button></div>
    </div>
     <div className='m-8 flex flex-col border-4 items-center justify-center rounded-md bg-slate-100 relative'>
            <label className='text-lg font-medium mb-2'>Upload Profile Pic</label>
            <input
                type="file"
                name="displayimg"
                
                accept="image/*"
                onChange={(e) => {
                    setFormData((prevData) => ({
                        ...prevData,
                        displayimg: e.target.files[0],
                    }))
                }}
                className='shadow-xl rounded-md w-1/2 m-2 p-2'
            />
        </div>


     { /* All images */}
        <div className='m-8 flex flex-col border-4 items-center justify-center rounded-md bg-slate-100 relative'>
            <label className='text-lg font-medium mb-2'>Upload All Images</label>
            <input
                type="file"
                name="allimg"
                multiple
                accept="image/*"
                onChange={(e) => {
                    const files = Array.from(e.target.files);
                    setFormData((prevData) => ({
                        ...prevData,
                        allimg: files,
                    }));
                }}
                className='shadow-xl rounded-md w-1/2 m-2 p-2'
            />
        </div>

        {/*Certificates  */}
        <div className='m-8 flex flex-col border-4 items-center justify-center rounded-md bg-slate-100 relative'>
            <label className='text-lg font-medium mb-2'>Upload Certificates</label>
            <input
                type="file"
                name="certificates"
                multiple
                accept="image/*"
                onChange={(e) => {
                    const files = Array.from(e.target.files);
                    setFormData((prevData) => ({
                        ...prevData,
                        certificates: files,
                    }));
                }}
                className='shadow-xl rounded-md w-1/2 m-2 p-2'
            />
        </div>
    <button  className='p-2 bg-red-500 rounded-lg text-white' onClick={incrementPage}>Next</button>

</div>
)}

{/* page 5 */}
{pageNo===4 &&(
    <div className='bg-slate-600'>
       
        {/* username */}
        <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
    <label >Set a Username </label>
    <input type="text" placeholder=' username'   onChange={handleChange}
    name="username"
  className='shadow-xl rounded-md w-1/2  m-2'
  required
  value={formData.password}

 />
    </div>

     {/* password */}
     <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
    <label >Set a Password </label>
    <input type="password" placeholder=' password'   onChange={handleChange}
    name="password"
  className='shadow-xl rounded-md w-1/2  m-2'
  required
  value={formData.username}

 />
    </div>


    <button  className='p-2 bg-red-500 rounded-lg text-white' onClick={handleSubmit}>Submit</button>



    </div>
    )}





</div>



        </>
        
    );
};

export default RegisterCreche;

{/* <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Pet Care Service Form</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                {Object.keys(formData).map((key) => (
                    <div key={key} className="flex flex-col">
                        <label className="mb-1 font-semibold" htmlFor={key}>
                            {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                        </label>
                        <input
                            type={key === 'price' || key === 'rating' || key === 'noofpetswatched' || key === 'pottybreaks' ? 'number' : 'text'}
                            name={key}
                            id={key}
                            value={formData[key]}
                            onChange={handleChange}
                            className="p-2 border border-gray-300 rounded transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:shadow-md"
                            required
                        />
                    </div>
                ))}
                <button 
                    type="submit" 
                    className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 ease-in-out transform hover:scale-105"
                >
                    Submit
                </button>
            </form>
        </div> */}