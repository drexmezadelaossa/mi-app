import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  IconButton,
  InputAdornment,
  Alert,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError("");
    setLoading(true);

    try {
      const res = await authService.login(form.email, form.password);
      if (res) {
        // 🚀 Redirección directa al Dashboard para todos
        navigate("/dashboard");
      }
    } catch (error) {
      const message = error.response?.data?.message || "Credenciales incorrectas";
      setLoginError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "absolute", width: 400, height: 400, background: "radial-gradient(circle, rgba(59,130,246,0.4), transparent 70%)", filter: "blur(80px)", top: -120, left: -120 }} />
      
      <Paper
        elevation={0}
        sx={{ p: 5, width: 420, borderRadius: 5, boxShadow: "0px 20px 50px rgba(0,0,0,0.25)", textAlign: "center", backdropFilter: "blur(10px)", background: "rgba(255,255,255,0.95)", zIndex: 2 }}
      >
        <Typography variant="h4" fontWeight="800" color="#1976d2" mb={1}>¡Hola!</Typography>
        <Typography variant="body2" color="text.secondary" mb={4}>Ingresa para ir al Dashboard</Typography>

        {loginError && <Alert severity="error" sx={{ mb: 2, borderRadius: 3 }}>{loginError}</Alert>}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Correo"
            name="email"
            fullWidth
            margin="normal"
            value={form.email}
            onChange={handleChange}
            required
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
          />

          <TextField
            label="Contraseña"
            name="password"
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            value={form.password}
            onChange={handleChange}
            required
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{ mt: 3, mb: 2, py: 1.5, borderRadius: 3, fontWeight: "bold", background: "linear-gradient(135deg, #1976d2, #42a5f5)" }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Entrar al Panel"}
          </Button>
        </form>

        <Button onClick={() => navigate("/register")} fullWidth sx={{ textTransform: "none", fontWeight: 600 }}>
          ¿No tienes cuenta? <span style={{ color: "#1976d2", marginLeft: "5px" }}>Regístrate</span>
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;