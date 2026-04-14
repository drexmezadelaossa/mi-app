import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Alert, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
 
const Recover = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [loading, setLoading] = useState(false);
 
    const handleSubmit = async (e) => {
        e.preventDefault();
 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setStatus({ type: 'error', msg: "Ingresa un correo válido" });
            return;
        }
 
        setLoading(true);
        setStatus({ type: '', msg: '' });
 
        try {
            const res = await authService.recover(email);
            setStatus({ type: 'success', msg: res });
            setTimeout(() => navigate('/login'), 2000);
        } catch (error) {
            setStatus({ type: 'error', msg: error.message });
        } finally {
            setLoading(false);
        }
    };
 
    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" sx={{ backgroundColor: '#f5f7fa' }}>
            <Paper elevation={0} sx={{ p: 5, width: 400, borderRadius: 5, boxShadow: '0px 15px 35px rgba(0,0,0,0.05)', position: 'relative' }}>
                <IconButton
                    onClick={() => navigate('/login')}
                    sx={{ position: 'absolute', top: 20, left: 20, color: '#666' }}
                >
                    <ArrowBackIcon />
                </IconButton>
 
                <Box textAlign="center" mt={3} mb={4}>
                    <Typography variant="h4" fontWeight="800" color="#1976d2">
                        Recuperar cuenta
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={1}>
                        Te enviaremos un correo con las instrucciones
                    </Typography>
                </Box>
 
                {status.msg && <Alert severity={status.type} sx={{ mb: 3, borderRadius: 3 }}>{status.msg}</Alert>}
 
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Correo electrónico"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={loading}
                        sx={{
                            mt: 3, py: 1.5, borderRadius: 3, fontWeight: 'bold',
                            textTransform: 'none', fontSize: '1rem',
                            backgroundColor: '#1976d2',
                            boxShadow: '0px 6px 15px rgba(25, 118, 210, 0.3)',
                            '&:hover': { backgroundColor: '#1565c0' }
                        }}
                    >
                        {loading ? "Enviando..." : "Enviar enlace"}
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};
 
export default Recover;