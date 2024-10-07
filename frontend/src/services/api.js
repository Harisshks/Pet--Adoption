import axios from 'axios'


const API = import.meta.env.VITE_API


const getProjects = () => axios.get(`${API}/pets/all`)

const addProject = (petdata) => axios.post(`${API}/pets/add`, petdata)

const deleteProject = (id) => axios.delete(`${API}/projects/delete/${id}`)

export { getProjects, addProject, deleteProject }