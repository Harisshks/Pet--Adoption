
import axios from 'axios';
const API_URL = 'http://localhost:7777';

export const fetchPets = async () => {
  try {
    const response = await fetch(`${API_URL}/pets`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching pets:', error);
    return [];
  }
};

export const addPet = async (pet) => {
  try {
    const response = await fetch(`${API_URL}/pets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pet),
    });
    return await response.json();
  } catch (error) {
    console.error('Error adding pet:', error);
    return null;
  }
};

export const deletePet = async (name) => {
  try {
    const response = await axios.delete(`${API_URL}/pets/${name}`);
    return response.status === 200; // Return true if successful
  } catch (error) {
    console.error('Error deleting pet:', error);
    return false; // Return false if there was an error
  }
};

// //delete by id
// export const deletePet = async (id) => {
//   try {
//     await fetch(`${API_URL}/pets/${id}`, {
//       method: 'DELETE',
//     });
//     return true;
//   } catch (error) {
//     console.error('Error deleting pet:', error);
//     return false;
//   }
// };


// const API_URL = "http://localhost:7777";

// const fetchPets = () => axios.get(`${API_URL}/pets`);
// const addPet = (pet) => axios.post(`${API_URL}/pets`, pet);
// const deletePet = (id) => axios.delete(`${API_URL}/pets/${id}`);
// export { fetchPets, addPet, deletePet };
