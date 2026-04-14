import React from "react";

// MUI
import { Box, Typography, Grid, Paper, Button } from "@mui/material";

// ICONOS
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LabelIcon from "@mui/icons-material/Label";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import InsightsIcon from "@mui/icons-material/Insights";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import VerifiedIcon from "@mui/icons-material/Verified";
import GitHubIcon from "@mui/icons-material/GitHub";

// Estilos compartidos para mejor Lighthouse
const buttonBaseStyles = {
  fontWeight: "bold",
  fontSize: "1rem",
  textTransform: "none",
  transition: "all 0.3s ease",
};

// Componente reutilizable para tarjetas de features
const FeatureCard = ({ icon, title, description }) => (
  <Paper
    sx={{
      p: 4,
      borderRadius: 4,
      bgcolor: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.12)",
      minHeight: 200,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      transition: "all 0.4s ease",
      cursor: "pointer",
      "&:hover": {
        transform: "translateY(-10px)",
        boxShadow: "0 24px 60px rgba(0, 0, 0, 0.25)",
      },
    }}
  >
    <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          boxShadow: "0 12px 30px rgba(37, 99, 235, 0.25)",
        }}
      >
        {icon}
      </Box>
    </Box>
    <Box>
      <Typography
        component="h3"
        fontWeight="bold"
        variant="h6"
        mb={1}
        sx={{
          color: "#ffffff",
          fontSize: { xs: "1rem", md: "1.1rem" },
          lineHeight: 1.25,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        color="#cbd5e1"
        sx={{ lineHeight: 1.75, fontSize: { xs: "0.9rem", md: "0.95rem" } }}
      >
        {description}
      </Typography>
    </Box>
  </Paper>
);

// Componente reutilizable para tarjetas de precios
const PricingCard = ({ title, price, features, buttonText, isPro = false }) => (
  <Paper
    sx={{
      p: 4,
      borderRadius: 4,
      bgcolor: isPro ? "rgba(59,130,246,0.12)" : "rgba(255,255,255,0.04)",
      border: isPro
        ? "1px solid rgba(37,99,235,0.35)"
        : "1px solid rgba(255,255,255,0.12)",
      textAlign: "center",
      minHeight: 420,
      height: "100%", // 🔥 clave para igualar alturas
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      transition: "all 0.35s ease",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 28px 70px rgba(15, 23, 42, 0.25)",
      },
    }}
  >
    <Box>
      {isPro && (
        <Box
          sx={{
            mb: 3,
            px: 3,
            py: 1.25,
            background:
              "linear-gradient(90deg, rgba(59,130,246,0.95), rgba(37,99,235,0.95))",
            borderRadius: 999,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
            letterSpacing: "0.06em",
          }}
        >
          MÁS POPULAR
        </Box>
      )}

      <Typography
        variant="h6"
        component="h3"
        fontWeight="bold"
        mb={2}
        sx={{ color: "#ffffff", letterSpacing: "0.02em" }}
      >
        {title}
      </Typography>

      <Typography
        variant="h3"
        component="h3"
        fontWeight="bold"
        mb={3}
        sx={{ color: isPro ? "#93c5fd" : "#e2e8f0", letterSpacing: "-0.04em" }}
      >
        {price}
      </Typography>

      <Box mb={4} sx={{ display: "grid", gap: 1.25 }}>
        {features.map((feature, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 1,
              bgcolor: "rgba(255,255,255,0.04)",
              px: 3,
              py: 1.25,
              borderRadius: 3,
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: isPro ? "#2563eb" : "#475569",
                display: "grid",
                placeItems: "center",
                color: "#fff",
                fontSize: "0.8rem",
              }}
            >
              ✓
            </Box>
            <Typography
              sx={{
                color: "#cbd5e1",
                fontSize: "0.95rem",
                lineHeight: 1.6,
                textAlign: "left",
              }}
            >
              {feature}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>

    {/* 🔥 botón siempre abajo */}
    <Box sx={{ mt: "auto" }}>
      <Button
        fullWidth
        variant="contained"
        aria-label={`Elegir plan ${title}`}
        sx={{
          background: isPro
            ? "linear-gradient(90deg, #1d4ed8, #2563eb)"
            : "linear-gradient(90deg, #334155, #475569)",
          color: "#ffffff",
          borderRadius: 3,
          ...buttonBaseStyles,
          py: 1.6,
          fontWeight: "bold",
          boxShadow: isPro
            ? "0 12px 30px rgba(37,99,235,0.35)"
            : "0 8px 22px rgba(15,23,42,0.25)",
          "&:hover": {
            background: isPro
              ? "linear-gradient(90deg, #1e40af, #1d4ed8)"
              : "linear-gradient(90deg, #334155, #5b6d89)",
            transform: "translateY(-2px)",
            boxShadow: isPro
              ? "0 16px 38px rgba(37,99,235,0.45)"
              : "0 10px 28px rgba(15,23,42,0.32)",
          },
          "&:active": {
            transform: "translateY(0)",
          },
        }}
      >
        {buttonText}
      </Button>
    </Box>
  </Paper>
);

// Componente reutilizable para testimonios
const TestimonialCard = ({ image, name, testimonial }) => (
  <Paper
    elevation={10}
    sx={{
      p: 3,
      maxWidth: 340,
      minHeight: 330,
      mx: "auto",
      borderRadius: 5,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      position: "relative",
      overflow: "hidden",
      bgcolor: "rgba(15, 23, 42, 0.95)",
      border: "1px solid rgba(96, 165, 250, 0.15)",
      backdropFilter: "blur(8px)",
      boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
    }}
  >
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: 8,
        background:
          "linear-gradient(90deg, rgba(37,99,235,0.95), rgba(16,185,129,0.95), rgba(139,92,246,0.95))",
      }}
    />
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: 86,
          height: 86,
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
          mb: 2,
          background:
            "linear-gradient(135deg, rgba(37,99,235,0.18), rgba(16,185,129,0.12))",
          border: "2px solid rgba(255,255,255,0.14)",
        }}
      >
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{
            width: 68,
            height: 68,
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid rgba(255,255,255,0.22)",
          }}
        />
      </Box>
      <Typography
        fontWeight="bold"
        sx={{ color: "#ffffff", fontSize: "1rem", mb: 0.5 }}
      >
        {name}
      </Typography>
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 0.5,
          mb: 2.5,
          color: "#94a3b8",
          px: 2,
          py: 0.75,
          bgcolor: "rgba(255,255,255,0.06)",
          borderRadius: 999,
        }}
      >
        <VerifiedIcon sx={{ fontSize: 16, color: "#22c55e" }} />
        <Typography variant="body2" sx={{ fontSize: "0.82rem" }}>
          Usuario verificado
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          minHeight: 150,
          position: "relative",
          borderRadius: 4,
          bgcolor: "rgba(255,255,255,0.03)",
          p: 3,
          mb: 2,
        }}
      >
        <FormatQuoteIcon
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            fontSize: 32,
            color: "rgba(37, 99, 235, 0.18)",
          }}
        />
        <Typography
          variant="body2"
          sx={{
            color: "#cbd5e1",
            lineHeight: 1.8,
            fontSize: "0.92rem",
            pl: 1,
            pr: 1,
          }}
        >
          {testimonial}
        </Typography>
      </Box>
    </Box>
    <Box
      sx={{
        display: "flex",
        gap: 1,
        mt: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{ color: "#93c5fd", fontWeight: "bold", fontSize: "0.85rem" }}
      >
        5.0
      </Typography>
      <Box sx={{ display: "flex", gap: 0.75 }}>
        {[...Array(5)].map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: index < 5 ? "#2563eb" : "rgba(148, 163, 184, 0.25)",
            }}
          />
        ))}
      </Box>
    </Box>
  </Paper>
);

