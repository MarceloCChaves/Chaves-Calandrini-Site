import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Properties from './pages/Properties/Property';
import Contact from './pages/Contact/Contact';
import Property from './pages/Property/Property';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './pages/NotFound/NotFound';
import { register } from 'swiper/element';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

register();

const App = () => (
  <>
    <ToastContainer />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<About />} />
        <Route path="/Imóveis" element={<Properties />} />
        <Route path='/Imóveis/:id' element={<Property/>}/>
        <Route path="/Contato" element={<Contact />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  </>
);

export default App;
