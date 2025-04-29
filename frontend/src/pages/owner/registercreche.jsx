// import React, { useState } from 'react';
// import { useContext } from 'react';
// import SignInContext from '../../context/sigincontext/signinContext';
// import { useNavigate } from 'react-router-dom';

// // import { v4 as uuidv4 } from 'uuid'
// const RegisterCreche = () => {
// const context = useContext(SignInContext);
// let editing=false;
// const navigate=useNavigate();
// // const fetchData = async () => {
// //     fetch(`http://localhost:3000/registercreche/?id=${context.id}&location=${context.location}&username=${context.username}`,{
// //         method: 'GET',
// //         headers: {
// //             'Content-Type': 'application/json',
// //         },
// //     }).then((response) => {
// //         if(response!=null){
// //         editing=true;
// //         return response.json();

// //     }
// //         else{
// //             return null;
// //         }
// //     })
// // }
// const [formData, setFormData] = useState(() => {
//     // const data = fetchData();
//     // return data
//     //     ? data
//         // :
//          return {
//               name: '',
//               displayimg: '',
//               certificate: [],
//               location:'',
//               shortdescription: '',
//               price: '',
//               rating: 0,
//               ownername: '',
//               allimg: [],
//               fulldescription: '',
//               skills: [],
//               summary: '',
//               noofpetswatched: '',
//               petsize: [],
//               pottybreaks: '',
//               typeOfHome: '',
//               Emergencytransport: '',
//               petTypeaccepted: [], // Initialize as an empty array
//               bookings: [],
//               username: '',
//               password: '',
//               id: 0,
//           };
// });

    
//        const [pageNo,setpageNo]=useState(0);
//     const incrementPage=()=>{
//         setpageNo(pageNo+1);
//     }
//     const decrementPage=()=>{
//         setpageNo(pageNo-1);
//     }

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);
//         // Here you can handle form submission, e.g., send data to an API
//         fetch('http://localhost:3000/registercreche', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 data:formData,
//                 editing:editing,}
//             ),
//         }).then((response) => {
//             if (response.ok) {
//                 alert('Creche registered successfully!');
// navigate("/")
//             } else {
//                 alert('Error registering creche:', response.statusText);
//             }
//         })
//     };
//     const petsizepic={
//         "0-5kg":"icon1.png",
//         "5-10kg":"icon2.png",
//         "10-20kg":"icon3.png",
//         "20-40kg":"icon4.png",
//     }

//     return (
//         <>
// <div>
//         {/* page 1 */}
//         {pageNo===0 &&(
// <div className='bg-slate-600'>
//     {/* Owner name */}
//     <div className=' text-white text-2xl'>
// Registeration Details
//     </div>
//     <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
//     <label >Your Name</label>
//     <input type="text" placeholder=' Name'   onChange={handleChange}
//     name="ownername"
//   className='shadow-xl rounded-md w-1/2  m-2'
//   required
//   value={formData.ownername}

//  />
//     </div>

//     {/* Creche Name */}
//     <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
//     <label >Creche Name</label>
//     <input type="text" placeholder=''   onChange={handleChange}
//         name="name"

//   className='shadow-xl rounded-md w-1/2  m-2'
//   required
//   value={formData.name}

//  />
//     </div>

//     {/* location */}
//     <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
//     <label >Choose your location</label>
// <select   className='shadow-xl rounded-md w-1/2  m-2' onChange={handleChange}     name="location"
// >
//     <option value="Yamunanagar">Yamunanagar</option>
//     <option value="Panipat">Panipat</option>
//     <option value="Faridabad">Faridabad</option>
//     <option value="Ambala">Ambala</option>
//     <option value="Karnal">Karnal</option>
//     <option value="Rohtak">Rohtak</option>
//     <option value="Gurugram">Gurugram</option>
//     <option value="location" selected disabled>Location</option>

// </select>


// </div>

//     {/* short description */}
//     <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
//     <label >Short description about you creche</label>
//     <input type="text" placeholder='Short Description'   onChange={handleChange}
//   className='shadow-xl rounded-md w-1/2  m-2'
//   required
//   value={formData.shortdescription}
//   name="shortdescription"

//  />
//     </div>
// {/* type of home */}
// <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
//     <label >What is your Home type</label>

// <select   className='shadow-xl rounded-md w-1/2  m-2' onChange={handleChange}     name="typeOfHome"
// >
//     <option value="flat">Flat</option>
//     <option value="house">house</option>
//     <option value="dedicatedcreche">dedicated creche</option>
//     <option value="null" selected disabled>type of home</option>

// </select>
// </div>

//     <button  className='p-2 bg-red-500 rounded-lg text-white' onClick={incrementPage}>Next</button>


// </div>
//         )}

// {/* page 2 */}
// {pageNo===1 &&(

