
const Services = ({ service }) => {
    
    const { image, name, category, price, counselor, description } = service;

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={image} alt={name} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <p className="text-sm text-gray-600">{category}</p>
                <p className="text-gray-700">{description}</p>
                <p className="font-semibold">Counselor: {counselor}</p>
                
                <div className="card-actions justify-end">
                    <button className="btn bg-gradient-to-r from-orange-400 to-orange-500 text-white">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Services;
