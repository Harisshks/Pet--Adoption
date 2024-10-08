import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-black text-center mb-12">About Us</h1>
          <p className="text-xl text-gray-700 text-center mb-8">
            Welcome to our Pet Adoption Platform! We are dedicated to finding loving homes for pets in need.
          </p>
          <p className="text-lg text-gray-600 text-center mb-12">
            Our mission is to promote animal welfare and advocate for the adoption of pets. We believe that every pet deserves a second chance and a loving family.
          </p>

          {/* Our Values Section */}
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-black mb-4">Compassion</h3>
              <p className="text-gray-700">
                We care deeply for all animals and work to provide them with the love and care they deserve.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-black mb-4">Integrity</h3>
              <p className="text-gray-700">
                We are committed to transparency and honesty in all our interactions and processes.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-black mb-4">Community</h3>
              <p className="text-gray-700">
                We believe in the power of community and work collaboratively to support pets and their families.
              </p>
            </div>
          </div>

          {/* Our Team Section */}
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Our Team</h2>
          <p className="text-xl text-gray-700 text-center mb-12">
            Our passionate team works tirelessly to connect pets with potential adopters, providing support and guidance throughout the adoption process.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <img
                src="/path/to/team-member1.jpg" // Replace with actual image path
                alt="S Jeyakumar"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-black">S Jeyakumar</h3>
              <p className="text-gray-700">Founder & CEO</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <img
                src="/path/to/team-member2.jpg" // Replace with actual image path
                alt="K S Harissh"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-black">K S Harissh</h3>
              <p className="text-gray-700">Animal Welfare Coordinator</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <img
                src="/path/to/team-member3.jpg" // Replace with actual image path
                alt="S S Balaji"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-black">S S Balaji</h3>
              <p className="text-gray-700">Volunteer Coordinator</p>
            </div>
            {/* New Team Member 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <img
                src="/path/to/team-member4.jpg" // Replace with actual image path
                alt="R S Adithya"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-black">R S Adithya</h3>
              <p className="text-gray-700">Operations Manager</p>
            </div>
          </div>

          {/* Call to Action Section */}
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Get Involved</h2>
          <p className="text-xl text-gray-700 text-center mb-8">
            Join us in making a difference in the lives of pets and their future families. Together, we can create a brighter future for animals in need.
          </p>
          <p className="text-xl text-gray-700 text-center mb-12">
            We welcome volunteers and donations to support our mission. Please reach out to us for more information.
          </p>
          <div className="flex justify-center">
            <a
              href="/contact" // Update with your contact page route
              className="bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300 font-semibold text-lg shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