// <div className='bg-slate-600'>
// <div className='flex '>
//         <div><button onClick={decrementPage} className='text-white text-2xl'>Prev Page</button></div>
//     </div>
// {/* Pet Type Accepted */}
// <div className='m-8 flex flex-col border-4 items-center justify-center rounded-md bg-slate-100 relative'>
//     <label className='text-lg font-medium mb-2'>Pet Types Accepted</label>

//     <div className='flex flex-wrap gap-4'>
//         {['Cat', 'Dog', 'Rabbit', 'Mouse'].map((petType) => (
//             <label key={petType} className='flex items-center space-x-2'>
//                 <input
//                     type="checkbox"
//                     name="petTypeaccepted"
//                     value={petType}
//                     onChange={(e) => {
//                         const { checked, value } = e.target;
//                         console.log(checked, value);
//                         setFormData((prevData) => ({
//                             ...prevData,
//                             petTypeaccepted: checked
//                                 ? [...prevData.petTypeaccepted, value]
//                                 : prevData.petTypeaccepted.filter((type) => type !== value),
//                         }));
//                         }}
//                     className='form-checkbox h-5 w-5 text-blue-600'
//                 />
//                 <span>{petType}</span>
//             </label>
//         ))}
//     </div>
// </div>
// {/* No of pets watched */}
//     <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
//     <label >No of pets watched</label>
//     <input type="text" placeholder='No of pets watched at once'   onChange={handleChange}
//     name="noofpetswatched"
//   className='shadow-xl rounded-md w-1/2  m-2'
//   required
//   value={formData.noofpetswatched}

//  />
//     </div>

//     {/* pet size  */}
//     <div className='m-8 flex flex-col border-4 items-center justify-center rounded-md bg-slate-100 relative'>
//     <label className='text-lg font-medium mb-2'>Pet Types Accepted</label>

//     <div className='flex flex-wrap gap-4'>
//         {['0-5kg', '5-10kg', '10-20kg', '20-40kg'].map((petsize) => (
//             <label key={petsize} className='flex items-center space-x-2'>
//                 <input
//                     type="checkbox"
//                     name="petsize"
//                     value={petsize}
//                     onChange={(e) => {
//                         const { checked, value } = e.target;
//                         console.log(checked, value);
//                         setFormData((prevData) => ({
//                             ...prevData,
//                             petsize: checked
//                                 ? [...prevData.petsize, {src:petsizepic[value],
//                                     weight:value} 
//                                 ]
//                                 : prevData.petsize.filter((type) => type.weight !== value ),
//                         }));
//                     }}
//                     className='form-checkbox h-5 w-5 text-blue-600'
//                 />
//                 <span>{petsize}</span>
//             </label>
//         ))}
//     </div>
// </div>

// {/* No of potty breaks */}
// <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
//     <label >No of potty breaks</label>
//     <input type="text" placeholder='No of breaks'   onChange={handleChange}
//     name="pottybreaks"
//   className='shadow-xl rounded-md w-1/2  m-2'
//   required
//   value={formData.pottybreaks}

//  />
//     </div>

//     <button  className='p-2 bg-red-500 rounded-lg text-white' onClick={incrementPage}>Next</button>


// </div>
// )}

// {/* page 3 */}
// {pageNo===2 &&(

// <div className='bg-slate-600'>
// <div className='flex '>
//         <div><button onClick={decrementPage} className='text-white text-2xl'>Prev Page</button></div>
//     </div>
//     {/* price   */}
//     <div className='text-white text-2xl'>General Details</div>
//     <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
//     <label >price </label>
//     <input type="text" placeholder=' Price'   onChange={handleChange}
//     name="price"
//   className='shadow-xl rounded-md w-1/2  m-2'
//   required
//   value={formData.price}

//  />
//     </div>
   

//     {/* summary  */}
//     <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
//     <label >summary</label>
//     <input type="text" placeholder='name'   onChange={handleChange}
//         name="summary"

//   className='shadow-xl rounded-md w-1/2  m-2'
//   required
//   value={formData.summary}

//  />
//     </div>

//     {/* Emergency Transport */}
//     <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
//     <label >Emergency Transport Available</label>
// <select   className='shadow-xl rounded-md w-1/2  m-2' onChange={handleChange}     name="emergencyTransport"
// >
//     <option value="Yes">Yes</option>
//     <option value="No">No</option>
   

// </select>


// </div>

//     {/* full description */}
//     <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
//     <label >Full description about you creche</label>
//     <input type="text" placeholder='Full Description'   onChange={handleChange}
//   className='shadow-xl rounded-md w-1/2  m-2'
//   required
//   value={formData.fulldescription}
//   name="fulldescription"

//  />
//     </div>
// {/* Skills */}
// {/* <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
//     <label >Choose your location</label>

// <select   className='shadow-xl rounded-md w-1/2  m-2' onChange={handleChange}     name="location"
// >
//     <option value="flat">Flat</option>
//     <option value="house">house</option>
//     <option value="dedicatedcreche">dedicated creche</option>
//     <option value="null" selected disabled>type of home</option>

// </select>
// </div> */}

