import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

const Header = () => (
  <header className="bg-primary-dark text-white p-4">
    <nav className='flex items-center justify-around'>
      <Link to="/"><img src={Logo} alt="Logo" className='h-20 rounded' /></Link>
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-white hover:text-primary-light font-bold p-5">Home</Link></li>
        <li><Link to="/about" className="text-white hover:text-primary-light font-bold p-5">Sobre</Link></li>
        <li><Link to="/properties" className="text-white hover:text-primary-light font-bold p-5">Imóveis</Link></li>
        <li><Link to="/contact" className="text-white hover:text-primary-light font-bold p-5">Contato</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
