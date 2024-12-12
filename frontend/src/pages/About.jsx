import Navbar from '../components/Navbar';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 

const About = () => {
  const [hovered, setHovered] = useState(null);

  const teamMembers = [
    {
      name: 'Jeyakumar',
      socials: {
        gmail: 'mailto:jeyakumars22cse@srishakthi.ac.in',
      },
    },
    {
      name: 'Harissh',
      socials: {
        gmail: 'mailto:harisshks22cse@srishakthi.ac.in',
      },
    },
    {
      name: 'Balaji',
      socials: {
        gmail: 'mailto:balajiss22cse@srishakthi.ac.in',
      },
    },
    {
      name: 'Adithya RS',
      socials: {
        gmail: 'mailto:adithyars22cse@srishakthi.ac.in',
      },
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-8">
            We're On a Mission To Support And Empower People To Responsibly Rehome Their Pets
          </h1>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            At <span className="text-orange-600 font-bold">PewNest</span>, we are dedicated to connecting pets in need with loving homes. We aim to reduce pet homelessness and promote responsible rehoming practices through ethical and professional solutions. Join us in making a difference, one adoption at a time.
          </p>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-2xl font-bold text-orange-600">3.7 Million</h3>
                <p className="text-gray-700">Pets in the UK have been given up in the past year, highlighting the need for responsible adoption.</p>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-2xl font-bold text-orange-600">1,000+</h3>
                <p className="text-gray-700">Pets successfully rehomed through our platform in the last year.</p>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-2xl font-bold text-orange-600">98%</h3>
                <p className="text-gray-700">Of adopters reported high satisfaction with the rehoming process.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Meet Our Dedicated Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-transform duration-300 transform ${hovered === index ? 'scale-105' : ''}`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{member.expertise}</p>

                {hovered === index && (
                  <div className="mt-4 space-x-4">
                    <a href={member.socials.gmail} className="text-gray-500 hover:text-orange-600 transition-colors duration-300">
                      <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold text-gray-800">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white p-6 shadow-lg rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faEnvelope} className="w-10 h-10 text-orange-600 mb-4" />
                <div>
                  <h4 className="text-xl font-bold text-orange-600">Kind To Everyone</h4>
                  <p className="text-gray-700 mt-2">Every pet deserves to be safe, loved, and respected, with a focus on ethical treatment.</p>
                </div>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faEnvelope} className="w-10 h-10 text-orange-600 mb-4" />
                <div>
                  <h4 className="text-xl font-bold text-orange-600">Advocate Adoption</h4>
                  <p className="text-gray-700 mt-2">We prioritize adoption to reduce the demand for unethical practices like illegal breeding.</p>
                </div>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faEnvelope} className="w-10 h-10 text-orange-600 mb-4" />
                <div>
                  <h4 className="text-xl font-bold text-orange-600">Empower The Community</h4>
                  <p className="text-gray-700 mt-2">We aim to educate and empower individuals to make responsible choices when it comes to pet adoption.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold text-gray-800">Contact Us</h3>
            <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
              If you have any questions or would like to get involved in our mission, feel free to reach out to us. We're always happy to connect with like-minded individuals and organizations who share our passion for helping pets find loving homes.
            </p>
            <a
              href="mailto:contact@petrehome.com"
              className="mt-6 inline-block px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
