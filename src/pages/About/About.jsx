import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const About = () => (
  <>
    <Header />
    <main className="min-h-screen bg-primary-light bg-opacity-50 p-4">
      <h1 className="text-center text-primary-dark text-2xl font-bold mb-4">Sobre Nós</h1>
      <p className="text-center text-primary-dark max-w-2xl mx-auto">
        A Chaves Calandrini Imóveis é uma imobiliária de confiança, oferecendo imóveis de qualidade e
        atendimento personalizado.
      </p>
    </main>
    <Footer />
  </>
);

export default About;
