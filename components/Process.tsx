
import React from 'react';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Free Consultation',
      description: 'Schedule a free consultation with our education experts to discuss your goals and preferences.',
    },
    {
      number: '02',
      title: 'Profile Assessment',
      description: 'Our team evaluates your academic background, test scores, and preferences to recommend suitable options.',
    },
    {
      number: '03',
      title: 'University Selection',
      description: 'Based on your profile, we help you select universities that align with your academic goals and budget.',
    },
    {
      number: '04',
      title: 'Application Submission',
      description: 'We guide you through the entire application process, including document preparation and submission.',
    },
    {
      number: '05',
      title: 'Visa Processing',
      description: 'Once you receive an offer, we assist you with visa application preparation and interview coaching.',
    },
    {
      number: '06',
      title: 'Pre-Departure Support',
      description: 'We provide comprehensive guidance on travel arrangements, accommodation, and cultural adaptation.',
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-heading text-center">How It Works</h2>
        <p className="section-subheading text-center">
          We've simplified the process of studying abroad into six straightforward steps.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex gap-4"
            >
              <div className="w-12 h-12 bg-[#f0f7fe] text-[#004aad] rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#004aad] mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary">
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