//     <button  className='p-2 bg-red-500 rounded-lg text-white' onClick={incrementPage}>Next</button>


// </div>
// )}

// {/* page 4 */}
// {pageNo===3 &&(
// <div className='bg-slate-600'>
//      {/* display images */}
//      <div className='flex '>
//         <div><button onClick={decrementPage} className='text-white text-2xl'>Prev Page</button></div>
//     </div>
//      <div className='m-8 flex flex-col border-4 items-center justify-center rounded-md bg-slate-100 relative'>
//             <label className='text-lg font-medium mb-2'>Upload Profile Pic</label>
//             <input
//                 type="file"
//                 name="displayimg"
                
//                 accept="image/*"
//                 onChange={(e) => {
//                     setFormData((prevData) => ({
//                         ...prevData,
//                         displayimg: e.target.files[0],
//                     }))
//                 }}
//                 className='shadow-xl rounded-md w-1/2 m-2 p-2'
//             />
//         </div>


//      { /* All images */}
//         <div className='m-8 flex flex-col border-4 items-center justify-center rounded-md bg-slate-100 relative'>
//             <label className='text-lg font-medium mb-2'>Upload All Images</label>
//             <input
//                 type="file"
//                 name="allimg"
//                 multiple
//                 accept="image/*"
//                 onChange={(e) => {
//                     const files = Array.from(e.target.files);
//                     setFormData((prevData) => ({
//                         ...prevData,
//                         allimg: files,
//                     }));
//                 }}
//                 className='shadow-xl rounded-md w-1/2 m-2 p-2'
//             />
//         </div>

//         {/*Certificates  */}
//         <div className='m-8 flex flex-col border-4 items-center justify-center rounded-md bg-slate-100 relative'>
//             <label className='text-lg font-medium mb-2'>Upload Certificates</label>
//             <input
//                 type="file"
//                 name="certificates"
//                 multiple
//                 accept="image/*"
//                 onChange={(e) => {
//                     const files = Array.from(e.target.files);
//                     setFormData((prevData) => ({
//                         ...prevData,
//                         certificates: files,
//                     }));
//                 }}
//                 className='shadow-xl rounded-md w-1/2 m-2 p-2'
//             />
//         </div>
//     <button  className='p-2 bg-red-500 rounded-lg text-white' onClick={incrementPage}>Next</button>

// </div>
// )}

// {/* page 5 */}
// {pageNo===4 &&(
//     <div className='bg-slate-600'>
       
//         {/* username */}
//         <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
//     <label >Set a Username </label>
//     <input type="text" placeholder=' username'   onChange={handleChange}
//     name="username"
//   className='shadow-xl rounded-md w-1/2  m-2'
//   required
//   value={formData.username}

//  />
//     </div>

//      {/* password */}
//      <div className='m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative'>
//     <label >Set a Password </label>
//     <input type="password" placeholder=' password'   onChange={handleChange}
//     name="password"
//   className='shadow-xl rounded-md w-1/2  m-2'
//   required
//   value={formData.password}

//  />
//     </div>


//     <button  className='p-2 bg-red-500 rounded-lg text-white' onClick={handleSubmit}>Submit</button>



//     </div>
//     )}





// </div>



//         </>
// // return (
//     // <>
//     //   <div className="bg-slate-600 min-h-screen flex justify-center items-center py-10 px-4">
//     //     {/* Page 1 */}
//     //     {pageNo === 0 && (
//     //       <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
//     //         <div className="text-center text-3xl font-semibold text-slate-800 mb-6">Registration Details</div>
  
//     //         {/* Owner Name */}
//     //         <div className="mb-6">
//     //           <label className="block text-xl font-medium text-slate-700 mb-2">Your Name</label>
//     //           <input
//     //             type="text"
//     //             placeholder="Name"
//     //             onChange={handleChange}
//     //             name="ownername"
//     //             className="w-full p-3 rounded-md shadow-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//     //             required
//     //             value={formData.ownername}
//     //           />
//     //         </div>
  
//     //         {/* Creche Name */}
//     //         <div className="mb-6">
//     //           <label className="block text-xl font-medium text-slate-700 mb-2">Creche Name</label>
//     //           <input
//     //             type="text"
//     //             placeholder=""
//     //             onChange={handleChange}
//     //             name="name"
//     //             className="w-full p-3 rounded-md shadow-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//     //             required
//     //             value={formData.name}
//     //           />
//     //         </div>
  
//     //         {/* Location */}
//     //         <div className="mb-6">
//     //           <label className="block text-xl font-medium text-slate-700 mb-2">Choose your location</label>
//     //           <select
//     //             className="w-full p-3 rounded-md shadow-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//     //             onChange={handleChange}
//     //             name="location"
//     //           >
//     //             <option value="Yamunanagar">Yamunanagar</option>
//     //             <option value="Panipat">Panipat</option>
//     //             <option value="Faridabad">Faridabad</option>
//     //             <option value="Ambala">Ambala</option>
//     //             <option value="Karnal">Karnal</option>
//     //             <option value="Rohtak">Rohtak</option>
//     //             <option value="Gurugram">Gurugram</option>
//     //             <option value="location" disabled selected>
//     //               Location
//     //             </option>
//     //           </select>
//     //         </div>
  
