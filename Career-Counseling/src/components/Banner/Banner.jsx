import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

import BannerImage1 from './background.png';
import BannerImage2 from './background.png';
import BannerImage3 from './background.png';

const Banner = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="w-[90%] mx-auto"
        >
            <SwiperSlide>
                <div
                    className="hero h-[75vh] md:h-[65vh] lg:h-[60vh] rounded-lg overflow-hidden"
                    style={{
                        backgroundImage: `url(${BannerImage1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="hero-overlay bg-black bg-opacity-40"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-4xl font-bold">Empowering Your Career Journey</h1>
                            <p className="mb-5">
                                Get personalized career guidance to help you achieve your professional goals. Start your journey towards a brighter future today.
                            </p>
                            <button className="btn bg-gradient-to-r from-orange-300 to-orange-500 text-white hover:from-orange-400 hover:to-orange-600 shadow-md">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div
                    className="hero h-[75vh] md:h-[65vh] lg:h-[60vh] rounded-lg overflow-hidden"
                    style={{
                        backgroundImage: `url(${BannerImage2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="hero-overlay bg-black bg-opacity-40"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-4xl font-bold">Find Your Ideal Career Path</h1>
                            <p className="mb-5">
                                Discover careers that match your skills and interests. Our expert advice can help you make informed decisions for a successful career.
                            </p>
                            <button className="btn bg-gradient-to-r from-orange-300 to-orange-500 text-white hover:from-orange-400 hover:to-orange-600 shadow-md">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div
                    className="hero h-[75vh] md:h-[65vh] lg:h-[60vh] rounded-lg overflow-hidden"
                    style={{
                        backgroundImage: `url(${BannerImage3})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="hero-overlay bg-black bg-opacity-40"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-4xl font-bold">Unlock Your True Potential</h1>
                            <p className="mb-5">
                                Join our community and gain access to exclusive resources, workshops, and expert counseling to elevate your career.
                            </p>
                            <button className="btn bg-gradient-to-r from-orange-300 to-orange-500 text-white hover:from-orange-400 hover:to-orange-600 shadow-md">
                                Join Us
                            </button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;
