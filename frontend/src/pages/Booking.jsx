import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import SignInContext from '@/context/sigincontext/signinContext';
const Booking = () => {

    const use=useLocation();
    const data=use.state;
    const userinfo=useContext(SignInContext);
    console.log("data is",data);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        fromDate: '',
        toDate: '',
        pet:'',
        petName:'',
        specialNoteForCrecheOwner:''
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
        console.log(value)
        setFormData({ ...formData, [name]: value });
        console.log(formData);
        
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
                userInfo:userinfo,
            }),
        }).then((response) => {
            console.log(response)
            if (response.ok===true) {
                alert('Booking successful!');
            } else {
                alert('Error booking:', response.statusText);
            }
        })
        // Add your form submission logic here
    };

    return (
        
        <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
              <h2>Booking Form</h2>
              {/* page1 */}
              {pageNo===0&& (
              <div className=' border-4 rounded-md bg-slate-100'>
            
<div>
<div className='m-10'>
                    <label>Your Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='shadow-xl rounded-md w-full p-2'
                    />
                </div>
                <div className='m-10 '>
                    <label>Email:</label>
                    <div>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='shadow-xl rounded-md w-full p-2'
                    />
                    </div>
                </div>
                <div className='m-10'>
                    <label>Phone:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className='shadow-xl rounded-md w-full p-2'
                    />
                </div>

<button onClick={incrementPage} className='p-2 bg-red-500 rounded-lg text-white'>Next</button>

</div>
           

</div>
 )}


            {/* page 2 */}
          
            {pageNo===1&& (
            <div className=' border-4 rounded-md bg-slate-100 relative'>

<div>
    <div>page 2</div>
<div className='m-10 '>
    <div>

    <button onClick={decrementPage} className='top-0 left-0 absolute m-2 text-white bg-slate-400 rounded-md p-1'>Prev Page</button>

    </div>
                    <label>Booking from date</label>
                    <div>hello {formData.fromDate}</div>
                    {/* <input
                        type="date"
                        name="fromdate"
                        value={formData.fromDate}
                        onChange={handleChange}
                        required
                        className='shadow-xl rounded-md w-full p-2'
                        

                    /> */}
                </div>
                <div className='m-10 '>
                    <label>Booking Till</label>
                    <div>
                    <input
                        type="date"
                        name="todate"
                        value={formData.toDate}
                        onChange={handleChange}
                        required
                        className='shadow-xl rounded-md w-full p-2'
                    />
                    </div>
                </div>
                <div className='m-10'>
                    <label>Phone:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className='shadow-xl rounded-md w-full p-2'
                    />
                </div>

<button onClick={incrementPage} className='p-2 bg-red-500 rounded-lg text-white'>Next</button>

</div>
         </div>
            )}


            {/* page 3 */}
            {pageNo==2&&(
            <div className=' border-4 rounded-md bg-slate-100 relative'>
<div>page 3</div>
<button onClick={decrementPage} className='top-0 left-0 absolute m-2 text-white bg-slate-400 rounded-md p-1'>Prev Page</button>
<div className='m-10'>
                    <label>Phone:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className='shadow-xl rounded-md w-full p-2'
                    />
                </div>
<div>
    
</div>
    <div><button onClick={handleSubmit} className='bg-red-500 p-2 text-white'>pay</button></div>
</div>

            )}

</div>
           
        
    );
};

export default Booking;

/*
number of pets
what type of pet
what breed optional
    what is size of your pet
    special note for sitter
    pickup date and time
    number of nights
    where do u  need te service
*/