import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            {/* Header Section */}
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-blue-800">About Us</h1>
                <p className="text-lg text-gray-600 mt-4">Discover who we are, what we stand for, and our vision for the future.</p>
            </header>

            {/* Our Journey Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-blue-700">Our Journey</h2>
                <p className="text-gray-700 mt-4">
                    Founded in 2020, we set out with a simple goal: to deliver innovative solutions that drive success for our clients. Over the years, we've transformed our passion into a thriving business, blending cutting-edge technology with expertise in a wide range of industries.
                </p>
                <p className="text-gray-700 mt-4">
                    Our team is a diverse group of dedicated professionals, each bringing unique skills and experiences to the table. Together, we push boundaries to provide the best possible service and build long-lasting relationships with our clients.
                </p>
            </section>

            {/* Our Mission and Vision Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-blue-700">Mission & Vision</h2>
                <div className="flex flex-wrap justify-between mt-6">
                    {/* Mission */}
                    <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                        <h3 className="text-xl font-medium text-blue-600">Our Mission</h3>
                        <p className="text-gray-700 mt-2">
                            Our mission is to provide top-tier solutions and insights that empower businesses to achieve their goals. We believe in simplicity, efficiency, and transforming complex challenges into clear, actionable strategies.
                        </p>
                    </div>
                    {/* Vision */}
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-xl font-medium text-blue-600">Our Vision</h3>
                        <p className="text-gray-700 mt-2">
                            We envision a future where businesses and individuals alike can thrive with the right tools, resources, and knowledge. Our vision is to lead the way in innovation, shaping industries and communities for generations to come.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-blue-700">Our Core Values</h2>
                <ul className="list-disc pl-6 mt-4 text-gray-700">
                    <li><strong>Integrity:</strong> We believe in doing what's right, not what's easy.</li>
                    <li><strong>Excellence:</strong> We strive to exceed expectations and continuously improve.</li>
                    <li><strong>Innovation:</strong> We foster creativity and find new solutions to challenges.</li>
                    <li><strong>Collaboration:</strong> We work together to achieve shared goals and success.</li>
                    <li><strong>Customer Commitment:</strong> Our clients' needs come first, and we are dedicated to their success.</li>
                </ul>
            </section>

            {/* Team Introduction Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-blue-700">Meet Our Team</h2>
                <div className="flex flex-wrap justify-center mt-6">
                    <div className="w-full sm:w-1/3 lg:w-1/4 p-4 text-center">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member"
                            className="rounded-full mx-auto"
                        />
                        <h3 className="mt-4 text-xl font-semibold text-blue-700">John Doe</h3>
                        <p className="text-gray-600">CEO & Founder</p>
                    </div>
                    <div className="w-full sm:w-1/3 lg:w-1/4 p-4 text-center">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member"
                            className="rounded-full mx-auto"
                        />
                        <h3 className="mt-4 text-xl font-semibold text-blue-700">Jane Smith</h3>
                        <p className="text-gray-600">Chief Operating Officer</p>
                    </div>
                    <div className="w-full sm:w-1/3 lg:w-1/4 p-4 text-center">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member"
                            className="rounded-full mx-auto"
                        />
                        <h3 className="mt-4 text-xl font-semibold text-blue-700">Alice Johnson</h3>
                        <p className="text-gray-600">Chief Technology Officer</p>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="text-center mt-12">
                <h2 className="text-2xl font-semibold text-blue-700">Let’s Work Together</h2>
                <p className="text-gray-700 mt-4">
                    We’re always looking for new partnerships, opportunities, and challenges. If you believe in our mission and want to collaborate with us, don’t hesitate to reach out.
                </p>
                {/* Change the button to a Link component */}
                <Link to="/contact">
                    <button className="mt-6 px-6 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-700">
                        Contact Us
                    </button>
                </Link>
            </section>
        </div>
    );
};

export default AboutUs;
