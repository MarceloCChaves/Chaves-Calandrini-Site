import { FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="flex justify-between items-center flex-wrap text-center bg-primary-light text-primary-dark p-4">
    <p>© {new Date().getFullYear()} Chaves Calandrini Imóveis. Todos os direitos reservados.</p>
    <div className="flex items-center text-center space-x-4">
      <p>Desenvolvido por <a className="underline hover:text-" href="https://marcelochaves.vercel.app/">Marcelo Chaves</a></p>
      <a href="https://www.instagram.com/chavescalandriniimoveis" target="_blank" rel="noreferrer"><FaInstagram size={20} color="text-primary-dark"/></a>
    </div>
  </footer>
);

export default Footer;
