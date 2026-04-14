import axios from "axios";

const AUTH_URL = "http://localhost:3000/api/auth";

export const authService = {
  // 🔐 LOGIN
  login: async (email, password) => {
    const res = await axios.post(`${AUTH_URL}/login`, {
      email,
      password,
    });

    const { token, user } = res.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    // Guardamos el rol para las validaciones visuales
    localStorage.setItem("role", user.role || "user");

    return res.data;
  },

  // 🟢 REGISTER
  register: async (nombre_usuario, email, password) => {
    const res = await axios.post(`${AUTH_URL}/register`, {
      nombre_usuario,
      email,
      password,
      role: "user" // Ahora por defecto son usuarios normales
    });

    return res.data;
  },

  // 🔴 LOGOUT
  logout: () => {
    localStorage.clear();
  },

  getUser: () => JSON.parse(localStorage.getItem("user")),

  getRole: () => localStorage.getItem("role"),

  // Verifica si el que está logueado es admin
  isAdmin: () => localStorage.getItem("role") === "admin",

  isAuthenticated: () => !!localStorage.getItem("token"),
};