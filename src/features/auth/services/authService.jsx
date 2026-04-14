import axios from "axios";

// 🔥 URL de producción completa
const AUTH_URL = "https://backend-usuarios-8mto.onrender.com/api/auth";

// 🔧 Instancia de axios
const api = axios.create({
  baseURL: AUTH_URL,
});

// 🔐 Interceptor → agrega token automáticamente
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const authService = {
  // 🔐 LOGIN
  login: async (email, password) => {
    try {
      const res = await api.post(`/login`, {
        email,
        password,
      });

      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      // Guardamos el rol para las validaciones visuales
      localStorage.setItem("role", user.role || "user");

      return res.data;
    } catch (error) {
      console.error("❌ Error en login:", error.response?.data || error.message);
      throw error;
    }
  },

  // 🟢 REGISTER
  register: async (nombre_usuario, email, password) => {
    try {
      const res = await api.post(`/register`, {
        nombre_usuario,
        email,
        password,
        role: "user", // Ahora por defecto son usuarios normales
      });

      return res.data;
    } catch (error) {
      console.error("❌ Error en register:", error.response?.data || error.message);
      throw error;
    }
  },

  // 🔴 LOGOUT
  logout: () => {
    localStorage.clear();
  },

  getUser: () => JSON.parse(localStorage.getItem("user")),

  getRole: () => localStorage.getItem("role"),

  // 🔒 Endpoint protegido (extra, no rompe tu lógica)
  getProfile: async () => {
    try {
      const res = await api.get(`/profile`);
      return res.data;
    } catch (error) {
      console.error("❌ Error en perfil:", error.response?.data || error.message);
      throw error;
    }
  },

  // Verifica si el que está logueado es admin
  isAdmin: () => localStorage.getItem("role") === "admin",

  isAuthenticated: () => !!localStorage.getItem("token"),
};