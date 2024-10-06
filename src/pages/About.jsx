import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">About Us</h1>
          <p className="text-lg text-gray-600 text-center mb-8">
            Welcome to our Pet Adoption Platform! We are dedicated to finding loving homes for pets in need.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Our mission is to promote animal welfare and advocate for the adoption of pets. We believe that every pet deserves a second chance and a loving family.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our passionate team works tirelessly to connect pets with potential adopters, providing support and guidance throughout the adoption process.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
              <img
                src="/path/to/team-member1.jpg" // Replace with actual image path
                alt="Team Member 1"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
              <img
                src="/path/to/team-member2.jpg" // Replace with actual image path
                alt="Team Member 2"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Animal Welfare Coordinator</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
              <img
                src="/path/to/team-member3.jpg" // Replace with actual image path
                alt="Team Member 3"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Alice Johnson</h3>
              <p className="text-gray-600">Volunteer Coordinator</p>
            </div>
          </div>

          <p className="text-lg text-gray-600 mt-8 text-center">
            Join us in making a difference in the lives of pets and their future families. Together, we can create a brighter future for animals in need.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
