import axios from "axios";

// ✅ URL de producción para la gestión de usuarios (CRUD)
const API_URL = "https://backend-usuarios-8mto.onrender.com/api/usuarios";

export const userService = {
  // Obtener todos los usuarios
  getAll: async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // ✅ Agregamos esta pequeña validación para que la tabla vea los datos de MongoDB
    // Si res.data tiene una propiedad 'usuarios', la devuelve, si no, devuelve res.data directamente.
    return res.data.usuarios || res.data;
  },

  // Registrar/Crear usuario desde el Dashboard
  register: async (userData) => {
    const token = localStorage.getItem("token");
    const res = await axios.post(API_URL, userData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  },

  // Actualizar usuario
  update: async (id, userData) => {
    const token = localStorage.getItem("token");
    const res = await axios.put(`${API_URL}/${id}`, userData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  },

  // Eliminar usuario
  delete: async (id) => {
    const token = localStorage.getItem("token");
    const res = await axios.delete(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  }
};