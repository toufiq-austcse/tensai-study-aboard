
import React from 'react';
import { GraduationCap, Globe, Book, Users } from 'lucide-react';

const Features = () => {
  const services = [
    {
      icon: <GraduationCap className="w-10 h-10 text-[#004aad]" />,
      title: 'University Admissions',
      description: 'We guide you through the entire university application process, from selecting the right institutions to preparing compelling applications.',
    },
    {
      icon: <Globe className="w-10 h-10 text-[#004aad]" />,
      title: 'Visa Assistance',
      description: 'Our experts provide comprehensive support for student visa applications, ensuring you have the best chance of approval.',
    },
    {
      icon: <Book className="w-10 h-10 text-[#004aad]" />,
      title: 'Test Preparation',
      description: 'Access specialized coaching for IELTS, TOEFL, GRE, GMAT, and other standardized tests required for international admissions.',
    },
    {
      icon: <Users className="w-10 h-10 text-[#004aad]" />,
      title: 'Pre-Departure Guidance',
      description: 'Receive practical advice on accommodation, travel arrangements, cultural adaptation, and other aspects of living abroad.',
    },
  ];

  const destinations = [
    {
      country: 'United States',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      facts: "Home to 8 of the world's top 10 universities",
    },
    {
      country: 'United Kingdom',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      facts: 'World-class education with rich cultural heritage',
    },
    {
      country: 'Canada',
      image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      facts: 'Excellent quality of life and post-study work opportunities',
    },
    {
      country: 'Australia',
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      facts: 'Innovation-focused education and vibrant student communities',
    },
  ];

  return (
    <>
      <section id="services" className="py-20 bg-white">
        <div className="container">
          <h2 className="section-heading text-center">Our Services</h2>
          <p className="section-subheading text-center">
            We offer comprehensive support to make your international education journey smooth and successful.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm card-hover"
              >
                <div className="bg-[#f0f7fe] w-16 h-16 flex items-center justify-center rounded-lg mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#004aad] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="destinations" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="section-heading text-center">Popular Destinations</h2>
          <p className="section-subheading text-center">
            Explore opportunities at world-class educational institutions across the globe.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {destinations.map((destination, index) => (
              <div 
                key={index}
                className="rounded-xl overflow-hidden shadow-sm bg-white card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.country} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-[#004aad] mb-2">
                    {destination.country}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {destination.facts}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="#contact" className="btn-outline">
              Explore More Destinations
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
