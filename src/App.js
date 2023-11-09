
import  {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Services from './pages/Services'

import Contact from './pages/Conatct'
import Pagenotfound from "./pages/Pagenotfound";
import Footer from "./components/Footer";
import Header from "./components/Layout/Header";
import Work from "./pages/Work";
import Admin from "./pages/Admin";
import Test from "./pages/Test";
import Login from "./pages/Login";


function App() {
  return (
    <>
    
    <div>

     
    <BrowserRouter>
   
      
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/services" element={<Services />}/>
      <Route  element={<Contact />}/>
      
      <Route path="/login" element={<Login/>}/>

      <Route path="*" element={<Pagenotfound />}/>
    </Routes>
     {/* <Routes path='/admin' element={<Admin/>}>
         <Route path='cf' element={<Admin/>}></Route>
     </Routes>
    */}
     </BrowserRouter>
     <Footer/> 
    </div>
   
    </>
  );
}

export default App;
