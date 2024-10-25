import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary-dark text-white p-4">
      <nav className="flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-20 rounded" />
        </Link>
        <button 
          className="md:hidden text-white text-3xl" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-primary-light font-bold p-5">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Sobre" className="text-white hover:text-primary-light font-bold p-5">
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/Imóveis" className="text-white hover:text-primary-light font-bold p-5">
              Imóveis
            </Link>
          </li>
          <li>
            <Link to="/Contato" className="text-white hover:text-primary-light font-bold p-5">
              Contato
            </Link>
          </li>
        </ul>
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-28 left-0 w-full bg-primary-dark md:hidden flex flex-col space-y-4 p-5`}
        >
          <li>
            <Link 
              to="/" 
              className="text-white hover:text-primary-light font-bold p-2 underline"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/Sobre" 
              className="text-white hover:text-primary-light font-bold p-2 underline"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link 
              to="/Imóveis" 
              className="text-white hover:text-primary-light font-bold p-2 underline"
              onClick={() => setIsOpen(false)}
            >
              Imóveis
            </Link>
          </li>
          <li>
            <Link 
              to="/Contato" 
              className="text-white hover:text-primary-light font-bold p-2 underline"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