//     //         {/* Short Description */}
//     //         <div className="mb-6">
//     //           <label className="block text-xl font-medium text-slate-700 mb-2">Short description about your creche</label>
//     //           <input
//     //             type="text"
//     //             placeholder="Short Description"
//     //             onChange={handleChange}
//     //             className="w-full p-3 rounded-md shadow-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//     //             required
//     //             value={formData.shortdescription}
//     //             name="shortdescription"
//     //           />
//     //         </div>
  
//     //         {/* Type of Home */}
//     //         <div className="mb-6">
//     //           <label className="block text-xl font-medium text-slate-700 mb-2">What is your Home type?</label>
//     //           <select
//     //             className="w-full p-3 rounded-md shadow-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//     //             onChange={handleChange}
//     //             name="typeOfHome"
//     //           >
//     //             <option value="flat">Flat</option>
//     //             <option value="house">House</option>
//     //             <option value="dedicatedcreche">Dedicated Creche</option>
//     //             <option value="null" disabled selected>
//     //               Type of Home
//     //             </option>
//     //           </select>
//     //         </div>
  
//     //         <button
//     //           className="w-full py-3 bg-red-500 text-white rounded-md shadow-md mt-6"
//     //           onClick={incrementPage}
//     //         >
//     //           Next
//     //         </button>
//     //       </div>
//     //     )}
  
//     //     {/* Page 2 */}
//     //     {pageNo === 1 && (
//     //       <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
//     //         <div className="flex justify-between mb-6">
//     //           <button onClick={decrementPage} className="text-lg text-slate-700">Prev Page</button>
//     //         </div>
  
//     //         {/* Pet Type Accepted */}
//     //         <div className="mb-6">
//     //           <label className="block text-xl font-medium text-slate-700 mb-2">Pet Types Accepted</label>
//     //           <div className="flex flex-wrap gap-4">
//     //             {['Cat', 'Dog', 'Rabbit', 'Mouse'].map((petType) => (
//     //               <label key={petType} className="flex items-center space-x-2">
//     //                 <input
//     //                   type="checkbox"
//     //                   name="petTypeaccepted"
//     //                   value={petType}
//     //                   onChange={(e) => {
//     //                                             const { checked, value } = e.target;
//     //                                             console.log(checked, value);
//     //                                             setFormData((prevData) => ({
//     //                                                 ...prevData,
//     //                                                 petTypeaccepted: checked
//     //                                                     ? [...prevData.petTypeaccepted, value]
//     //                                                     : prevData.petTypeaccepted.filter((type) => type !== value),
//     //                                             }));
//     //                                             }}
//     //                   className="form-checkbox h-5 w-5 text-blue-600"
//     //                 />
//     //                 <span>{petType}</span>
//     //               </label>
//     //             ))}
//     //           </div>
//     //         </div>
  
//     //         {/* No of Pets Watched */}
//     //         <div className="mb-6">
//     //           <label className="block text-xl font-medium text-slate-700 mb-2">No of pets watched</label>
//     //           <input
//     //             type="text"
//     //             placeholder="No of pets watched at once"
//     //             onChange={handleChange}
//     //             name="noofpetswatched"
//     //             className="w-full p-3 rounded-md shadow-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//     //             required
//     //             value={formData.noofpetswatched}
//     //           />
//     //         </div>
  
//     //         {/* Pet Size */}
//     //         <div className="mb-6">
//     //           <label className="block text-xl font-medium text-slate-700 mb-2">Pet Size</label>
//     //           <div className="flex flex-wrap gap-4">
//     //             {['0-5kg', '5-10kg', '10-20kg', '20-40kg'].map((petsize) => (
//     //               <label key={petsize} className="flex items-center space-x-2">
//     //                 <input
//     //                   type="checkbox"
//     //                   name="petsize"
//     //                   value={petsize}
//     //                   onChange={(e) => {
//     //                     const { checked, value } = e.target;
//     //                     setFormData((prevData) => ({
//     //                       ...prevData,
//     //                       petsize: checked
//     //                         ? [...prevData.petsize, value]
//     //                         : prevData.petsize.filter((type) => type !== value),
//     //                     }));
//     //                   }}
//     //                   className="form-checkbox h-5 w-5 text-blue-600"
//     //                 />
//     //                 <span>{petsize}</span>
//     //               </label>
//     //             ))}
//     //           </div>
//     //         </div>
  
//     //         {/* No of Potty Breaks */}
//     //         <div className="mb-6">
//     //           <label className="block text-xl font-medium text-slate-700 mb-2">No of potty breaks</label>
//     //           <input
//     //             type="text"
//     //             placeholder="No of breaks"
//     //             onChange={handleChange}
//     //             name="pottybreaks"
//     //             className="w-full p-3 rounded-md shadow-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//     //             required
//     //             value={formData.pottybreaks}
//     //           />
//     //         </div>
  
