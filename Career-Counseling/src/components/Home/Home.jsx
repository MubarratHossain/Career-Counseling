import { useLoaderData } from "react-router-dom";
import Services from "../Services/Services";

const Home = () => {
    const services = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {services.map(service => (
                    <Services key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Home;
