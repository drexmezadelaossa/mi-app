import axios from "axios";

const API_URL = "http://localhost:3000/api/usuarios";

// Función centralizada para obtener headers con el token actualizado
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
};

export const userService = {
  getAll: async () => {
    // Agregamos el header para evitar el 403 Forbidden
    const response = await axios.get(API_URL, getAuthHeaders());
    return response.data;
  },

  register: async (userData) => {
    // Si userData no trae rol, el backend debería asignar uno por defecto
    const response = await axios.post(`${API_URL}/`, userData, getAuthHeaders());
    return response.data;
  },

  update: async (id, userData) => {
    const response = await axios.put(`${API_URL}/${id}`, userData, getAuthHeaders());
    return response.data;
  },

  delete: async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`, getAuthHeaders());
    return response.data;
  }
};