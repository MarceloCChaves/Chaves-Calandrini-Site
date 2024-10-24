const PropertyCard = ({ title, description, price, image }) => (
  <div className="bg-primary-light rounded-lg shadow-md overflow-hidden m-4">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg text-primary-dark font-semibold">{title}</h3>
      <p className="text-gray-600 text-primary-dark">{description}</p>
      <span className="text-primary-dark block mt-2 text-blue-500 font-bold">{price}</span>
    </div>
  </div>
);

export default PropertyCard;