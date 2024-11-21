import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import { Link } from 'react-router-dom';
import banner from '../../assets/aluga-apartamento.webp';
import data from "../../data/data.json";

const Home = () => (
  <>
    <Header />
    <section className="h-96 bg-cover bg-center-top" style={{ backgroundImage: `url(${banner})` }}>
      <div className="bg-white bg-opacity-50 h-full flex flex-col justify-center items-center text-white text-center p-4">
        <div className='bg-primary-light p-10 rounded bg-opacity-30 shadow-inner'>
          <h1 className="text-primary-dark text-4xl font-bold mb-4">Encontre o imóvel dos seus sonhos</h1>
          <p className="text-primary-dark mb-6 font-bold">
            Na Chaves Calandrini, localizada em Belém - PA, oferecemos as melhores opções para quem deseja encontrar o apartamento dos sonhos.
          </p>
          <Link to="/Imóveis" className="bg-primary-dark hover:bg-blue-600 py-2 px-4 rounded text-white">
            Ver Imóveis Disponíveis
          </Link>
        </div>
      </div>
    </section>

    <main className="bg-primary-dark p-8">
      <h2 className="flex justify-center text-white text-3xl font-bold mb-8">Imóveis em Destaque</h2>
      <p className="text-white text-center mb-8">
        Conheça algumas das melhores opções de imóveis disponíveis em Belém. Clique na imagem para saber mais.
      </p>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.properties.map((property) => {
          return (
            <PropertyCard
              key={property.id}
              id={property.id}
              title={property.titulo}
              description={property.descricao}
              price={property.preco}
              image={property.imagens[0].imagem}
              disponivel={property.disponivel}
            />
          )
        }).slice(0, 3)}
      </section>
    </main>

    <section className="flex justify-center bg-primary-light bg-opacity-50 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl text-primary-dark font-bold">Nossos Serviços</h2>
        <p className="text-primary-dark">
          Oferecemos consultoria especializada, intermediação de vendas e locações, e suporte completo para quem busca um novo lar ou investimento imobiliário.
        </p>
        <div className='flex justify-between'>
          <div className="flex justify-center space-x-4">
            <div className="bg-primary-dark p-4 rounded shadow-md max-w-sm">
              <h3 className="text-xl text-white font-semibold mb-2">Aluguéis</h3>
              <p className='text-white'>Imóveis prontos para morar ou investir, com contratos flexíveis e gestão simplificada.</p>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <div className="bg-primary-dark p-4 rounded shadow-md max-w-sm">
              <h3 className="text-xl text-white font-semibold mb-2">Venda</h3>
              <p className='text-white'>Para quem busca vender um imóvel, oferecemos todo o suporte para a realização.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-primary-dark text-white text-center py-16">
      <h2 className="text-3xl font-bold mb-4">Entre em Contato Conosco</h2>
      <p className="max-w-lg mx-auto mb-8">
        Precisa de ajuda para encontrar o imóvel ideal? Nossa equipe está pronta para atender você!
      </p>
      <Link to="/Contato" className="bg-primary-light text-primary-dark font-semibold py-2 px-6 rounded">
        Fale Conosco
      </Link>
    </section>
    <Footer />
  </>
);

export default Home;
