import React from 'react'
import '../App.css'
import Nav from '../components/navbar'
import Top from '../components/display2'
import Second from '../components/2nd'
import Third from '../components/3rd'
import Footer from '../components/footer'
import Searchbar from '../components/searchbar'

// import Home from './pages/home'
// import SignIn from 'signin'
import SignIn from './signin'
// import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


function App(){
  

  return (
    <>

<Nav/>

<Top/>

        <Second/>
        <Third/>
       <Footer/> 
       
 
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