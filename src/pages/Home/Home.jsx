import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import { Link } from 'react-router-dom';
import banner from '../../assets/Mesa-de-reunião.webp';

const Home = () => (
  <>
    <Header />
    <section className="h-96 bg-cover bg-center-top" style={{ backgroundImage: `url(${banner})` }}>
      <div className="bg-white bg-opacity-50 h-full flex flex-col justify-center items-center text-white text-center p-4">
        <div className='bg-primary-light p-10 rounded bg-opacity-30 shadow-inner'>
          <h1 className="text-primary-dark text-4xl font-bold mb-4">Encontre o imóvel dos seus sonhos</h1>
          <p className="text-primary-dark mb-6 font-bold">
            Na Chaves Calandrini, oferecemos as melhores opções para quem deseja comprar, vender ou alugar.
          </p>
          <Link to="/properties" className="bg-primary-dark hover:bg-blue-600 py-2 px-4 rounded text-white">
            Ver Imóveis Disponíveis
          </Link>
        </div>
      </div>
    </section>

    <main className="bg-primary-dark p-8">
      <h2 className="text-center text-white text-3xl font-bold mb-8">Imóveis em Destaque</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PropertyCard
          title="Apartamento de Alto Padrão"
          description="Apartamento mobiliado, vista para a cidade, no coração da capital."
          price="R$ 1.200.000"
          image="/images/apartamento.jpg"
        />
        <PropertyCard
          title="Casa com Piscina"
          description="Casa ampla em condomínio fechado, com área de lazer completa."
          price="R$ 750.000"
          image="/images/casa.jpg"
        />
        <PropertyCard
          title="Cobertura Exclusiva"
          description="Cobertura com 4 suítes e espaço gourmet, perfeita para receber amigos."
          price="R$ 2.500.000"
          image="/images/cobertura.jpg"
        />
      </section>
    </main>

    <section className="bg-primary-light bg-opacity-50 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl text-primary-dark font-bold">Nossos Serviços</h2>
        <p className="text-primary-dark">
          Oferecemos consultoria especializada, intermediação de vendas e locações, e suporte completo para
          quem busca um novo lar ou investimento imobiliário.
        </p>
        <div className="flex justify-center space-x-4">
          <div className="bg-primary-dark p-4 rounded shadow-md max-w-sm">
            <h3 className="text-xl text-white font-semibold mb-2">Aluguéis</h3>
            <p className='text-white'>Imóveis prontos para morar ou investir, com contratos flexíveis e gestão simplificada.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-primary-dark text-white text-center py-16">
      <h2 className="text-3xl font-bold mb-4">Entre em Contato Conosco</h2>
      <p className="max-w-lg mx-auto mb-8">
        Precisa de ajuda para encontrar o imóvel ideal? Nossa equipe está pronta para atender você!
      </p>
      <Link to="/contact" className="bg-primary-light text-primary-dark font-semibold py-2 px-6 rounded">
        Fale Conosco
      </Link>
    </section>
    <Footer />
  </>
);

export default Home;
