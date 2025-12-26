import { useState } from 'react';
import ContactForm from '../components/ContactForm';

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">S</span>
                            </div>
                            <span className="text-xl font-bold text-gray-900">SAFNECT</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
                            <a href="#services" className="text-gray-600 hover:text-blue-600 transition">Services</a>
                            <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition">Benefits</a>
                            <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">Contact Us</a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-gray-600 hover:text-blue-600"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <div className="md:hidden py-4 border-t border-gray-100">
                            <div className="flex flex-col gap-4">
                                <a href="#about" className="text-gray-600 hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>About</a>
                                <a href="#services" className="text-gray-600 hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Services</a>
                                <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Benefits</a>
                                <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition text-center" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        SAFNECT — <span className="text-blue-600">Connecting Care</span> with Technology
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                        A real-time hospital management platform to help healthcare providers manage beds, appointments, and patient bookings effortlessly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/30">
                            Get Started
                        </a>
                        <a href="#about" className="bg-white text-gray-700 px-8 py-4 rounded-lg text-lg font-medium border border-gray-200 hover:border-blue-600 hover:text-blue-600 transition">
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About SAFNECT</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Safnect is a healthcare technology startup that provides a comprehensive platform for hospitals and clinics to manage their resources efficiently and offers real-time tracking and online booking of medical facilities. It focuses on bridging the gap in real-time patient information and optimising resource management for healthcare providers.
                        </p>
                    </div>

                    {/* Problem & Solution */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl">⚠️</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">The Problem</h3>
                            <p className="text-gray-600">
                                There is a significant lack of real-time information on critical hospital resources which makes it difficult for patients and their families to access up-to-date details on the availability of ICU beds, ventilators and child nursery facilities. Existing software lacks two-way communication with patients for regular updates, announcements and crowd management.
                            </p>
                        </div>
                        <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl">✅</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Solution</h3>
                            <p className="text-gray-600">
                                An integrated hospital management platform which links the clinics, doctors and the hospitals on the one side and their patients on the other side in a real-time easy to use system. It provides advanced tools for tracking and optimising the utilisation of resources.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Key Services</h2>
                        <p className="text-lg text-gray-600">Integrated software platforms that streamline business operations</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                <span className="text-2xl">📊</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Optimized Resource Allocation</h3>
                            <p className="text-gray-600 text-sm">Advanced tools for tracking and optimizing the utilization of resources.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition">
                            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                                <span className="text-2xl">⏱️</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Real-Time Tracking</h3>
                            <p className="text-gray-600 text-sm">Book orders, appointments, check availability, and manage customers instantly.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition">
                            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <span className="text-2xl">🤖</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Systems</h3>
                            <p className="text-gray-600 text-sm">Systems that need minimal human interference while executing tasks.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition">
                            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                <span className="text-2xl">🔗</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Customer Bridge</h3>
                            <p className="text-gray-600 text-sm">Platforms bridging resource providers and their customers.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits for Everyone</h2>
                        <p className="text-lg text-gray-600">Our solution serves both Healthcare Service Providers and Patients</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* HSP Benefits */}
                        <div className="bg-blue-600 text-white p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-6">For Healthcare Providers</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-200">✓</span>
                                    <span>Book and schedule appointments, manage patients</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-200">✓</span>
                                    <span>Track resources for making informed decisions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-200">✓</span>
                                    <span>Real-time updates of patients to prevent care delays</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-200">✓</span>
                                    <span>Streamlined communication reduces administrative tasks</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-200">✓</span>
                                    <span>Platform to advertise key facilities and attract talent</span>
                                </li>
                            </ul>
                        </div>

                        {/* Patient Benefits */}
                        <div className="bg-gray-900 text-white p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-6">For Patients</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-gray-400">✓</span>
                                    <span>Find, locate and get easy access to doctors</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gray-400">✓</span>
                                    <span>Appointments and payments all managed via phone</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gray-400">✓</span>
                                    <span>Real-time info on doctor and room availability</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gray-400">✓</span>
                                    <span>Compare and make informed decisions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gray-400">✓</span>
                                    <span>Know waiting times and queue information</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                            <p className="text-lg text-gray-600">
                                Please fill out the form below to get in touch with us. Whether you have questions, need more information, or want to explore how SAFNECT can benefit your hospital, we're here to help.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center gap-2 mb-4 md:mb-0">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">S</span>
                            </div>
                            <span className="text-xl font-bold">SAFNECT</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            © 2024 SAFNECT TECHNOLOGIES PRIVATE LIMITED. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
