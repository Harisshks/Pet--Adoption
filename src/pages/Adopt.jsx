import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import adoptImage from '../assests/img/adopt-a-pet.jpg';  
import doggquoteImage from '../assests/img/doggoquote.jpg';
import imagesImage from '../assests/img/images.jpeg';

const pets = [
  { id: 1, name: 'Buddy', breed: 'Golden Retriever', age: '2 years', image: adoptImage },
  { id: 2, name: 'Max', breed: 'German Shepherd', age: '3 years', image: doggquoteImage },
  { id: 3, name: 'Bella', breed: 'Labrador', age: '1 year', image: imagesImage },
  { id: 4, name: 'Lucy', breed: 'Beagle', age: '4 years', image: adoptImage },
];

const Adopt = () => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('All');
  const navigate = useNavigate();

  const handleAdoptClick = (pet) => {
    setSelectedPet(pet);
  };

  const closePopup = () => {
    setSelectedPet(null);
  };

  const confirmAdoption = () => {
    navigate('/contact', { state: { petId: selectedPet.id, petName: selectedPet.name } });
  };

  const filteredPets = pets.filter((pet) => {
    const matchesName = pet.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBreed = selectedBreed === 'All' || pet.breed === selectedBreed;
    return matchesName && matchesBreed;
  });

  const uniqueBreeds = [...new Set(pets.map((pet) => pet.breed))];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Adopt a Pet</h1>
          <p className="text-lg text-gray-500 text-center mb-8">Find your perfect companion. Every pet deserves a loving home.</p>
          <input
            type="text"
            placeholder="Search pets by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-2 border-gray-300 p-2 rounded-lg mb-4 w-full"
          />
          <select
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
            className="border-2 border-gray-300 p-2 rounded-lg mb-8 w-full"
          >
            <option value="All">All Breeds</option>
            {uniqueBreeds.map((breed) => (
              <option key={breed} value={breed}>{breed}</option>
            ))}
          </select>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredPets.map((pet) => (
              <div key={pet.id} className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-2xl font-bold text-gray-800">{pet.name}</h2>
                <p className="text-gray-600">Breed: {pet.breed}</p>
                <p className="text-gray-600">Age: {pet.age}</p>
                <p className="text-gray-600 mb-4">Pet ID: {pet.id}</p>
                <button
                  onClick={() => handleAdoptClick(pet)}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg"
                >
                  Adopt {pet.name}
                </button>
              </div>
            ))}
          </div>

          {selectedPet && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg p-6 max-w-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Adopt {selectedPet.name}</h2>
                <img src={selectedPet.image} alt={selectedPet.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <p className="text-gray-600">Breed: {selectedPet.breed}</p>
                <p className="text-gray-600">Age: {selectedPet.age}</p>
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
                    onClick={confirmAdoption}
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