//     //         <button
//     //           className="w-full py-3 bg-red-500 text-white rounded-md shadow-md mt-6"
//     //           onClick={incrementPage}
//     //         >
//     //           Next
//     //         </button>
//     //       </div>
//     //     )}
  
//     //     {/* Page 3 */}
//     //     {pageNo === 2 && (
//     //       <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
//     //         <div className="text-center text-3xl font-semibold text-slate-800 mb-6">General Details</div>
  
//     //         {/* Price */}
//     //         <div className="mb-6">
//     //           <label className="block text-xl font-medium text-slate-700 mb-2">Price</label>
//     //           <input
//     //             type="text"
//     //             placeholder="Price"
//     //             onChange={handleChange}
//     //             name="price"
//     //             className="w-full p-3 rounded-md shadow-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//     //             required
//     //             value={formData.price}
//     //           />
//     //         </div>
  
//     //         {/* Summary */}
//     //         <div className="mb-6">
//     //           <label className="block text-xl font-medium text-slate-700 mb-2">Summary</label>
//     //           <input
//     //             type="text"
//     //             placeholder="Summary"
//     //             onChange={handleChange}
//     //             name="summary"
//     //             className="w-full p-3 rounded-md shadow-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//     //             required
//     //             value={formData.summary}
//     //           />
//     //         </div>
  
//     //         {/* Emergency Transport */}
//     //         <div className="mb-6">
//     //           <label className="block text-xl font-medium text-slate-700 mb-2">Emergency Transport Available</label>
//     //           <select
//     //             className="w-full p-3 rounded-md shadow-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//     //             onChange={handleChange}
//     //             name="emergencyTransport"
//     //           >
//     //             <option value="Yes">Yes</option>
//     //             <option value="No">No</option>
//     //           </select>
//     //         </div>
  
//     //         {/* Additional Comments */}
//     //         <div className="mb-6">
//     //           <label className="block text-xl font-medium text-slate-700 mb-2">Any Additional Comments</label>
//     //           <input
//     //             type="text"
//     //             placeholder="Comments"
//     //             onChange={handleChange}
//     //             name="additionalcomments"
//     //             className="w-full p-3 rounded-md shadow-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//     //             value={formData.additionalcomments}
//     //           />
//     //         </div>
  
//     //         <button
//     //           className="w-full py-3 bg-red-500 text-white rounded-md shadow-md mt-6"
//     //           onClick={incrementPage}
//     //         >
//     //           Submit
//     //         </button>
//     //       </div>
//     //     )}
//     //   </div>
//     // </>
//   );

    


// // )

        
    
// };

// export default RegisterCreche;

// {/* <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
//             <h1 className="text-2xl font-bold mb-4">Pet Care Service Form</h1>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 {Object.keys(formData).map((key) => (
//                     <div key={key} className="flex flex-col">
//                         <label className="mb-1 font-semibold" htmlFor={key}>
//                             {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
//                         </label>
//                         <input
//                             type={key === 'price' || key === 'rating' || key === 'noofpetswatched' || key === 'pottybreaks' ? 'number' : 'text'}
//                             name={key}
//                             id={key}
//                             value={formData[key]}
//                             onChange={handleChange}
//                             className="p-2 border border-gray-300 rounded transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:shadow-md"
//                             required
//                         />
//                     </div>
//                 ))}
//                 <button 
//                     type="submit" 
//                     className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 ease-in-out transform hover:scale-105"
//                 >
//                     Submit
//                 </button>
//             </form>
//         </div> */}





// // import React, { useState, useEffect, useContext } from 'react';
// // import SignInContext from '../../context/sigincontext/signinContext';

// // const RegisterCreche = () => {
// //   const context = useContext(SignInContext);
// //   let editing = false;

// //   // Fetching existing data when the component mounts
// //   const fetchData = async () => {
// //     const response = await fetch(`http://localhost:3000/registercreche/?id=${context.id}&location=${context.location}&username=${context.username}`, {
// //       method: 'GET',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //     });

// //     if (response) {
// //       editing = true;
// //       const data = await response.json();
// //       return data;
// //     }
// //     return null;
// //   };

// //   // Set the initial form data state
// //   const [formData, setFormData] = useState(() => {
// //     const data = fetchData();
// //     return data ? data : {
// //       name: '',
// //       displayimg: '',
// //       certificate: [],
// //       location: '',
// //       shortdescription: '',
// //       price: '',
// //       rating: 0,
// //       ownername: '',
// //       allimg: [],
// //       fulldescription: '',
// //       skills: [],
// //       summary: '',
// //       noofpetswatched: '',
// //       petsize: [],
// //       pottybreaks: '',
// //       typeOfHome: '',
// //       Emergencytransport: '',
// //       petTypeaccepted: [],
// //       bookings: [],
// //       username: '',
// //       password: '',
// //       id: 0,
// //     };
// //   });

