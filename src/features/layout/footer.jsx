import React from 'react'
import { Box, Grid, Typography, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {

  // 🔥 MAPEO DE RUTAS (PRO)
  const navRoutes = {
    "Inicio": "/",
    "Beneficios": "/",
    "Cómo funciona": "/",
    "Precios": "/"
  }

  const apiRoutes = {
    "Usuarios": "/apis",
    "Vuelos": "/apis",
    "Datos": "/apis",
    "Documentación": "/apis"
  }

  return (
    <Box
      component="footer"
      sx={{
        background: '#0f172a',
        color: 'white',
        p: 4
      }}
    >

      <Grid container spacing={4}>

        {/* LOGO */}
        <Grid item xs={12} md={4}>
          <Typography component="div" sx={{ fontWeight: 'bold', fontSize: '1.4rem', mb: 1, color: 'white' }}>
            MiApp
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: '#e5e7eb',
              lineHeight: 1.6,
              maxWidth: 400
            }}
          >
            Plataforma de APIs moderna diseñada para desarrolladores que buscan velocidad,
            seguridad y escalabilidad en sus proyectos.
          </Typography>
        </Grid>

        {/* NAVEGACIÓN */}
        <Grid item xs={6} md={2} component="nav" aria-label="Navegación principal">
          <Typography component="h2" variant="subtitle1" fontWeight="bold" mb={1}>
            Navegación
          </Typography>

          {Object.keys(navRoutes).map((item) => (
            <Link
              key={item}
              component={RouterLink}
              to={navRoutes[item]}
              underline="none"
              aria-label={`Ir a ${item}`}
              sx={{
                display: 'block',
                mb: 0.8,
                color: '#cbd5f5',
                transition: '0.3s',

                '&:hover': {
                  color: '#00c6ff',
                  transform: 'translateX(4px)'
                }
              }}
            >
              {item}
            </Link>
          ))}
        </Grid>

        {/* APIs */}
        <Grid item xs={6} md={3} component="nav" aria-label="APIs disponibles">
          <Typography component="h2" variant="subtitle1" fontWeight="bold" mb={1}>
            APIs
          </Typography>

          {Object.keys(apiRoutes).map((item) => (
            <Link
              key={item}
              component={RouterLink} // 🔥 YA NO USAMOS href
              to={apiRoutes[item]}
              underline="none"
              aria-label={`Ver API de ${item}`}
              sx={{
                display: 'block',
                mb: 0.8,
                color: '#cbd5f5',
                transition: '0.3s',

                '&:hover': {
                  color: '#00c6ff',
                  transform: 'translateX(4px)'
                }
              }}
            >
              {item}
            </Link>
          ))}
        </Grid>

        {/* CONTACTO */}
        <Grid item xs={12} md={3}>
          <Typography component="h2" variant="subtitle1" fontWeight="bold" mb={1}>
            Contacto
          </Typography>

          {/* 🔥 EMAIL ACCESIBLE */}
          <Link
            href="mailto:soporte@miapp.com"
            underline="none"
            aria-label="Enviar correo a soporte"
            sx={{ display: 'block', color: '#e5e7eb', mb: 1 }}
          >
            soporte@miapp.com
          </Link>

          <Typography variant="body2" sx={{ color: '#e5e7eb' }}>
            Medellín, Colombia
          </Typography>
        </Grid>

      </Grid>

      {/* FOOTER BOTTOM */}
      <Box
        sx={{
          mt: 4,
          pt: 2,
          borderTop: '1px solid rgba(255,255,255,0.1)',
          textAlign: 'center'
        }}
      >
        <Typography variant="body2" sx={{ color: '#cbd5f5' }}>
          © {new Date().getFullYear()} MiApp — Todos los derechos reservados
        </Typography>
      </Box>

    </Box>
  )
}

export default Footer