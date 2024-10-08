import Navbar from '../components/Navbar';
import { useState } from 'react';

const About = () => {
  const [hovered, setHovered] = useState(null);

  const teamMembers = [
    {
      name: 'Jeyakumar S',
      image: '/path/to/team-member1.jpg', // Replace with actual image path
      socials: {
        gmail: 'mailto:jeyakumars22cse@srishakthi.ac.in', // Replace with actual Gmail address
        linkedin: '#', // Replace with actual LinkedIn link
      },
    },
    {
      name: 'Harissh KS',
      image: '/path/to/team-member2.jpg', // Replace with actual image path
      socials: {
        gmail: 'mailto:harisshks22cse@srishakthi.ac.in', // Replace with actual Gmail address
        linkedin: '#', // Replace with actual LinkedIn link
      },
    },
    {
      name: 'Balaji SS',
      image: '/path/to/team-member3.jpg', // Replace with actual image path
      socials: {
        gmail: 'mailto:balajiss22cse@srishakthi.ac.in', // Replace with actual Gmail address
        linkedin: '#', // Replace with actual LinkedIn link
      },
    },
    {
      name: 'Adithya RS',
      image: '/path/to/team-member4.jpg', // Replace with actual image path
      socials: {
        gmail: 'mailto:adithyars22cse@srishakthi.ac.in', // Replace with actual Gmail address
        linkedin: '#', // Replace with actual LinkedIn link
      },
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Intro Section */}
          <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-8">About Us</h1>
          <p className="text-xl text-gray-600 text-center mb-8">
            We are a team of passionate animal lovers committed to finding loving homes for pets in need.
          </p>

          {/* Our Values Section */}
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 text-center transform hover:-translate-y-2">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Compassion</h3>
              <p className="text-gray-600">Every animal deserves love, care, and a second chance.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 text-center transform hover:-translate-y-2">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Integrity</h3>
              <p className="text-gray-600">Transparency and honesty guide all of our actions.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 text-center transform hover:-translate-y-2">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Community</h3>
              <p className="text-gray-600">We believe in the power of community to create a brighter future for pets.</p>
            </div>
          </div>

          {/* Our Team Section */}
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
                <p className="text-gray-600 mb-4">{member.title}</p>
                <p className="text-gray-600">{member.bio}</p>

                {hovered === index && (
                  <div className="mt-4 space-x-4">
                    <a href={member.socials.gmail} className="text-gray-500 hover:text-orange-600 transition-colors duration-300">
                      <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12.713l9.075-5.403A2 2 0 0 0 21 6H3a2 2 0 0 0-1.075 3.31L12 12.713zM3 18a2 2 0 0 0 1.075-3.31L12 12.713l7.925 4.707A2 2 0 0 0 21 18H3z"></path>
                      </svg>
                    </a>
                    <a href={member.socials.linkedin} className="text-gray-500 hover:text-orange-600 transition-colors duration-300">
                      <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h5a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM6 24H1V5h5v19zM3 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                      </svg>
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

