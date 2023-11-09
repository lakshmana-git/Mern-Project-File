
import  {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Services from './pages/Services'

import Contact from './pages/Conatct'
import Pagenotfound from "./pages/Pagenotfound";
import Footer from "./components/Footer";

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
      
     

     
    </Routes>
  
     </BrowserRouter>
     <Footer/> 
    </div>
   
    </>
  );
}

export default App;
