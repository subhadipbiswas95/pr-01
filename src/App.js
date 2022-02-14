import {
  BrowserRouter as Router,
  Routes ,
  Route,
   
} from "react-router-dom";
import Navbar from './Components/Navbar';
// import Toggle from "./Components/Toggle/Toggle";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

const App=()=> {
  return (
    <>
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/About"  element={<About/>}/>
              <Route path="/Contact"  element={<Contact/>}/>
                
          </Routes>
      </Router> 
      {/* <Toggle/> */}

    </>
  );
}

export default App;
