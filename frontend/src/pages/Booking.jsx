// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useContext } from 'react';
// import SignInContext from '@/context/sigincontext/signinContext';
// const Booking = () => {

//     const use=useLocation();
//     const data=use.state;
//     const userinfo=useContext(SignInContext);
//     console.log("data is",data);
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         fromDate: '',
//         toDate: '',
//         pet:'',
//         petName:'',
//         specialNoteForCrecheOwner:''
//     });
//     const [pageNo,setpageNo]=useState(0);
// const incrementPage=()=>{
//     setpageNo(pageNo+1);
// }
// const decrementPage=()=>{
//     setpageNo(pageNo-1);
// }


//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         console.log(value)
//         setFormData({ ...formData, [name]: value });
//         console.log(formData);
        
//     };
    
// useEffect(() => {
//     console.log("Form data updated:", formData);
// }, [formData]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Booking Details:', formData);
       
//         fetch('http://localhost:3000/booking', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 crecheInfo: data,
//                 bookingDetails: formData,
//                 userInfo:userinfo,
//             }),
//         }).then((response) => {
//             console.log(response)
//             if (response.ok===true) {
//                 alert('Booking successful!');
//             } else {
//                 alert('Error booking:', response.statusText);
//             }
//         })
//         // Add your form submission logic here
//     };

//     return (
        
//         <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
//               <h2>Booking Form</h2>
//               {/* page1 */}
//               {pageNo===0&& (
//               <div className=' border-4 rounded-md bg-slate-100'>
            
// <div>
// <div className='m-10'>
//                     <label>Your Name:</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         className='shadow-xl rounded-md w-full p-2'
//                     />
//                 </div>
//                 <div className='m-10 '>
//                     <label>Email:</label>
//                     <div>
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         className='shadow-xl rounded-md w-full p-2'
//                     />
//                     </div>
//                 </div>
//                 <div className='m-10'>
//                     <label>Phone:</label>
//                     <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                         className='shadow-xl rounded-md w-full p-2'
//                     />
//                 </div>

// <button onClick={incrementPage} className='p-2 bg-red-500 rounded-lg text-white'>Next</button>

// </div>
           

// </div>
//  )}


//             {/* page 2 */}
          
//             {pageNo===1&& (
//             <div className=' border-4 rounded-md bg-slate-100 relative'>

// <div>
//     <div>page 2</div>
// <div className='m-10 '>
//     <div>

//     <button onClick={decrementPage} className='top-0 left-0 absolute m-2 text-white bg-slate-400 rounded-md p-1'>Prev Page</button>

//     </div>
//                     <label>Booking from date</label>
//                     <div>hello {formData.fromDate}</div>
//                     {/* <input
//                         type="date"
//                         name="fromdate"
//                         value={formData.fromDate}
//                         onChange={handleChange}
//                         required
//                         className='shadow-xl rounded-md w-full p-2'
                        

//                     /> */}
//                 </div>
//                 <div className='m-10 '>
//                     <label>Booking Till</label>
//                     <div>
//                     <input
//                         type="date"
//                         name="todate"
//                         value={formData.toDate}
//                         onChange={handleChange}
//                         required
//                         className='shadow-xl rounded-md w-full p-2'
//                     />
//                     </div>
//                 </div>
//                 <div className='m-10'>
//                     <label>Phone:</label>
//                     <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                         className='shadow-xl rounded-md w-full p-2'
//                     />
//                 </div>

// <button onClick={incrementPage} className='p-2 bg-red-500 rounded-lg text-white'>Next</button>

// </div>
//          </div>
//             )}


//             {/* page 3 */}
//             {pageNo==2&&(
//             <div className=' border-4 rounded-md bg-slate-100 relative'>
// <div>page 3</div>
// <button onClick={decrementPage} className='top-0 left-0 absolute m-2 text-white bg-slate-400 rounded-md p-1'>Prev Page</button>
// <div className='m-10'>
//                     <label>Phone:</label>
//                     <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                         className='shadow-xl rounded-md w-full p-2'
//                     />
//                 </div>
// <div>
    
// </div>
//     <div><button onClick={handleSubmit} className='bg-red-500 p-2 text-white'>pay</button></div>
// </div>

//             )}

// </div>
           
        
//     );
// };

// export default Booking;

