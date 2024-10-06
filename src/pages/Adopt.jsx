import React from 'react';
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
    image: adoptImage,  // Use the imported image
  },
  {
    id: 2,
    name: 'Max',
    breed: 'German Shepherd',
    age: '3 years',
    image: doggquoteImage,  // Use the imported image
  },
  {
    id: 3,
    name: 'Bella',
    breed: 'Labrador',
    age: '1 year',
    image: imagesImage,  // Use the imported image
  },
  {
    id: 4,
    name: 'Lucy',
    breed: 'Beagle',
    age: '4 years',
    image: adoptImage,  // Use the imported image
  },
];

const Adopt = () => {
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
                <p className="text-gray-600">{pet.breed}</p>
                <p className="text-gray-600 mb-4">Age: {pet.age}</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg">
                  Adopt {pet.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Adopt;