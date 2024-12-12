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

export const deletePet = async (id) => {
  try {
    await fetch(`${API_URL}/pets/${id}`, {
      method: 'DELETE',
    });
    return true;
  } catch (error) {
    console.error('Error deleting pet:', error);
    return false;
  }
};

export const submitContactForm = async (contactData) => {
  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });
    return await response.json();
  } catch (error) {
    console.error('Error adding pet:', error);
    return null;
  }
};


// Signup request
// export const signup = async (userData) => {
//   try {
//     const response = await axios.post(`${API_URL}/signup`, userData);
//     return response.data;
//   } catch (error) {
//     console.error("Signup Error:", error);
//     throw error;
//   }
// };

export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, userData);
  return response.data;  // This can return some data, e.g., success message or user info
};
// Login request
// export const login = async (credentials) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, credentials);
//     return response.data;  // contains JWT token and user details
//   } catch (error) {
//     console.error("Login Error:", error);
//     throw error;
//   }
// };

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;  // Assuming the response includes the token
};

// Save token to localStorage for future requests
export const saveToken = (token) => {
  localStorage.setItem('authToken', token);
};

// Get token from localStorage
export const getToken = () => {
  return localStorage.getItem('authToken');
};

// Clear token from localStorage
export const logout = () => {
  localStorage.removeItem('authToken');
};