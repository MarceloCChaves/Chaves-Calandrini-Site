import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Properties from './pages/Properties/Property';
import Contact from './pages/Contact/Contact';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
