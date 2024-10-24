import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';

const Contact = () => (
  <>
    <Header />
    <main className="min-h-screen bg-primary-light bg-opacity-50 p-4">
      <h1 className="text-center text-primary-dark text-2xl font-bold mb-4">Entre em Contato</h1>
      <ContactForm />
    </main>
    <Footer />
  </>
);

export default Contact;
