import { FaInfoCircle, FaUser } from "react-icons/fa"; 

const Services = ({ service }) => {
    const { image, name, category, price, counselor, description } = service;

    return (
        <div className="card bg-gradient-to-r from-white via-orange-100 to-orange-300 w-96 shadow-xl hover:animate-spin-sideways transition-transform duration-1000">
            <figure>
                <img src={image} alt={name} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <p className="text-sm text-gray-600">{category}</p>
                <p className="text-gray-700">{description}</p>
                <p className="font-semibold flex items-center">
                    <FaUser className="mr-2 text-lg text-orange-500" /> Counselor: {counselor}
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline text-black flex items-center">
                        <FaInfoCircle className="mr-2 text-lg" />
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Services;


