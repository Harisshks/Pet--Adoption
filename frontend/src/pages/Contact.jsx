import { useState } from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [petId, setPetId] = useState("");
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Thank you for your inquiry. We will get back to you shortly.");
    setShowConfirmation(true);
    setName("");
    setEmail("");
    setPhone("");
    setPetId("");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
            Contact Us
          </h1>

          {showConfirmation && (
            <div
              className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4"
              role="alert"
            >
              <p>{message}</p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side: Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Get In Touch
              </h2>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  pattern="[0-9]{10}"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="petId"
                >
                  Pet ID
                </label>
                <input
                  type="text"
                  id="petId"
                  value={petId}
                  onChange={(e) => setPetId(e.target.value)}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>

            {/* Right Side: Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Contact Information
              </h2>
              <p className="text-gray-600 mb-4">
                If you have any questions or need assistance, feel free to reach
                out to us via the contact form or using the information below:
              </p>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700">Email:</h3>
                <p className="text-gray-600">pawNest@petadoption.com</p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700">Phone:</h3>
                <p className="text-gray-600">+91 1234567890</p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700">Address:</h3>
                <p className="text-gray-600">
                  123 Pet Lane, Animal City, PA 12345
                </p>
              </div>
              <h3 className="font-semibold text-gray-700 mb-2">Follow Us:</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition duration-300"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition duration-300"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Visit Us
            </h2>
            <div className="flex justify-center">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5946.644414420531!2d77.06658145027512!3d11.036945940017459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85851693f4a5d%3A0x929165d4884224ee!2sSRI%20SHAKTHI%20INSTITUTE%20OF%20ENGINEERING%20AND%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1728316995404!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0"
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
