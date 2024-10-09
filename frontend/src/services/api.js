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