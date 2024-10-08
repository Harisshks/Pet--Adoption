import Navbar from '../components/Navbar';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import jeyakumarImage from '../assests/img/IMG_20230729_154555 (1).jpg';
import harisshImage from '../assests/img/imghar.jpg';
import balajiImage from '../assests/img/IMG_20240912_060716.jpg';
import adithyaImage from '../assests/img/adhi.jpg';

const About = () => {
  const [hovered, setHovered] = useState(null);

  const teamMembers = [
    {
      name: 'Jeyakumar S',
      image: jeyakumarImage, 
      socials: {
        gmail: 'mailto:jeyakumars22cse@srishakthi.ac.in',
        linkedin: '#', 
      },
    },
    {
      name: 'Harissh KS',
      image: harisshImage,
      socials: {
        gmail: 'mailto:harisshks22cse@srishakthi.ac.in',
        linkedin: '#',
      },
    },
    {
      name: 'Balaji SS',
      image: balajiImage,
      socials: {
        gmail: 'mailto:balajiss22cse@srishakthi.ac.in',
        linkedin: '#',
      },
    },
    {
      name: 'Adithya RS',
      image: adithyaImage,
      socials: {
        gmail: 'mailto:adithyars22cse@srishakthi.ac.in',
        linkedin: '#',
      },
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-8">About Us</h1>
          <p className="text-xl text-gray-600 text-center mb-8">
            We are a team of passionate animal lovers committed to finding loving homes for pets in need.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition-transform duration-300 transform ${hovered === index ? 'scale-105' : ''}`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-full mb-4 mx-auto"
                />
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>

                {hovered === index && (
                  <div className="mt-4 space-x-4">
                
                    <a href={member.socials.gmail} className="text-gray-500 hover:text-orange-600 transition-colors duration-300">
                      <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
                    </a>

                    
                    <a href={member.socials.linkedin} className="text-gray-500 hover:text-orange-600 transition-colors duration-300">
                      <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
