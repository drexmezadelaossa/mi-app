import React, { useEffect, useState } from 'react'

// MUI
import AppBar from '@mui/material/AppBar'; 
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

// ICONOS
import MenuIcon from '@mui/icons-material/Menu';

// ROUTER
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    // 🔥 LOGICA PARA REFRESCAR E IR ARRIBA
    useEffect(() => {
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 20);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 🔥 NUEVA LÓGICA DE SCROLL SIN CAMBIAR TU ESTRUCTURA
    const scrollToSection = (id) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else if (id === 'inicio') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
        setOpen(false);
    };

    // 🔥 TUS RUTAS (Mapeadas a IDs)
    const routesMap = {
        "Inicio": "inicio",
        "Beneficios": "beneficios",
        "Cómo funciona": "como-funciona",
        "Precios": "precios",
        "APIs": "/apis"
    };

    return (
        <>
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    background: scrolled
                        ? 'linear-gradient(180deg, rgba(20,30,48,0.95), rgba(20,30,48,0.85))'
                        : 'rgba(20, 30, 48, 0.65)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: scrolled
                        ? '0 10px 40px rgba(0,0,0,0.45)'
                        : '0 8px 32px rgba(0,0,0,0.25)',
                    transition: 'all 0.4s ease',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, #00c6ff, transparent)',
                        opacity: 0.8,
                    }
                }}
            >
                <Toolbar
                    sx={{
                        px: { xs: 2, md: 6 },
                        py: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <IconButton
                        size="large"
                        edge="start"
                        onClick={() => setOpen(true)}
                        sx={{ mr: 2, display: { md: 'none' }, color: '#fff' }}
                        aria-label="Abrir menú"
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, gap: 1, cursor: 'pointer' }} onClick={() => scrollToSection('inicio')}>
                        <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: 'linear-gradient(135deg, #00c6ff, #22c55e)', boxShadow: '0 0 16px rgba(0,198,255,0.35)' }} />
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', letterSpacing: 1.5, color: '#ffffff' }}>
                                MiApp
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#94a3b8', letterSpacing: 0.15 }}>
                                Control financiero moderno
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
                        {Object.keys(routesMap).map((item) => {
                            const target = routesMap[item];
                            const isApi = target === '/apis';

                            return (
                                <Button
                                    key={item}
                                    component={isApi ? Link : 'button'}
                                    to={isApi ? target : undefined}
                                    onClick={!isApi ? () => scrollToSection(target) : undefined}
                                    sx={{
                                        color: '#e0e0e0',
                                        textTransform: 'none',
                                        fontWeight: 500,
                                        position: 'relative',
                                        overflow: 'hidden',
                                        px: 1,
                                        minWidth: 0,
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            width: '0%',
                                            height: '2px',
                                            bottom: 0,
                                            left: 0,
                                            background: '#00c6ff',
                                            transition: '0.25s ease',
                                        },
                                        '&:hover::after': { width: '100%' },
                                        '&:hover': { color: '#00c6ff' }
                                    }}
                                >
                                    {item}
                                </Button>
                            );
                        })}

                        <Button
                            component={Link}
                            to="/login"
                            variant="contained"
                            sx={{
                                background: 'linear-gradient(45deg, #0072ff, #00c6ff)',
                                color: '#fff',
                                textTransform: 'none',
                                borderRadius: '999px',
                                py: 1.2,
                                px: 3.5,
                                boxShadow: '0 10px 30px rgba(0,198,255,0.35)',
                                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 14px 40px rgba(0,198,255,0.45)'
                                }
                            }}
                        >
                            Iniciar sesión
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{
                    sx: {
                        width: 280,
                        background: 'rgba(20,30,48,0.98)',
                        backdropFilter: 'blur(18px)',
                        border: '1px solid rgba(255,255,255,0.08)'
                    }
                }}
            >
                <Box sx={{ width: '100%', height: '100%', color: '#fff' }}>
                    <List sx={{ p: 2 }}>
                        {Object.keys(routesMap).map((item) => {
                            const target = routesMap[item];
                            const isApi = target === '/apis';

                            return (
                                <ListItem key={item} disablePadding>
                                    <ListItemButton
                                        component={isApi ? Link : 'div'}
                                        to={isApi ? target : undefined}
                                        onClick={() => !isApi ? scrollToSection(target) : setOpen(false)}
                                        sx={{ borderRadius: 3, mb: 1, '&:hover': { background: 'rgba(0,198,255,0.12)' } }}
                                    >
                                        <ListItemText primary={item} primaryTypographyProps={{ color: '#e5e7eb', fontWeight: 500 }} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                        
                        {/* --- OPCIÓN AGREGADA AL MENÚ MÓVIL --- */}
                        <ListItem disablePadding>
                            <ListItemButton
                                component={Link}
                                to="/login"
                                onClick={() => setOpen(false)}
                                sx={{ borderRadius: 3, mb: 1, '&:hover': { background: 'rgba(255,255,255,0.1)' } }}
                            >
                                <ListItemText primary="Comenzar gratis" primaryTypographyProps={{ color: '#fff', fontWeight: 700 }} />
                            </ListItemButton>
                        </ListItem>
                        {/* -------------------------------------- */}

                        <ListItem sx={{ mt: 2 }}>
                            <Button
                                component={Link}
                                to="/login"
                                fullWidth
                                variant="contained"
                                sx={{
                                    background: 'linear-gradient(45deg, #0072ff, #00c6ff)',
                                    textTransform: 'none',
                                    boxShadow: '0 12px 28px rgba(0,198,255,0.35)'
                                }}
                            >
                                Iniciar sesión
                            </Button>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    )
}

export default Header;