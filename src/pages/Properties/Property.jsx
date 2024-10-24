import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PropertyCard from '../../components/PropertyCard/PropertyCard';

const Properties = () => (
  <>
    <Header />
    <main className="bg-primary-light bg-opacity-50 min-h-screen bg-gray-100 p-4">
      <h1 className="text-primary-dark text-center text-2xl font-bold mb-4">Imóveis Disponíveis</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PropertyCard
          title="Casa Moderna"
          description="Casa ampla com piscina e jardim."
          price="R$ 750.000"
          image="/images/casa.jpg"
        />
      </section>
    </main>
    <Footer />
  </>
);

export default Properties;
