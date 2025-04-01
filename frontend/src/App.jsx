import React from 'react'
import './App.css'

import Contact from './pages/contact'
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
function App(){
  


  return (
    <>

  
<SigninO>
  
<Router>
      <main>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} /> 
           <Route path="/contact" element={<Contact />} />
           <Route path="/search" element={<Search/>}/>
           <Route path="/biggercard" element={<New/>}/>

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