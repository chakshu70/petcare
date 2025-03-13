import React from 'react'
import './App.css'
import Nav from './components/navbar'
import Top from './components/display2'
import Second from './components/2nd'
import Third from './components/3rd'
import Footer from './components/footer'
import Searchbar from './components/searchbar'
import Contact from './pages/contact'
import Home from './pages/home'
import SignIn from './pages/signin'
// import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rough4 from './rough/rough4'
import Rough5 from './rough/rough5'
import Search from './pages/search'
import Rough2 from './rough/rough2'
import R6 from './rough/r6'
import R7 from './rough/r7'
// import BestSeller from './rough/r8'
import New from './components/biggercard'


function App(){
  
// const [search, setSearch] = React.useState('')
// fetch('http://localhost:3000/getdata').then(response => response.text()).then(data => {console.log(data)
//   setSearch(data)
// }
// )

  return (
    <>

{/* <div>{search}</div> */}
  

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
{/* <Top/>

        <Second/>
        <Third/>
       <Footer/>  */}
       
{/* <New/> */}
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