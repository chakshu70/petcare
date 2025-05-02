import React from 'react'
import './App.css'

import Home from './pages/home'
import SignIn from './pages/signin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './pages/search'

import New from './components/biggercard'
import UserProfilepage from './pages/userprofile'

import { Provider } from 'react-redux'
import R9 from './rough/r9'
import SignInContext from './context/sigincontext/signinContext'
import SigninO from './context/sigincontext/signinState'
import PrivateRoute from './routes/privateroutes'
import OwnerHome from './pages/owner/ownerhome'
import RegisterCreche from './pages/owner/registercreche'
import IsLoggedIn from './routes/isLoggedIn'
import Booking from './pages/Booking'
import Contact from './pages/about';
import ContactX from './pages/about';
import About from './pages/about';
import ContactUs from './pages/contact';
import MakePayment from './components/payment';
import LogIn from './pages/login';
import PhotoUpload from './components/store';
function App() {



  return (
    <>




      <SigninO>
        <Router>
          <main>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/registercreche" element={<RegisterCreche />} />

              <Route path="/signin" element={<SignIn />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/images" element={<PhotoUpload />} />

              
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />

              {/* Protected Routes for Both Users and Owners */}
              <Route
                path="/search"
                element={
                  <Search />
                }
              />
              <Route
                path="/biggercard"
                element={
                  <New />
                }
              />

              {/* Protected Route for Users Only */}
              <Route
                path="/userProfile"
                element={
                  <IsLoggedIn >
                    <UserProfilepage />
                  </IsLoggedIn>
                }
              />

<Route
                path="/owner"
                element={
                  <IsLoggedIn >
                    <OwnerHome />
                  </IsLoggedIn>
                }
              />
              <Route
                path="/register"
                element={
                  // <PrivateRoute >
                    <OwnerHome />
                //  </PrivateRoute> 
                }
              />

<Route
                path="/booking"
                element={
                  // <IsLoggedIn>
                    <Booking />
                  // </IsLoggedIn>
                }
              />
              <Route
                path="/payment"
                element={
                  // <IsLoggedIn>
                    <MakePayment />
                  // </IsLoggedIn>
                }
              />

            </Routes>
          </main>
        </Router>
      </SigninO>
      {/* <Top/>

        <Second/>
        <Third/>
       <Footer/>  */}

      {/* <R9/> */}
    </>
  )
}


export default App


// add phone  number and email in register creche
// save images uploaded byreigister creche in locationinfo.json
// change creche settings button in userprofile
// show the number of the creche owner when click on contact now in biggercard
// add images to all creches 














// import React from 'react';
// import { Link } from 'react-router-dom';

// const App = () => {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default App;