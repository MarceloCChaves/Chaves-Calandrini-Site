import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => (
  <>
    <Header />
    <main className="min-h-screen bg-primary-light bg-opacity-50 p-8 space-y-8">
      <h1 className="text-center text-primary-dark text-3xl font-bold mb-4">Entre em Contato</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded shadow-md">
          <h2 className="text-primary-dark text-xl font-semibold mb-4">Fale Conosco</h2>
          <ContactForm />
        </div>

        <div className="p-6 bg-primary-dark bg-opacity-10 rounded shadow-md space-y-4">
          <h2 className="text-primary-dark text-xl font-semibold mb-4">Informações de Contato</h2>
          <ul className="space-y-2 text-primary-dark">
            <li className="flex items-center space-x-2">
              <FaPhone />
              <span>Telefone: (91) 99100-7732</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope />
              <span>E-mail: chavescalandrini@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <span>Endereço: Rua Municipalidade, nº 985 - Belém, PA</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaClock />
              <span>Horário: Segunda a Sexta, 9h às 18h</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Contact;
