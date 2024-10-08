import React from 'react';
import { XIcon } from 'lucide-react';

const PetCard = ({ pet, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{pet.name}</h2>
        <p className="text-gray-600">Pet ID: {pet.id}</p>
        <p className="text-gray-600">Breed: {pet.breed}</p>
        <p className="text-gray-600">Age: {pet.age} years</p>
        <button
          onClick={() => onDelete(pet.id)}
          className="bg-red-500 text-white py-1 px-2 mt-4 rounded-lg flex items-center hover:bg-red-600"
        >
          <XIcon size={18} className="mr-2" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default PetCard;