const Content = () => {
  const features = [
    {
      icon: <BarChartIcon sx={{ fontSize: 40, color: "#3b82f6" }} />,
      title: "Reportes por mes",
      desc: "Visualiza tus gastos por categoría y mes. Exporta a PDF/CSV en un clic.",
    },
    {
      icon: (
        <AccountBalanceWalletIcon sx={{ fontSize: 40, color: "#22c55e" }} />
      ),
      title: "Presupuestos y alertas",
      desc: "Configura límites por categoría y recibe alertas cuando te acerques al tope.",
    },
    {
      icon: <LabelIcon sx={{ fontSize: 40, color: "#f59e0b" }} />,
      title: "Categorías personalizadas",
      desc: "Crea y edita tus categorías con iconos y colores para identificar rápido.",
    },
    {
      icon: <CloudDoneIcon sx={{ fontSize: 40, color: "#06b6d4" }} />,
      title: "Sincronizado y seguro",
      desc: "Tus datos se guardan en la nube con autenticación y cifrado.",
    },
    {
      icon: <PhoneIphoneIcon sx={{ fontSize: 40, color: "#8b5cf6" }} />,
      title: "Multiplataforma",
      desc: "Funciona en móvil y escritorio. PWA lista para usar sin conexión básica.",
    },
    {
      icon: <InsightsIcon sx={{ fontSize: 40, color: "#ef4444" }} />,
      title: "Análisis inteligente",
      desc: "Tendencias, promedios y recomendaciones para mejorar tus finanzas.",
    },
  ];

  const plans = [
    {
      title: "Gratis",
      price: "$0 / mes",
      features: [
        "Hasta 200 registros/mes",
        "2 presupuestos activos",
        "Exportación CSV",
      ],
      buttonText: "Empezar",
    },
    {
      title: "Pro",
      price: "$5.99 / mes",
      features: [
        "Registros ilimitados",
        "Presupuestos ilimitados",
        "Exportación PDF / CSV",
        "Reportes avanzados",
      ],
      buttonText: "Elegir plan",
      isPro: true,
    },
    {
      title: "Equipo",
      price: "$20.99 / mes",
      features: [
        "Hasta 5 usuarios",
        "Compartir categorías",
        "Soporte prioritario",
      ],
      buttonText: "Contactar ventas",
    },
  ];

  const testimonials = [
    {
      name: "Laura",
      image: "/img/laura.png",
      testimonial:
        "Antes no entendía a dónde se iba mi dinero. El reporte mensual es un golazo.",
    },
    {
      name: "Camila",
      image: "/img/camila.png",
      testimonial:
        "La exportación a PDF me sirve para compartir el control con mi pareja.",
    },
    {
      name: "Andrés",
      image: "/img/andres.png",
      testimonial:
        "Las alertas de presupuesto me han ayudado a no gastarme todo antes de fin de mes.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, md: 4 },
        py: 6,

        // 🔥 fondo igual login
        background:
          "linear-gradient(135deg, #0b1220 0%, #132c6b 55%, #1e3a8a 100%)",

        // 🔥 glow oscuro lado izquierdo
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "35%",
          height: "100%",
          background:
            "radial-gradient(circle at left center, rgba(0,0,0,0.55) 0%, transparent 70%)",
          zIndex: 0,
        },

        // 🔥 glow azul abajo derecha
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-120px",
          right: "-120px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)",
          filter: "blur(70px)",
          zIndex: 0,
        },

        // 🔥 asegura que todo el contenido quede arriba del fondo
        "& > *": {
          position: "relative",
          zIndex: 1,
          scrollMarginTop: "80px",
        },
      }}
    >
      {/* HERO */}
      <Box textAlign="center" maxWidth="900px" mb={10}>
        <Typography
          component="h1"
          variant="h2"
          fontWeight="bold"
          color="white"
          mb={3}
          sx={{
            fontSize: { xs: "1.9rem", sm: "2.3rem", md: "2.8rem" },
            lineHeight: 1.2,
          }}
        >
          Registrar, clasificar y visualizar tus gastos diarios
        </Typography>

        <Typography
          component="p"
          variant="body1"
          color="#e5e7eb"
          mb={6}
          sx={{
            fontWeight: 300,
            fontSize: { xs: "0.95rem", md: "1rem" },
          }}
        >
          Toma control de tu dinero con herramientas simples y claras
        </Typography>

        <Box
          display="flex"
          justifyContent="center"
          gap={2}
          flexWrap="wrap"
          alignItems="center"
        >
          {/* Botón Principal */}
          <Button
            variant="contained"
            aria-label="Empezar gratis en la plataforma"
            sx={{
              background: "linear-gradient(45deg, #2563eb, #1d4ed8)",
              color: "#ffffff",
              px: 5,
              py: 1.8,
              borderRadius: 3,
              fontWeight: "bold",
              fontSize: "1rem",
              textTransform: "none",
              boxShadow: "0 8px 25px rgba(37,99,235,0.4)",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(45deg, #1e40af, #1d4ed8)",
                transform: "translateY(-3px)",
                boxShadow: "0 12px 35px rgba(37,99,235,0.5)",
              },
            }}
          >
            Empieza gratis
          </Button>

          {/* Botón GitHub */}
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            href="https://github.com/drexmezadelaossa/mi-app.git"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderColor: "rgba(255, 255, 255, 0.2)",
              color: "white",
              textTransform: "none",
              px: 4,
              py: 1.8,
              borderRadius: 3,
              fontWeight: "bold",
              "&:hover": {
                borderColor: "white",
                backgroundColor: "rgba(255,255,255,0.05)",
                transform: "translateY(-3px)",
              },
            }}
          >
            GitHub
          </Button>

          {/* Botón Ver Planes */}
          <Button
            variant="outlined"
            aria-label="Ver los planes disponibles"
            sx={{
              borderColor: "#3b82f6",
              color: "#ffffff",
              px: 5,
              py: 1.8,
              borderRadius: 3,
              fontWeight: "bold",
              fontSize: "1rem",
              textTransform: "none",
              border: "2px solid",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(59,130,246,0.15)",
                borderColor: "#60a5fa",
                transform: "translateY(-3px)",
              },
            }}
          >
            Ver planes
          </Button>
        </Box>
      </Box>

      {/* 🔥 SECCIÓN: BENEFICIOS (ID AGREGADO) */}
      <Grid
        id="beneficios"
        container
        spacing={{ xs: 4, md: 8 }}
        maxWidth="1200px"
        alignItems="center"
        sx={{ margin: "0 auto", py: { xs: 4, md: 8 } }}
      >
        {/* IZQUIERDA - CONTENIDO pequeño */}
        <Grid item xs={12} md={5}>
          <Typography
            component="h2"
            variant="h3"
            fontWeight="bold"
            mb={2}
            sx={{
              fontSize: { xs: "1.3rem", sm: "1.6rem", md: "1.9rem" },
              lineHeight: 1.3,
              color: "#ffffff",
            }}
          >
            Deja de perder el control de tu dinero 💸
          </Typography>

          <Typography
            variant="body1"
            color="#d1d5db"
            mb={3}
            sx={{ fontSize: { xs: "0.9rem", md: "0.95rem" }, lineHeight: 1.6 }}
          >
            Organiza tus finanzas de forma simple, clara y sin estrés.
          </Typography>

          <Box
            display="flex"
            flexDirection="column"
            gap={{ xs: 1.5, md: 2 }}
            mb={3}
          >
            {[
              "Crea tu cuenta en segundos",
              "Registra tus gastos sin complicaciones",
              "Entiende en qué se va tu dinero y mejora",
            ].map((text, i) => (
              <Box key={i} display="flex" alignItems="flex-start" gap={1.25}>
                <Box
                  sx={{
                    width: 26,
                    height: 26,
                    minWidth: 26,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    boxShadow: "0 4px 10px rgba(37, 99, 235, 0.2)",
                    flexShrink: 0,
                    mt: 0.5,
                  }}
                >
                  ✓
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: "0.85rem", md: "0.9rem" },
                    color: "#e5e7eb",
                    lineHeight: 1.5,
                  }}
                >
                  {text}
                </Typography>
              </Box>
            ))}
          </Box>

          <Button
            variant="contained"
            sx={{
              px: { xs: 4, sm: 5 },
              py: { xs: 1.2, md: 1.4 },
              borderRadius: 3,
              ...buttonBaseStyles,
              background: "linear-gradient(90deg, #2563eb, #1d4ed8)",
              boxShadow: "0 6px 15px rgba(37, 99, 235, 0.3)",
              fontSize: { xs: "0.95rem", md: "1rem" },
              "&:hover": {
                boxShadow: "0 10px 25px rgba(37, 99, 235, 0.4)",
                transform: "translateY(-2px)",
              },
              "&:active": {
                transform: "translateY(0)",
              },
            }}
          >
            Empieza gratis
          </Button>

          <Box display="flex" alignItems="center" gap={1} mt={2}>
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#22c55e",
                flexShrink: 0,
              }}
            />
            <Typography
              variant="body2"
              color="#d1d5db"
              sx={{ fontSize: "0.85rem" }}
            >
              Sin tarjeta de crédito
            </Typography>
          </Box>
        </Grid>

        {/* DERECHA - IMAGEN grande */}
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: { xs: 2, md: 0 },
          }}
        >
          <Box
            component="img"
            src="/img/escritorio.jpg"
            alt="Vista previa de la plataforma"
            sx={{
              width: "100%",
              maxWidth: 500,
              borderRadius: 5,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              transition: "all 0.4s ease",
              "&:hover": {
                transform: "scale(1.03) translateY(-8px)",
                boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
              },
            }}
          />
        </Grid>
      </Grid>

      {/* 🔥 SECCIÓN: CÓMO FUNCIONA / INTERFAZ (ID AGREGADO) */}
      <Grid
        id="como-funciona"
        container
        justifyContent="center"
        sx={{
          margin: "0 auto",
          py: { xs: 4, md: 8 },
          maxWidth: "1200px",
          px: 2,
        }}
      >
        <Grid item xs={12} md={10}>
          <Paper
            sx={{
              overflow: "hidden",
              borderRadius: 5,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 30px 80px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Box
              component="img"
              src="/img/Negocio.jpg"
              alt="Interfaz de control financiero"
              sx={{
                width: "100%",
                display: "block",
                objectFit: "cover",
                maxHeight: 360,
              }}
            />

            <Box sx={{ p: { xs: 3.5, md: 4.5 } }}>
              <Typography
                component="h2"
                variant="h3"
                fontWeight="bold"
                mb={2}
                sx={{
                  fontSize: { xs: "1.4rem", sm: "1.75rem", md: "2rem" },
                  lineHeight: 1.2,
                  color: "#ffffff",
                }}
              >
                Interfaz simple y clara
              </Typography>

              <Typography
                variant="body1"
                color="#d1d5db"
                mb={4}
                sx={{
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  lineHeight: 1.7,
                }}
              >
                Registra en segundos, filtra por categorías y genera un reporte
                mensual con un clic.
              </Typography>

              <Box
                display="flex"
                flexDirection="column"
                gap={{ xs: 1.5, md: 2.5 }}
                mb={4}
              >
                {[
                  "Registrar ingresos y gastos",
                  "Presupuestos por categoría",
                  "Reportes por mes y exportación",
                  "Alertas cuando te acercas al límite",
                ].map((text, i) => (
                  <Box key={i} display="flex" alignItems="flex-start" gap={1.5}>
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        minWidth: 28,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #22c55e, #10b981)",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.95rem",
                        fontWeight: "bold",
                        boxShadow: "0 8px 16px rgba(34, 197, 94, 0.25)",
                        flexShrink: 0,
                        mt: 0.5,
                      }}
                    >
                      ✓
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        color: "#e5e7eb",
                        lineHeight: 1.6,
                      }}
                    >
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  py: { xs: 1.3, md: 1.5 },
                  borderRadius: 3,
                  background: "linear-gradient(90deg, #2563eb, #1d4ed8)",
                  boxShadow: "0 10px 30px rgba(37, 99, 235, 0.25)",
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  textTransform: "none",
                  fontWeight: "bold",
                  "&:hover": {
                    background: "linear-gradient(90deg, #3b82f6, #2563eb)",
                    boxShadow: "0 14px 35px rgba(37, 99, 235, 0.35)",
                    transform: "translateY(-2px)",
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                }}
              >
                Empieza gratis
              </Button>

              <Typography
                mt={2}
                variant="body2"
                color="#d1d5db"
                sx={{
                  fontSize: "0.85rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#22c55e",
                    flexShrink: 0,
                  }}
                />
                Sin tarjeta de crédito
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* FEATURES */}
      <Box
        sx={{
          mt: 12,
          mb: 4,
          textAlign: "center",
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            mb: 2,
            px: 2.5,
            py: 1,
            bgcolor: "rgba(37, 99, 235, 0.12)",
            borderRadius: 999,
            border: "1px solid rgba(37, 99, 235, 0.2)",
          }}
        >
          <Typography
            variant="caption"
            fontWeight="bold"
            sx={{ color: "#a5b4fc", letterSpacing: "0.12em" }}
          >
            CARACTERÍSTICAS
          </Typography>
        </Box>
        <Typography
          component="h2"
          variant="h3"
          fontWeight="bold"
          color="white"
          mb={2}
          sx={{ fontSize: { xs: "1.7rem", md: "2.1rem" } }}
        >
          Todo lo que necesitas para gestionar tus finanzas
        </Typography>
        <Typography
          color="#cbd5e1"
          sx={{
            fontSize: { xs: "0.95rem", md: "1rem" },
            maxWidth: "760px",
            mx: "auto",
            lineHeight: 1.8,
          }}
        >
          Descubre un panel diseñado para darte control total con velocidad,
          claridad y estilo. Cada función está pensada para tu día a día
          financiero.
        </Typography>
      </Box>

      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        maxWidth="1200px"
        sx={{ mb: 8, mx: "auto" }}
      >
        <Grid item xs={12} md={6} key="reportes">
          <FeatureCard
            icon={features[0].icon}
            title={features[0].title}
            description={features[0].desc}
          />
        </Grid>
        <Grid item xs={12} md={6} key="presupuestos">
          <FeatureCard
            icon={features[1].icon}
            title={features[1].title}
            description={features[1].desc}
          />
        </Grid>

        {features.slice(2).map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index + 2}>
            <FeatureCard
              icon={item.icon}
              title={item.title}
              description={item.desc}
            />
          </Grid>
        ))}
      </Grid>

      {/* 🔥 SECCIÓN: PLANES / PRECIOS (ID AGREGADO) */}
      <Box
        id="precios"
        textAlign="center"
        mt={10}
        mb={6}
        sx={{ maxWidth: "1100px", mx: "auto" }}
      >
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            mb: 3,
            px: 3,
            py: 1,
            bgcolor: "rgba(37,99,235,0.12)",
            borderRadius: 999,
            border: "1px solid rgba(37,99,235,0.25)",
          }}
        >
          <Typography
            variant="caption"
            fontWeight="bold"
            sx={{ color: "#a5b4fc", letterSpacing: "0.14em" }}
          >
            PLANES DESTACADOS
          </Typography>
        </Box>
        <Typography
          component="h2"
          variant="h3"
          fontWeight="bold"
          color="white"
          mb={2}
          sx={{ fontSize: { xs: "1.7rem", md: "2.05rem" }, lineHeight: 1.15 }}
        >
          Planes simples y transparentes
        </Typography>

        <Typography
          color="#cbd5e1"
          sx={{
            fontSize: { xs: "0.95rem", md: "1rem" },
            maxWidth: "750px",
            mx: "auto",
            lineHeight: 1.8,
          }}
        >
          Elige el plan que se ajusta a tus necesidades con claridad total. Cada
          opción incluye todo lo necesario para organizar, controlar y mejorar
          tu flujo financiero.
        </Typography>
      </Box>

      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        maxHeight="1200px"
        sx={{ mb: 12, mx: "auto" }}
      >
        {plans.map((plan, idx) => (
          <Grid item xs={12} md={4} key={idx} display="flex">
            <PricingCard {...plan} />
          </Grid>
        ))}
      </Grid>

      {/* 🔥 TESTIMONIOS */}
      <Box
        sx={{
          width: "100%",
          background:
            "linear-gradient(180deg, rgba(20,30,48,0.98) 0%, rgba(20,30,48,0.95) 100%)",
          py: 8,
        }}
      >
        <Box textAlign="center" mb={6}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              mb: 2,
              px: 3,
              py: 1,
              bgcolor: "rgba(37, 99, 235, 0.12)",
              borderRadius: 999,
              border: "1px solid rgba(37, 99, 235, 0.25)",
            }}
          >
            <Typography
              variant="caption"
              fontWeight="bold"
              sx={{ color: "#93c5fd", letterSpacing: "0.18em" }}
            >
              HISTORIAS REALES
            </Typography>
          </Box>
          <Typography
            component="h2"
            variant="h3"
            fontWeight="bold"
            color="white"
            mb={2}
            sx={{ fontSize: { xs: "1.55rem", md: "2rem" } }}
          >
            Historias reales de usuarios
          </Typography>

          <Typography
            color="#cbd5e1"
            sx={{
              fontSize: { xs: "0.95rem", md: "1rem" },
              maxWidth: "680px",
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            Más que opiniones: son experiencias reales de personas que ganaron
            control y claridad financiera con nuestra plataforma.
          </Typography>
        </Box>

        <Grid
          container
          spacing={3}
          sx={{
            mb: 0,
            mx: "auto",
            justifyContent: "center",
            maxWidth: "100%",
            px: { xs: 2, md: 4 },
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={idx}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <TestimonialCard {...testimonial} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Content;
