import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-primary-dark text-white p-4">
    <nav>
      <ul className="flex justify-center space-x-4">
        <li><Link to="/" className="text-white hover:text-gray-400">Home</Link></li>
        <li><Link to="/about" className="text-white hover:text-gray-400">Sobre</Link></li>
        <li><Link to="/properties" className="text-white hover:text-gray-400">Imóveis</Link></li>
        <li><Link to="/contact" className="text-white hover:text-gray-400">Contato</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