// //   const [pageNo, setPageNo] = useState(0);

// //   const incrementPage = () => {
// //     setPageNo(pageNo + 1);
// //   };

// //   const decrementPage = () => {
// //     setPageNo(pageNo - 1);
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log(formData);
// //     // Handle form submission
// //     fetch('http://localhost:3000/registercreche', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({
// //         data: formData,
// //         editing: editing,
// //       }),
// //     }).then((response) => {
// //       if (response.ok) {
// //         alert('Creche registered successfully!');
// //       } else {
// //         alert('Error registering creche:', response.statusText);
// //       }
// //     });
// //   };

// //   const petsizepic = {
// //     "0-5kg": "icon1.png",
// //     "5-10kg": "icon2.png",
// //     "10-20kg": "icon3.png",
// //     "20-40kg": "icon4.png",
// //   };

// //   return (
// //     <div className="bg-slate-600">
// //       {/* Page 1 */}
// //       {pageNo === 0 && (
// //         <div>
// //           <div className="text-white text-2xl">Registration Details</div>
// //           <div className="m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative">
// //             <label>Your Name</label>
// //             <input
// //               type="text"
// //               placeholder=" Name"
// //               onChange={handleChange}
// //               name="ownername"
// //               className="shadow-xl rounded-md w-1/2 m-2"
// //               required
// //               value={formData.ownername}
// //             />
// //           </div>
// //           <div className="m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative">
// //             <label>Creche Name</label>
// //             <input
// //               type="text"
// //               placeholder=""
// //               onChange={handleChange}
// //               name="name"
// //               className="shadow-xl rounded-md w-1/2 m-2"
// //               required
// //               value={formData.name}
// //             />
// //           </div>
// //           <div className="m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative">
// //             <label>Choose your location</label>
// //             <select className="shadow-xl rounded-md w-1/2 m-2" onChange={handleChange} name="location">
// //               <option value="Yamunanagar">Yamunanagar</option>
// //               <option value="Panipat">Panipat</option>
// //               <option value="Faridabad">Faridabad</option>
// //               <option value="Ambala">Ambala</option>
// //               <option value="Karnal">Karnal</option>
// //               <option value="Rohtak">Rohtak</option>
// //               <option value="Gurugram">Gurugram</option>
// //               <option value="location" selected disabled>
// //                 Location
// //               </option>
// //             </select>
// //           </div>
// //           <div className="m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative">
// //             <label>Short description about your creche</label>
// //             <input
// //               type="text"
// //               placeholder="Short Description"
// //               onChange={handleChange}
// //               className="shadow-xl rounded-md w-1/2 m-2"
// //               required
// //               value={formData.shortdescription}
// //               name="shortdescription"
// //             />
// //           </div>
// //           <div className="m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative">
// //             <label>What is your Home type</label>
// //             <select className="shadow-xl rounded-md w-1/2 m-2" onChange={handleChange} name="typeOfHome">
// //               <option value="flat">Flat</option>
// //               <option value="house">House</option>
// //               <option value="dedicatedcreche">Dedicated Creche</option>
// //               <option value="null" selected disabled>
// //                 Type of Home
// //               </option>
// //             </select>
// //           </div>
// //           <button className="p-2 bg-red-500 rounded-lg text-white" onClick={incrementPage}>
// //             Next
// //           </button>
// //         </div>
// //       )}

