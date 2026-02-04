import React from 'react';
import {GraduationCap, Globe} from 'lucide-react';

const Hero = () => {
    return (
        <section className="pt-28 pb-20 md:pt-36 md:pb-24 bg-gradient-to-br from-white to-[#f0f7fe]">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-7 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#004aad] leading-tight mb-6">
                            Turning Aspirations into Achievements
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                            Tensai Study Abroad helps you navigate the complex world of international education with
                            personalized guidance and support at every step.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#contact" className="btn-primary text-center">
                                Get Free Consultation
                            </a>
                            <a href="#destinations" className="btn-outline text-center">
                                Explore Destinations
                            </a>
                        </div>
                    </div>
                    <div className="md:col-span-5 animate-fade-in animate-delay-2">
                        <div className="relative">
                            <div className="bg-white p-6 rounded-2xl shadow-xl">
                                <img
                                    src="/hero.jpg"
                                    alt="Students studying abroad"
                                    className="w-full h-auto rounded-lg object-cover"
                                />
                            </div>

                            <div
                                className="absolute -bottom-5 -left-5 bg-white p-3 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in-right animate-delay-3">
                                <div className="bg-[#f0f7fe] p-2 rounded-full">
                                    <GraduationCap className="text-[#004aad] w-6 h-6"/>
                                </div>
                                <div>
                                    <p className="font-semibold text-[#004aad]">500+</p>
                                    <p className="text-sm text-gray-500">Universities</p>
                                </div>
                            </div>

                            <div
                                className="absolute -top-5 -right-5 bg-white p-3 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in animate-delay-4">
                                <div className="bg-[#f0f7fe] p-2 rounded-full">
                                    <Globe className="text-[#004aad] w-6 h-6"/>
                                </div>
                                <div>
                                    <p className="font-semibold text-[#004aad]">15+</p>
                                    <p className="text-sm text-gray-500">Countries</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
