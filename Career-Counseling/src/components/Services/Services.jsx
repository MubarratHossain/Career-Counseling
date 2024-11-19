import { FaInfoCircle, FaUser, FaHandPaper } from "react-icons/fa"; 
import { NavLink } from "react-router-dom";

const Services = ({ service }) => {
    const { image, name, category, price, counselor, description, id } = service;

    return (
        <div className="card bg-gradient-to-r from-white via-orange-100 to-orange-300 w-full sm:w-80 md:w-96 lg:w-80 shadow-xl hover:animate-spin-sideways transition-transform duration-1000">
            <figure>
                <img src={image} alt={name} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title text-2xl font-bold flex items-center">
                    {name}
                </h2>
                <p className="text-sm text-gray-600">{category}</p>
                <p className="text-gray-700 text-sm">{description}</p>
                <p className="font-semibold flex items-center text-sm">
                    <FaUser className="mr-2 text-lg text-orange-500" /> Counselor: {counselor}
                </p>
                <div className="card-actions justify-end">
                    <NavLink
                        to={`/details/${id}`}  
                        className="btn btn-outline text-black flex items-center text-sm"
                    >
                        <FaInfoCircle className="mr-2 text-lg animate-shake" />
                        Learn More
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Services;

