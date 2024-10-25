import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const About = () => (
  <>
    <Header />
    <main className="min-h-screen bg-primary-light bg-opacity-50 p-8 space-y-8">
      <section className="text-center">
        <h1 className="text-primary-dark text-3xl font-bold mb-4">Sobre Nós</h1>
        <p className="text-primary-dark max-w-2xl mx-auto">
          A <strong>Chaves Calandrini Imóveis</strong> é sinônimo de confiança e qualidade no mercado imobiliário, 
          oferecendo um portfólio diversificado de imóveis e atendimento personalizado para cada cliente.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-primary-dark text-xl font-semibold mb-2">Nossa Missão</h2>
          <p>
            Facilitar a realização do sonho da casa própria e garantir soluções ágeis e seguras para
            quem busca vender, comprar ou alugar imóveis.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-primary-dark text-xl font-semibold mb-2">Nossa Visão</h2>
          <p>
            Ser referência no mercado imobiliário, reconhecida pela transparência, inovação e compromisso
            com a satisfação dos clientes.
          </p>
        </div>
      </section>

      <section className="bg-primary-dark bg-opacity-10 rounded-lg p-6">
        <h2 className="text-primary-dark text-xl font-semibold mb-4 text-center">Valores que nos Guiam</h2>
        <ul className="list-disc list-inside space-y-2 text-primary-dark max-w-2xl mx-auto">
          <li>Transparência em todas as negociações.</li>
          <li>Compromisso com a satisfação do cliente.</li>
          <li>Inovação contínua para oferecer as melhores soluções.</li>
          <li>Ética e responsabilidade social.</li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-primary-dark text-xl font-semibold mb-4">Nossa História</h2>
        <p className="max-w-2xl mx-auto">
          Fundada há mais de 20 anos, a Chaves Calandrini nasceu com o objetivo de transformar o mercado
          imobiliário do Pará. Desde então, temos construído relações sólidas com nossos clientes, parceiros e
          colaboradores, sempre guiados pela paixão por imóveis e pelo desejo de fazer a diferença.
        </p>
      </section>
    </main>
    <Footer />
  </>
);

export default About;
