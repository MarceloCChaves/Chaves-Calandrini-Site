import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import data from "../../data/data.json";
import { Link } from 'react-router-dom';

const Properties = () => {
  const isAvaliable = data.properties.filter((property) => property.disponivel);
  return (
    <>
      <Header />
      <main className="bg-primary-light bg-opacity-50 min-h-screen p-4">
        <h1 className="text-primary-dark text-center text-2xl font-bold mb-4">Imóveis Disponíveis</h1>
        <section className='flex items-center flex-wrap justify-center'>
          {isAvaliable.length ? isAvaliable.map((property) => {
            return (
              <>
                <PropertyCard
                  key={property.id}
                  id={property.id}
                  title={property.titulo}
                  description={property.descricao}
                  price={property.preco}
                  image={property.imagens[0].fachada}
                  disponivel={property.disponivel}
                />
              </>
            )
          }) :
            <article className='text-center'>
              <h3 className="text-primary-dark font-bold mb-4">Desculpe, infelizmente não há imóveis disponíveis no momento</h3>
              <Link to="/" className='bg-primary-dark text-white py-2 px-6 rounded'>Voltar a Home</Link>
            </article>
          }
        </section>
      </main>
      <Footer />
    </>
  )
};

export default Properties;
