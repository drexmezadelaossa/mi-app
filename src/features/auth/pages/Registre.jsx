import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";

const Register = () => {
  const navigate = useNavigate();

  // Cambiado 'name' por 'nombre_usuario' para coincidir con tu authService y el Backend
  const [form, setForm] = useState({
    nombre_usuario: "",
    email: "",
    password: "",
  });

  const [status, setStatus] = useState({
    type: "",
    msg: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Iniciamos el loading

    try {
      // Usamos form.nombre_usuario que es lo que espera tu authService.register
      const res = await authService.register(
        form.nombre_usuario,
        form.email,
        form.password
      );

      setStatus({
        type: "success",
        msg: res.message || "Usuario registrado correctamente",
      });

      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      // Si el error trae un mensaje del backend, lo mostramos, si no, mostramos el genérico
      setStatus({
        type: "error",
        msg: err.response?.data?.message || "Error al registrar usuario",
      });
    } finally {
      setLoading(false); // Detenemos el loading
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: "#f5f7fa" }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 5,
          width: 450,
          borderRadius: 5,
          boxShadow: "0px 15px 35px rgba(0,0,0,0.05)",
        }}
      >
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" fontWeight="800" color="#1976d2">
            Crear cuenta
          </Typography>

          <Typography variant="body2" color="text.secondary" mt={1}>
            Registra tu usuario
          </Typography>
        </Box>

        {status.msg && (
          <Alert severity={status.type} sx={{ mb: 3, borderRadius: 3 }}>
            {status.msg}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          {/* Se agregó el name correcto, el onChange y fullWidth */}
          <TextField
            label="Nombre"
            name="nombre_usuario"
            value={form.nombre_usuario}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />

          <TextField
            label="Correo"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />

          <TextField
            label="Contraseña"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{
              mt: 4,
              py: 1.8,
              borderRadius: 3,
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Registrarme ahora"
            )}
          </Button>

          <Button
            onClick={() => navigate("/login")}
            fullWidth
            sx={{
              mt: 2,
              textTransform: "none",
              fontWeight: 600,
              color: "#1976d2",
            }}
          >
            ¿Ya tienes cuenta? Inicia sesión
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;