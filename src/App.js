import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
function App() {
  return(
  <>    

    <Navbar />
      <div className='container'>
    <Routes>
      <Route path = "/" element= {<Home />} /> 
      <Route path = "/about" element= {<About />} />
      <Route path = "/pricing" element= {<Pricing />} />
      <Route path = "/contact" element= {<Contact />} />

    </Routes>
    </div>
    <Footer />


  </>

  ) 
}

export default App;
