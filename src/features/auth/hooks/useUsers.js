import { useState, useEffect, useCallback } from "react";
import { userService } from "../services/userService";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const data = await userService.getAll();
      const fetchedUsers = data.usuarios || data; 
      setUsers(Array.isArray(fetchedUsers) ? fetchedUsers : []);
      setLoading(false);
    } catch (err) {
      console.error("Error al obtener usuarios:", err);
      setLoading(false);
    }
  }, []);

  const removeUser = async (id) => {
    if (!window.confirm("¿Estás seguro de que quieres eliminar este usuario?")) return;
    try {
      await userService.delete(id);
      setUsers((prev) => prev.filter((user) => user._id !== id));
      alert("Usuario eliminado con éxito");
    } catch (err) {
      alert("Error al eliminar: " + (err.response?.data?.msg || "Sin autorización"));
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, loading, removeUser, fetchUsers };
};