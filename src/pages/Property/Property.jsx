import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import properties from "../../data/data.json";

const Property = () => {
  const { id } = useParams();
  const property = properties.properties.find((item) => item.id == id);

  const {
    titulo, descricao, endereco, preco, tipo, quartos, banheiros, garagem, imagem, disponivel
  } = property;

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center bg-primary-light bg-opacity-50 min-h-screen bg-gray-50 py-12">
        <section className="bg-primary-light shadow-lg rounded-lg overflow-hidden max-w-4xl w-full mx-4 md:mx-0">
          <img
            src={imagem}
            alt={titulo}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h1 className="text-3xl font-bold text-primary-dark mb-4 text-center">{titulo}</h1>
            <p className="text-primary-dark mb-6">{descricao}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <p className="text-primary-dark">
                <strong>Endereço:</strong> {endereco}
              </p>
              <p className="text-primary-dark">
                <strong>Preço:</strong> {preco.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
              <p className="text-primary-dark">
                <strong>Tipo:</strong> {tipo}
              </p>
              <p className="text-primary-dark">
                <strong>Quartos:</strong> {quartos}
              </p>
              <p className="text-primary-dark">
                <strong>Banheiros:</strong> {banheiros}
              </p>
              <p className="text-primary-dark">
                <strong>Garagem:</strong> {garagem ? "Sim" : "Não"}
              </p>
              <p className={`text-lg font-semibold ${disponivel ? "text-green" : "text-red"}`}>
                {disponivel ? "Disponível" : "Indisponível"}
              </p>
            </div>

            {disponivel ? <button className="w-full bg-primary-dark text-white py-3 rounded-md">
              Entrar em Contato
            </button> : <></>}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Property;