// //       {/* Page 2 */}
// //       {pageNo === 1 && (
// //         <div>
// //           <button onClick={decrementPage} className="text-white text-2xl">
// //             Prev Page
// //           </button>
// //           <div className="m-8 flex flex-col border-4 items-center justify-center rounded-md bg-slate-100 relative">
// //             <label className="text-lg font-medium mb-2">Pet Types Accepted</label>
// //             <div className="flex flex-wrap gap-4">
// //               {['Cat', 'Dog', 'Rabbit', 'Mouse'].map((petType) => (
// //                 <label key={petType} className="flex items-center space-x-2">
// //                   <input
// //                     type="checkbox"
// //                     name="petTypeaccepted"
// //                     value={petType}
// //                     onChange={(e) => {
// //                       const { checked, value } = e.target;
// //                       setFormData((prevData) => ({
// //                         ...prevData,
// //                         petTypeaccepted: checked
// //                           ? [...prevData.petTypeaccepted, value]
// //                           : prevData.petTypeaccepted.filter((type) => type !== value),
// //                       }));
// //                     }}
// //                     className="form-checkbox h-5 w-5 text-blue-600"
// //                   />
// //                   <span>{petType}</span>
// //                 </label>
// //               ))}
// //             </div>
// //           </div>
// //           <div className="m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative">
// //             <label>No of pets watched</label>
// //             <input
// //               type="text"
// //               placeholder="No of pets watched at once"
// //               onChange={handleChange}
// //               name="noofpetswatched"
// //               className="shadow-xl rounded-md w-1/2 m-2"
// //               required
// //               value={formData.noofpetswatched}
// //             />
// //           </div>
// //           <div className="m-8 flex flex-col border-4 items-center justify-center rounded-md bg-slate-100 relative">
// //             <label className="text-lg font-medium mb-2">Pet Sizes</label>
// //             <div className="flex flex-wrap gap-4">
// //               {['0-5kg', '5-10kg', '10-20kg', '20-40kg'].map((petsize) => (
// //                 <label key={petsize} className="flex items-center space-x-2">
// //                   <input
// //                     type="checkbox"
// //                     name="petsize"
// //                     value={petsize}
// //                     onChange={(e) => {
// //                       const { checked, value } = e.target;
// //                       setFormData((prevData) => ({
// //                         ...prevData,
// //                         petsize: checked
// //                           ? [...prevData.petsize, { src: petsizepic[value], weight: value }]
// //                           : prevData.petsize.filter((type) => type.weight !== value),
// //                       }));
// //                     }}
// //                     className="form-checkbox h-5 w-5 text-blue-600"
// //                   />
// //                   <span>{petsize}</span>
// //                 </label>
// //               ))}
// //             </div>
// //           </div>
// //           <div className="m-8 flex border-4 items-center justify-center rounded-md bg-slate-100 relative">
// //             <label>No of potty breaks</label>
// //             <input
// //               type="text"
// //               placeholder="No of breaks"
// //               onChange={handleChange}
// //               name="pottybreaks"
// //               className="shadow-xl rounded-md w-1/2 m-2"
// //               required
// //               value={formData.pottybreaks}
// //             />
// //           </div>
// //           <button className="p-2 bg-red-500 rounded-lg text-white" onClick={incrementPage}>
// //             Next
// //           </button>
// //         </div>
// //       )}
      
// //       {/* Add other pages in a similar way */}
// //     </div>
// //   );
// // };

// // export default RegisterCreche;



import React, { useState, useContext } from 'react';
import SignInContext from '../../context/sigincontext/signinContext';
import { useNavigate } from 'react-router-dom';

