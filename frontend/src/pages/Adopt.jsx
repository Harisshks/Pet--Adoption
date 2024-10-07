import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import gold from '../assests/img/gold.jpg'; 
import beagle from '../assests/img/beagle.jpg'; 
import german from '../assests/img/german.jpg'; 
import lab from '../assests/img/lab.jpg'; 

const initialPets = [
  { id: 1, name: 'Buddy', breed: 'Golden Retriever', age: '2 years', image: gold },
  { id: 2, name: 'Max', breed: 'German Shepherd', age: '3 years', image: german },
  { id: 3, name: 'Bella', breed: 'Labrador', age: '1 year', image: lab },
  { id: 4, name: 'Lucy', breed: 'Beagle', age: '4 years', image: beagle },
];

const Adopt = () => {
  const [pets, setPets] = useState(initialPets);
  const [selectedPet, setSelectedPet] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [isAddPetOpen, setIsAddPetOpen] = useState(false);
  const [newPet, setNewPet] = useState({ id: '', name: '', breed: '', age: '', image: '' });
  const [formError, setFormError] = useState('');
  const [imageFile, setImageFile] = useState(null); // State for the uploaded image file
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

  const handleAddPet = () => {
    // Form validation: Check if any field is empty or if ID is not unique
    if (!newPet.id || !newPet.name || !newPet.breed || !newPet.age || !imageFile) {
      setFormError('Please fill in all the fields and upload an image.');
      return;
    }
    
    // Check if the ID already exists
    if (pets.some(pet => pet.id === Number(newPet.id))) {
      setFormError('Pet ID must be unique.');
      return;
    }

    const newPetWithImage = { ...newPet, image: URL.createObjectURL(imageFile) }; // Convert file to URL
    setPets([...pets, newPetWithImage]); // Add the new pet to the array
    setIsAddPetOpen(false); // Close the add pet form
    setNewPet({ id: '', name: '', breed: '', age: '', image: '' }); // Reset the form
    setImageFile(null); // Reset the uploaded image file
    setFormError(''); // Clear error message after successful submission
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file); // Save the file to state
      setNewPet({ ...newPet, image: URL.createObjectURL(file) }); // Set the image URL for preview
    }
  };

  // New function to delete a pet
  const handleDeletePet = (petId) => {
    setPets(pets.filter(pet => pet.id !== petId));
  };

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

          <button
            onClick={() => setIsAddPetOpen(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg mb-8"
          >
            Add New Pet
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredPets.map((pet) => (
              <div key={pet.id} className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 relative">
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
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg mr-2"
                >
                  Adopt {pet.name}
                </button>
                <button
                  onClick={() => handleDeletePet(pet.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg"
                >
                  Delete
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

          {/* Add Pet Modal */}
          {isAddPetOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg p-6 max-w-md w-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Pet</h2>
                <input
                  type="text"
                  placeholder="Pet ID"
                  value={newPet.id}
                  onChange={(e) => setNewPet({ ...newPet, id: e.target.value })}
                  className="border-2 border-gray-300 p-2 rounded-lg mb-4 w-full"
                />
                <input
                  type="text"
                  placeholder="Pet Name"
                  value={newPet.name}
                  onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
                  className="border-2 border-gray-300 p-2 rounded-lg mb-4 w-full"
                />
                <input
                  type="text"
                  placeholder="Pet Breed"
                  value={newPet.breed}
                  onChange={(e) => setNewPet({ ...newPet, breed: e.target.value })}
                  className="border-2 border-gray-300 p-2 rounded-lg mb-4 w-full"
                />
                <input
                  type="text"
                  placeholder="Pet Age"
                  value={newPet.age}
                  onChange={(e) => setNewPet({ ...newPet, age: e.target.value })}
                  className="border-2 border-gray-300 p-2 rounded-lg mb-4 w-full"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="border-2 border-gray-300 p-2 rounded-lg mb-4 w-full"
                />
                {newPet.image && (
                  <img
                    src={newPet.image}
                    alt="Pet Preview"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                {formError && <p className="text-red-500 mb-4">{formError}</p>}
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => setIsAddPetOpen(false)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddPet}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg"
                  >
                    Add Pet
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
