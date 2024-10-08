import React, { useState } from 'react';
import { addPet } from '../services/api';

const AddComponent = ({ onAdd }) => {
  const [id, setid] = useState('');
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPet = { id, name, breed, age, image };
    const addedPet = await addPet(newPet);
    if (addedPet) {
      onAdd(addedPet);
    }
    setid('');
    setName('');
    setBreed('');
    setAge('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Add a Pet</h2>
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="Pet Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
          required
        />
        <input
          type="text"
          placeholder="Id"
          value={id}
          onChange={(e) => setid(e.target.value)}
          className="input"
          required
        />
        <input
          type="text"
          placeholder="Breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          className="input"
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="input"
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="input"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Add Pet
        </button>
      </div>
    </form>
  );
};

export default AddComponent;