// /*
// number of pets
// what type of pet
// what breed optional
//     what is size of your pet
//     special note for sitter
//     pickup date and time
//     number of nights
//     where do u  need te service
// */



import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import SignInContext from '@/context/sigincontext/signinContext';

const Booking = () => {
    const use = useLocation();
    const data = use.state;
    const userinfo = useContext(SignInContext);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        fromDate: '',
        toDate: '',
        petCount: 0,
        petType: '',
        petBreed: '',
        petSize: '',
        specialNoteForCrecheOwner: '',
        pickupDate: '',
        numberOfNights: 0,
        serviceLocation: ''
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

    useEffect(() => {
        console.log("Form data updated:", formData);
    }, [formData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Booking Details:', formData);

        fetch('http://localhost:3000/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                crecheInfo: data,
                bookingDetails: formData,
                userInfo: userinfo,
            }),
        }).then((response) => {
            if (response.ok) {
                alert('Booking successful!');
            } else {
                alert('Error booking:', response.statusText);
            }
        });
    };

    return (
        <div className="max-w-lg mx-auto p-6 space-y-6">
            <h2 className="text-3xl font-semibold text-center">Booking Form</h2>
            {/* Page 1 */}
            {pageNo === 0 && (
                <div className="bg-slate-100 p-6 rounded-lg shadow-md">
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Your Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded-md shadow-sm border border-gray-300"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded-md shadow-sm border border-gray-300"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Phone:</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded-md shadow-sm border border-gray-300"
                        />
                    </div>
                    <button onClick={incrementPage} className="w-full bg-red-500 text-white py-2 rounded-lg">Next</button>
                </div>
            )}

            {/* Page 2 */}
            {pageNo === 1 && (
                <div className="bg-slate-100 p-6 rounded-lg shadow-md relative">
                    <button onClick={decrementPage} className="absolute top-2 left-2 bg-slate-400 text-white p-2 rounded-md">Prev</button>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Booking from date:</label>
                        <input
                            type="date"
                            name="fromDate"
                            value={formData.fromDate}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded-md shadow-sm border border-gray-300"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Booking till:</label>
                        <input
                            type="date"
                            name="toDate"
                            value={formData.toDate}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded-md shadow-sm border border-gray-300"
                        />
                    </div>
                    <button onClick={incrementPage} className="w-full bg-red-500 text-white py-2 rounded-lg">Next</button>
                </div>
            )}

            {/* Page 3 */}
            {pageNo === 2 && (
                <div className="bg-slate-100 p-6 rounded-lg shadow-md relative">
                    <button onClick={decrementPage} className="absolute top-2 left-2 bg-slate-400 text-white p-2 rounded-md">Prev</button>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Number of Pets:</label>
                        <input
                            type="number"
                            name="petCount"
                            value={formData.petCount}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded-md shadow-sm border border-gray-300"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">What type of pet?</label>
                        <input
                            type="text"
                            name="petType"
                            value={formData.petType}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded-md shadow-sm border border-gray-300"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">What breed is your pet? (Optional)</label>
                        <input
                            type="text"
                            name="petBreed"
                            value={formData.petBreed}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md shadow-sm border border-gray-300"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">What is the size of your pet?</label>
                        <input
                            type="text"
                            name="petSize"
                            value={formData.petSize}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded-md shadow-sm border border-gray-300"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Special note for sitter:</label>
                        <textarea
                            name="specialNoteForCrecheOwner"
                            value={formData.specialNoteForCrecheOwner}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md shadow-sm border border-gray-300"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Pickup date and time:</label>
                        <input
                            type="datetime-local"
                            name="pickupDate"
                            value={formData.pickupDate}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded-md shadow-sm border border-gray-300"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Number of nights:</label>
                        <input
                            type="number"
                            name="numberOfNights"
                            value={formData.numberOfNights}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded-md shadow-sm border border-gray-300"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Where do you need the service?</label>
                        <input
                            type="text"
                            name="serviceLocation"
                            value={formData.serviceLocation}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded-md shadow-sm border border-gray-300"
                        />
                    </div>
                    <button onClick={handleSubmit} className="w-full bg-red-500 text-white py-2 rounded-lg">Submit Booking</button>
                </div>
            )}
        </div>
    );
};

export default Booking;