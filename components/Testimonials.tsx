
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mei Chen',
      university: 'University of Toronto, Canada',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      quote: "Tensai Study Abroad made my dream of studying in Canada come true. Their guidance throughout the application and visa process was invaluable. I highly recommend their services!",
    },
    {
      name: 'Akira Tanaka',
      university: 'University of California, Berkeley, USA',
      image: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      quote: "Thanks to Tensai Study Abroad, I got accepted into my dream university. Their counselors are knowledgeable, responsive, and truly care about their students' success.",
    },
    {
      name: 'Priya Singh',
      university: 'Imperial College London, UK',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      quote: "I was overwhelmed by the prospect of studying abroad until I found Tensai. They simplified every step of the process and provided constant support. I'm now thriving at Imperial College!",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#004aad] text-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 text-center">
          Success Stories
        </h2>
        <p className="text-lg text-gray-100 max-w-3xl mx-auto mb-12 text-center">
          Hear from our students who have successfully embarked on their international education journeys.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-[#00398e] p-6 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-gray-200 text-sm">{testimonial.university}</p>
                </div>
              </div>
              <p className="text-gray-100 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="bg-white hover:bg-gray-100 text-[#004aad] font-medium py-2.5 px-5 rounded-lg transition-all duration-200 inline-flex items-center justify-center">
            Share Your Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