const RegisterCreche = () => {
  const context = useContext(SignInContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
    bookings: [],
    username: '',
    password: '',
    id: 0,
  });

  const [pageNo, setPageNo] = useState(0);

  const incrementPage = () => {
    setPageNo(pageNo + 1);
  };

  const decrementPage = () => {
    setPageNo(pageNo - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/registercreche', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        alert('Creche registered successfully!');
        navigate("/");
      } else {
        alert('Error registering creche:', response.statusText);
      }
    });
  };

  return (
    <div className="bg-slate-600 min-h-screen flex flex-col items-center py-10 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        {/* Page Navigation */}
        <div className="flex justify-between mb-4">
          {pageNo > 0 && (
            <button onClick={decrementPage} className="text-white bg-slate-500 rounded-md p-2">
              Prev Page
            </button>
          )}
          <h2 className="text-2xl font-semibold text-slate-800">
            {pageNo === 0 ? 'Registration Details' : pageNo === 1 ? 'Pet Details' : pageNo === 2 ? 'Creche Details' : pageNo === 3 ? 'Upload Images' : 'Set Credentials'}
          </h2>
          {pageNo < 4 && (
            <div className="text-transparent">Placeholder</div>
          )}
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit}>
          {pageNo === 0 && (
            <>
              <div className="mb-4">
                <label className="block text-lg font-medium text-slate-700 mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                  name="ownername"
                  className="w-full p-3 border border-slate-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                  value={formData.ownername}
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-medium text-slate-700 mb-1">Creche Name</label>
                <input
                  type="text"
                  placeholder="Creche Name"
                  onChange={handleChange}
                  name="name"
                  className="w-full p-3 border border-slate-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                  value={formData.name}
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-medium text-slate-700 mb-1">Choose your location</label>
                <select
                  className="w-full p-3 border border-slate-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={handleChange}
                  name="location"
                >
                  <option value="" disabled selected>Location</option>
                  <option value="Yamunanagar">Yamunanagar</option>
                  <option value="Pan ipat">Panipat</option>
                  <option value="Faridabad">Faridabad</option>
                  <option value="Ambala">Ambala</option>
                  <option value="Karnal">Karnal</option>
                  <option value="Rohtak">Rohtak</option>
                  <option value="Gurugram">Gurugram</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-lg font-medium text-slate-700 mb-1">Short description about your creche</label>
                <input
                  type="text"
                  placeholder="Short Description"
                  onChange={handleChange}
                  name="shortdescription"
                  className="w-full p-3 border border-slate-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                  value={formData.shortdescription}
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-medium text-slate-700 mb-1">What is your Home type?</label>
                <select
                  className="w-full p-3 border border-slate-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={handleChange}
                  name="typeOfHome"
                >
                  <option value="" disabled selected>Type of Home</option>
                  <option value="flat">Flat</option>
                  <option value="house">House</option>
                  <option value="dedicatedcreche">Dedicated Creche</option>
                </select>
              </div>

              <button type="button" className="w-full py-3 bg-red-500 text-white rounded-md shadow-md" onClick={incrementPage}>
                Next
              </button>
            </>
          )}

          {pageNo === 1 && (
            <>
              <div className="mb-4">
                <label className="block text-lg font-medium text-slate-700 mb-1">Pet Types Accepted</label>
                <div className="flex flex-wrap gap-4">
                  {['Cat', 'Dog', 'Rabbit', 'Mouse'].map((petType) => (
                    <label key={petType} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="petTypeaccepted"
                        value={petType}
                        onChange={(e) => {
                          const { checked, value } = e.target;
                          setFormData((prevData) => ({
                            ...prevData,
                            petTypeaccepted: checked
                              ? [...prevData.petTypeaccepted, value]
                              : prevData.petTypeaccepted.filter((type) => type !== value),
                          }));
                        }}
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <span>{petType}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-lg font-medium text-slate-700 mb-1">No of pets watched</label>
                <input
                  type="text"
                  placeholder="No of pets watched at once"
                  onChange={handleChange}
                  name="noofpetswatched"
                  className="w-full p-3 border border-slate-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                  value={formData.noofpetswatched}
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-medium text-slate-700 mb-1">Pet Sizes</label>
                <div className="flex flex-wrap gap-4">
                  {['0-5kg', '5-10kg', '10-20kg', '20-40kg'].map((petsize) => (
                    <label key={petsize} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="petsize"
                        value={petsize}
                        onChange={(e) => {
                          const { checked, value } = e.target;
                          setFormData((prevData) => ({
                            ...prevData,
                            petsize: checked
                              ? [...prevData.petsize, value]
                              : prevData.petsize.filter((type) => type !== value),
                          }));
                        }}
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <span>{petsize}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-lg font-medium text-slate-700 mb-1">No of potty breaks</label>
                <input
                  type="text"
                  placeholder="No of breaks"
                  onChange={handleChange}
                  name="pottybreaks"
                  className="w-full p-3 border border-slate-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                  value={formData.pottybreaks}
                />
              </div>

              <button type="button" className="w-full py-3 bg-red-500 text-white rounded-md shadow-md" onClick={incrementPage}>
                Next
              </button>
            </>
          )}

          {pageNo === 2 && (
            <>
              <div className="mb-4">
                <label className="block text-lg font-medium text-slate-700 mb-1">Price</label>
                <input
                  type="text"
                  placeholder="Price"
                  onChange={handleChange}
                  name="price"
                  className="w-full p-3 border border-slate-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                  value={formData.price}
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-medium text-slate-700 mb-1">Summary</label>
                <input
                  type="text"
                  placeholder="Summary"
                  onChange={handleChange}
                  name="summary"
                  className="w-full p-3 border border-slate-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                  value={formData.summary}
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-medium text-slate-700 mb-1">Emergency Transport Available</label>
                <select
                  className="w-full p-3 border border-slate-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={handleChange}
                  name="Emergencytransport"
                >
                  <option value="" disabled selected>Choose an option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-lg font-medium text-slate-700 mb-1">Full description about your creche</label>
                <input
                  type="text"
                  placeholder="Full Description"
                  onChange={handleChange}
                  name="fulldescription"
                  className="w-full p-3 border border-slate-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                  value={formData.fulldescription}
                />
              </div>

              <button type="button" className="w-full py-3 bg-red-500 text-white rounded-md shadow-md" onClick={incrementPage}>
                Next
              </button>
            </>
          )}

          {pageNo === 3 && (
            <>
              <div className="mb-4">
                <label className="block text-lg font-medium text-slate-700 mb-1">Upload Profile Pic</label>
                <input
                  type="file"
                  name="displayimg"
                  accept="image/*"
                  onChange={(e) => {
                    setFormData((prevData) => ({
                      ...prevData,
                      displayimg: e.target.files[0],
                    }));
                  }}
                  className="w-full p-3 border border-slate-300 rounded-md shadow-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-medium text-slate-700 mb-1">Upload All Images</label>
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
                  className="w-full p-3 border border-slate-300 rounded-md shadow-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-medium text-slate-700 mb-1">Upload Certificates</label>
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
                  className="w-full p-3 border border-s late-300 rounded-md shadow-md"
                />
              </div>

              <button type="button" className="w-full py-3 bg-red-500 text-white rounded-md shadow-md" onClick={incrementPage}>
                Next
              </button>
            </>
          )}

          {pageNo === 4 && (
            <>
              <div className="mb-4">
                <label className="block text-lg font-medium text-slate-700 mb-1">Set a Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={handleChange}
                  name="username"
                  className="w-full p-3 border border-slate-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                  value={formData.username}
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-medium text-slate-700 mb-1">Set a Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                  className="w-full p-3 border border-slate-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                  value={formData.password}
                />
              </div>

              <button type="submit" className="w-full py-3 bg-red-500 text-white rounded-md shadow-md">
                Submit
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegisterCreche;