import { useLoaderData } from "react-router-dom";
import Services from "../Services/Services";
import { useState, useEffect, useRef } from "react";
import { FaRegTimesCircle, FaUserTie } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";

const Home = () => {
    const { services, consultants, clients } = useLoaderData();
    const [showModal, setShowModal] = useState(false);
    const [hasModalShown, setHasModalShown] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const bookConsultantRef = useRef(null);

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

    const handleBookConsultant = () => {
        if (bookConsultantRef.current) {
            bookConsultantRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 px-4">
                    <div className="bg-gradient-to-r from-white via-orange-100 to-orange-300 p-6 rounded-lg shadow-xl w-full max-w-md text-center">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">
                            Not Sure Which Service is Right for You?
                        </h3>

                        <button
                            onClick={handleBookConsultant}
                            className="flex items-center justify-center btn bg-gradient-to-r from-orange-300 to-orange-500 text-white hover:from-orange-400 hover:to-orange-600 py-3 px-6 rounded-lg mb-4 space-x-2"
                        >
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

            
            <h3 className="text-3xl font-bold text-center mb-8">Services</h3>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <Services key={service.id} service={service} />
                ))}
            </div>

            
            <div ref={bookConsultantRef} className="py-12">
                <h3 className="text-3xl font-bold text-center mb-6">Book a Consultant</h3>
                <p className="text-center mb-8 text-gray-600">
                    Choose a consultant and book a session with them.
                </p>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {consultants.map((consultant) => (
                        <div
                            key={consultant.id}
                            className="p-6 flex flex-col items-center text-center rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                            style={{
                                background: "linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)",
                            }}
                        >
                            <img
                                src={consultant.image}
                                alt={consultant.name}
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4 border-4 border-white shadow-lg"
                            />
                            <h4 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 flex items-center space-x-2">
                                <span>{consultant.name}</span>
                                <FaUserTie className="text-orange-500" />
                            </h4>
                            <p className="text-gray-700 text-sm sm:text-base mb-4">
                                {consultant.expertise}
                            </p>
                            <button
                                className="flex items-center justify-center bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-orange-500 hover:to-pink-600 transition-all duration-200 space-x-2 shadow-md"
                                onClick={() => alert(`Booked with ${consultant.name}`)}
                            >
                                <AiOutlineSchedule className="text-xl" />
                                <span>Book Now</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Happy Clients Section */}
            <div className="py-12 bg-gray-50">
                <h3 className="text-4xl font-extrabold text-center mb-10 text-gray-900">
                    Our Happy Clients
                </h3>
                <div className="overflow-hidden">
                    <div className="flex animate-marquee space-x-8 items-center">
                        {clients.map((client) => (
                            <div
                                key={client.id}
                                className="flex-shrink-0 bg-white shadow-lg p-6 rounded-lg flex items-center space-x-6 transform hover:scale-105 transition-transform duration-300"
                                style={{ width: "240px" }}
                            >
                                <img
                                    src={client.image}
                                    alt={client.name}
                                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-md border-2 border-orange-300"
                                />
                                <div>
                                    <p className="font-bold text-gray-900 text-base sm:text-lg">
                                        {client.name}
                                    </p>
                                    <p className="text-sm sm:text-base text-gray-700 italic">
                                        {client.feedback}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
