import { useLoaderData } from "react-router-dom";
import Services from "../Services/Services";
import { useState, useEffect } from "react";
import { FaRegTimesCircle, FaUserTie } from "react-icons/fa";

const Home = () => {
    const services = useLoaderData();


    const [showModal, setShowModal] = useState(false);


    const [hasModalShown, setHasModalShown] = useState(false);


    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };


    useEffect(() => {
        const timer = setTimeout(() => {
            if (!hasModalShown && scrollPosition > 300) {
                setShowModal(true);
                setHasModalShown(true);


                setTimeout(() => {
                    setShowModal(false);
                }, 7000);
            }
        }, 1000);


        window.addEventListener("scroll", handleScroll);


        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollPosition, hasModalShown]);


    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">


            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                    <div className="bg-gradient-to-r from-white via-orange-100 to-orange-300 p-8 rounded-lg shadow-xl max-w-sm w-full text-center animate-slide-fade-in">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">
                            Not Sure Which Service is Right for You?
                        </h3>

                       
                        <button className="flex items-center justify-center btn bg-gradient-to-r from-orange-300 to-orange-500 text-white hover:from-orange-400 hover:to-orange-600 py-3 px-6 rounded-lg mb-4 space-x-2">
                            <FaUserTie className="text-xl" />
                            <span>Book Consultant</span>
                        </button>

                       
                        <button
                            onClick={closeModal}
                            className="flex items-center justify-center bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200 space-x-2"
                        >
                            <FaRegTimesCircle className="text-xl" />
                            <span>Close</span>
                        </button>
                    </div>
                </div>
            )}



            <h3 className="text-3xl font-bold text-center mb-8 animate-fade-in">Services</h3>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {services.map(service => (
                    <Services key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Home;

