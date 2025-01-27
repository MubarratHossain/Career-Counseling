import { useLoaderData } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FaRegTimesCircle, FaUserTie } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const { services, consultants, clients } = useLoaderData();
    const [showModal, setShowModal] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const bookConsultantRef = useRef(null);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        const hasModalShown = localStorage.getItem('hasModalShown');


        if (!hasModalShown) {
            const timer = setTimeout(() => {
                if (scrollPosition > 600) {
                    setShowModal(true);


                    localStorage.setItem('hasModalShown', 'true');

                    setTimeout(() => {
                        setShowModal(false);
                    }, 4000);
                }
            }, 1000);

            window.addEventListener("scroll", handleScroll);

            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [scrollPosition]);

    const handleBookConsultant = () => {
        if (bookConsultantRef.current) {
            bookConsultantRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 120,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-8  mt-[120px] rounded-lg">
            <Helmet>
                <title>JobZen - Home</title>
                <meta name="description" content="Welcome to JobZen, where you can find expert consultants and services to advance your career." />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="JobZen - Home" />
                <meta property="og:description" content="Explore services, book consultants, and read feedback from our happy clients." />
                <meta property="og:image" content="URL_TO_IMAGE" />
                <meta property="og:url" content="URL_TO_THIS_PAGE" />
            </Helmet>

            <Banner></Banner>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 px-4">
                    <div className="bg-gradient-to-r from-white via-orange-100 to-orange-300 p-6 rounded-lg shadow-xl w-full max-w-md text-center">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">
                            Not Sure Which Service is Right for You?
                        </h3>

                        <button
                            onClick={handleBookConsultant}
                            className="flex items-center justify-center btn bg-gradient-to-r from-orange-300 to-orange-500 text-white hover:from-orange-400 hover:to-orange-600 py-3 px-6 rounded-lg mb-4 space-x-2 animate-shake"
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

            <h3 className="text-3xl font-bold text-center mt-8 text-black">Services</h3>
            <div
                className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12"
                data-aos="fade-up"
            >
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                    >
                        <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden rounded-lg mb-4">
                            <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                        <h4 className="text-xl font-bold mb-2 text-gray-800">{service.name}</h4>
                        <p className="text-gray-700 text-sm mb-4">{service.description}</p>
                        <Link
                            to={`/details/${service.id}`}
                            className="inline-block bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-orange-500 hover:to-pink-600 transition-all duration-200 shadow-md"
                        >
                            Learn More
                        </Link>
                    </div>
                ))}
            </div>



            <div ref={bookConsultantRef} className="py-12" data-aos="zoom-in">
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
                            <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <img
                                    src={consultant.img}
                                    alt={consultant.name}
                                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <h4 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 flex items-center space-x-2">
                                <span>{consultant.name}</span>
                                <FaUserTie className="text-orange-500" />
                            </h4>
                            <p className="text-gray-700 text-sm sm:text-base mb-4">
                                {consultant.expertise}
                            </p>
                            <Link
                                to={`/bookNow/${consultant.id}`}
                                className="flex items-center justify-center bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-orange-500 hover:to-pink-600 transition-all duration-200 space-x-2 shadow-md"
                            >
                                <AiOutlineSchedule className="text-xl" />
                                <span>Book Now</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-12 bg-gray-50" data-aos="fade-right">
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
