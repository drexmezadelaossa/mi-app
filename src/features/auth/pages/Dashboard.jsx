import React, { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import { authService } from "../services/authService";
import { userService } from "../services/userService";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const { users, loading, fetchUsers } = useUsers();
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    nombre_usuario: "",
    email: "",
    password: "",
  });

  // --- LÓGICA DE GUARDADO (CREAR O EDITAR) ---
  const handleSaveUser = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // Lógica de edición: se envía el ID y el formData (el backend debe procesar 'password' como opcional)
        await userService.update(editingId, formData);
        alert("Usuario actualizado con éxito");
      } else {
        // Lógica de creación: se envía el formData con los campos requeridos
        await userService.register(formData);
        alert("Usuario creado con éxito");
      }

      closeForm();
      fetchUsers(); // Refresca la tabla automáticamente
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.msg || "Error al procesar la solicitud");
    }
  };

  // --- LÓGICA PARA ABRIR EDICIÓN ---
  const handleEditClick = (user) => {
    setEditingId(user._id);
    setFormData({
      nombre_usuario: user.nombre_usuario,
      email: user.email,
      password: "", // Se deja vacío por seguridad; si el usuario no escribe nada, no se cambia en el backend
    });
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ nombre_usuario: "", email: "", password: "" });
  };

  const handleDelete = async (id, nombre) => {
    const confirmar = window.confirm(
      `¿Estás seguro de que deseas eliminar permanentemente a ${nombre}?`,
    );
    if (!confirmar) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:3000/api/usuarios/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Usuario borrado de la base de datos");
      fetchUsers();
    } catch (err) {
      alert(err.response?.data?.msg || "Error al eliminar el usuario");
    }
  };

  const isAdmin = authService.isAdmin();
  const currentUser = authService.getUser();

  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  };

  if (loading)
    return <div style={styles.loadingScreen}>Cargando Panel de Control...</div>;

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerText}>
          <h1 style={styles.title}>Panel General</h1>
          <p style={styles.welcome}>
            Sesión iniciada como:{" "}
            <strong>{currentUser?.nombre_usuario || "Usuario"}</strong>(
            {isAdmin ? "Administrador" : "Visualizador"})
          </p>
        </div>

        <div style={styles.buttonGroup}>
          <button onClick={() => navigate("/apis")} style={styles.apiBtn}>
            Ver APIs (Dragon Ball)
          </button>
          {isAdmin && (
            <button onClick={() => setShowForm(true)} style={styles.createBtn}>
              + Nuevo Usuario
            </button>
          )}
          <button onClick={handleLogout} style={styles.logoutBtn}>
            Salir
          </button>
        </div>
      </header>

      {showForm && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h2 style={{ color: "white", marginBottom: "20px" }}>
              {editingId ? "Editar Usuario" : "Nuevo Registro"}
            </h2>
            <form onSubmit={handleSaveUser}>
              <input
                style={styles.input}
                placeholder="Nombre de usuario"
                value={formData.nombre_usuario}
                onChange={(e) =>
                  setFormData({ ...formData, nombre_usuario: e.target.value })
                }
                required
              />
              <input
                style={styles.input}
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <input
                style={styles.input}
                type="password"
                placeholder={
                  editingId ? "Nueva contraseña (opcional)" : "Contraseña"
                }
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required={!editingId}
              />
              <div style={styles.modalButtons}>
                <button type="submit" style={styles.saveBtn}>
                  {editingId ? "Actualizar" : "Guardar"}
                </button>
                <button
                  type="button"
                  onClick={closeForm}
                  style={styles.cancelBtn}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div style={styles.tableWrapper}>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Nombre</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Estado</th>
                <th style={styles.th}>Fecha Registro</th>
                {isAdmin && <th style={styles.th}>Acciones de Admin</th>}
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id} style={styles.row}>
                    <td style={styles.td}>{user.nombre_usuario}</td>
                    <td style={styles.td}>{user.email}</td>
                    <td style={styles.td}>
                      <span
                        style={{
                          color: user.esta_activo ? "#4cd137" : "#ff4757",
                          fontWeight: "bold",
                        }}
                      >
                        {user.esta_activo ? "ACTIVO" : "INACTIVO"}
                      </span>
                    </td>
                    <td style={styles.td}>
                      {user.createdAt
                        ? new Date(user.createdAt).toLocaleDateString()
                        : "Sin fecha"}
                    </td>

                    {isAdmin && (
                      <td style={styles.td}>
                        <div style={styles.actionButtons}>
                          <button
                            style={styles.editBtn}
                            onClick={() => handleEditClick(user)}
                          >
                            Editar
                          </button>
                          <button
                            style={styles.deleteBtn}
                            onClick={() =>
                              handleDelete(user._id, user.nombre_usuario)
                            }
                          >
                            Eliminar
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={isAdmin ? 5 : 4} style={styles.emptyTable}>
                    No hay usuarios para mostrar.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#0a192f",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "20px",
    marginBottom: "30px",
    color: "white",
    alignItems: "center",
  },
  headerText: {
    flex: "1 1 300px",
  },
  title: { fontSize: "clamp(1.5rem, 5vw, 2rem)", margin: 0, color: "#00a8ff" },
  welcome: { opacity: 0.8, marginTop: "5px", fontSize: "0.9rem" },
  buttonGroup: { 
    display: "flex", 
    gap: "10px", 
    flexWrap: "wrap",
    justifyContent: "flex-start" 
  },
  apiBtn: {
    backgroundColor: "#fbc531",
    color: "#000",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "0.85rem",
  },
  createBtn: {
    backgroundColor: "#4cd137",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "0.85rem",
  },
  logoutBtn: {
    backgroundColor: "#ff4757",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "0.85rem",
  },
  loadingScreen: {
    color: "white",
    backgroundColor: "#0a192f",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.85)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    padding: "20px",
  },
  modalContent: {
    backgroundColor: "#112240",
    padding: "25px",
    borderRadius: "15px",
    width: "100%",
    maxWidth: "400px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #233554",
    backgroundColor: "#0a192f",
    color: "white",
    boxSizing: "border-box",
  },
  modalButtons: { 
    display: "flex", 
    gap: "10px", 
    marginTop: "10px" 
  },
  saveBtn: {
    flex: 1,
    backgroundColor: "#4cd137",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  cancelBtn: {
    flex: 1,
    backgroundColor: "#ff4757",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  tableWrapper: {
    width: "100%",
    overflowX: "auto",
    borderRadius: "15px",
  },
  tableContainer: {
    backgroundColor: "#112240",
    padding: "10px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    minWidth: "600px",
  },
  table: { width: "100%", borderCollapse: "collapse", color: "white" },
  th: {
    textAlign: "left",
    padding: "12px",
    borderBottom: "2px solid #233554",
    color: "#8892b0",
    fontSize: "0.8rem",
    textTransform: "uppercase",
  },
  td: { padding: "12px", borderBottom: "1px solid #233554", fontSize: "0.9rem" },
  actionButtons: { display: "flex", gap: "5px" },
  editBtn: {
    background: "none",
    color: "#00a8ff",
    border: "1px solid #00a8ff",
    padding: "5px 8px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "0.8rem",
  },
  deleteBtn: {
    background: "none",
    color: "#ff4757",
    border: "1px solid #ff4757",
    padding: "5px 8px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "0.8rem",
  },
  emptyTable: { textAlign: "center", padding: "30px", color: "#8892b0" },
};

export default Dashboard;