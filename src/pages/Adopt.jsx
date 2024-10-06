import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Navbar from '../components/Navbar';
import adoptImage from '../assests/img/adopt-a-pet.jpg';  
import doggquoteImage from '../assests/img/doggoquote.jpg';
import imagesImage from '../assests/img/images.jpeg';

const pets = [
  {
    id: 1,
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: '2 years',
    image: adoptImage,
  },
  {
    id: 2,
    name: 'Max',
    breed: 'German Shepherd',
    age: '3 years',
    image: doggquoteImage,
  },
  {
    id: 3,
    name: 'Bella',
    breed: 'Labrador',
    age: '1 year',
    image: imagesImage,
  },
  {
    id: 4,
    name: 'Lucy',
    breed: 'Beagle',
    age: '4 years',
    image: adoptImage,
  },
];

const Adopt = () => {
  const [selectedPet, setSelectedPet] = useState(null); // State to track the selected pet for the popup
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAdoptClick = (pet) => {
    setSelectedPet(pet); // Set the selected pet when the button is clicked
  };

  const closePopup = () => {
    setSelectedPet(null); // Close the popup
  };

  const confirmAdoption = () => {
    // Implement logic to handle the adoption process (e.g., save to a database)
    // After handling, redirect to the contact page
    navigate('/contact'); // Redirect to the Contact page
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Adopt a Pet</h1>
          <p className="text-lg text-gray-500 text-center mb-8">Find your perfect companion. Every pet deserves a loving home.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pets.map((pet) => (
              <div key={pet.id} className="bg-white rounded-lg shadow-lg p-4">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-2xl font-bold text-gray-800">{pet.name}</h2>
                <p className="text-gray-600">Breed: {pet.breed}</p>
                <p className="text-gray-600">Age: {pet.age}</p>
                <p className="text-gray-600 mb-4">Pet ID: {pet.id}</p> {/* Display the pet ID */}
                <button 
                  onClick={() => handleAdoptClick(pet)} 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg"
                >
                  Adopt {pet.name}
                </button>
              </div>
            ))}
          </div>

          {/* Popup for adopting a pet */}
          {selectedPet && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg p-6 max-w-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Adopt {selectedPet.name}</h2>
                <p className="text-gray-600">Pet ID: {selectedPet.id}</p>
                <p className="text-gray-600 mt-4">Would you like to adopt {selectedPet.name}?</p>
                <div className="flex justify-between mt-4">
                  <button 
                    onClick={closePopup} 
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => { confirmAdoption(); closePopup(); }} // Confirm and close popup
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg"
                  >
                    Confirm Adoption
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Adopt;
