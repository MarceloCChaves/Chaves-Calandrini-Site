import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Properties from './pages/Properties/Property';
import Contact from './pages/Contact/Contact';
import Property from './pages/Property/Property';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      </Routes>
    </Router>
  </>
);

export default App;
