'use client';
import React, {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {useToast} from '@/hooks/use-toast';
import {MapPin, Mail, Phone} from 'lucide-react';

const Contact = () => {
    const {toast} = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        // Show success toast
        toast({
            title: "Message Sent!",
            description: "We'll get back to you as soon as possible.",
            duration: 5000,
        });

        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container">
                <h2 className="section-heading text-center">Contact Us</h2>
                <p className="section-subheading text-center">
                    Have questions? Get in touch with our education consultants for personalized assistance.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="bg-[#f0f7fe] p-2 rounded-full">
                                    <MapPin className="text-[#004aad] w-5 h-5"/>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#004aad] mb-1">DHAKA OFFICE</h3>
                                    <p className="text-gray-600">Kha-214/E, 5th Floor, Pragati Tower, Merul Badda (Near
                                        Brac University)</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="bg-[#f0f7fe] p-2 rounded-full">
                                    <MapPin className="text-[#004aad] w-5 h-5"/>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#004aad] mb-1">UK OFFICE</h3>
                                    <p className="text-gray-600">300 Barking Road, E13 8HL, London</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="bg-[#f0f7fe] p-2 rounded-full">
                                    <Mail className="text-[#004aad] w-5 h-5"/>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#004aad] mb-1">Email Us</h3>
                                    <p className="text-gray-600">info@tensaistudyabroad.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="bg-[#f0f7fe] p-2 rounded-full">
                                    <Phone className="text-[#004aad] w-5 h-5"/>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#004aad] mb-1">Call Us</h3>
                                    <p className="text-gray-600">+8801731 640 666 (Call/WhatsApp)</p>
                                    <p className="text-gray-600">+8801896 088 956 (Call/WhatsApp)</p>
                                    <p className="text-gray-600">+44 7482 443968 (UK)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                            <h3 className="text-2xl font-semibold text-[#004aad] mb-6">Get Free Consultation</h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Full
                                            Name</label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Enter your full name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email"
                                               className="text-sm font-medium text-gray-700">Email</label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone
                                        Number</label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message"
                                           className="text-sm font-medium text-gray-700">Message</label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell us about your study abroad goals"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-[#004aad] hover:bg-[#003b8e] text-white"
                                >
                                    Submit Request
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
