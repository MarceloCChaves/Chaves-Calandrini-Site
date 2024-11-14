import { Link } from "react-router-dom";

const PropertyCard = ({ title, description, price, image, id, disponivel }) => (
  <Link to={`/Imóveis/${id}`}>
    <div className="flex justify-center">
      <div className="bg-primary-light rounded-lg shadow-md m-4">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg text-primary-dark font-semibold">{title}</h3>
          <p className=" text-primary-dark">{description}</p>
          <span className="text-primary-dark mt-2 font-bold">{price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}<p>Situação: <span className={`font-semibold ${disponivel ? "text-green" : "text-red"}`}>{disponivel ? "Disponível" : "Indisponível"}</span></p></span>
        </div>
      </div>
    </div>
  </Link>
);

export default PropertyCard;
