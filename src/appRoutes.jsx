import React, { Suspense, lazy } from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { authService } from "./features/auth/services/authService";

import Header from "./features/layout/header";
import Footer from "./features/layout/footer";
import Content from "./features/layout/content";

// Carga perezosa de componentes para mejorar el rendimiento
const Login = lazy(() => import("./features/auth/pages/Login"));
const Recover = lazy(() => import("./features/auth/pages/Recover"));
const Register = lazy(() => import("./features/auth/pages/Registre"));
const Dashboard = lazy(() => import("./features/auth/pages/Dashboard"));
const Apis = lazy(() => import("./features/layout/Apis"));

/**
 * 🔐 PROTECTED ROUTE
 * Permite el acceso a cualquier usuario que haya iniciado sesión (Admin o User).
 * Si no está autenticado, lo redirige al Login.
 */
const ProtectedRoute = ({ children }) => {
  if (!authService.isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

/**
 * 👑 ADMIN ROUTE
 * Restringe el acceso únicamente a usuarios con el rol "admin".
 * Si no está autenticado, va a /login.
 * Si es un usuario normal (role: "user"), lo redirige a su panel de /apis.
 */
const AdminRoute = ({ children }) => {
  const isAuth = authService.isAuthenticated();
  const isAdmin = authService.isAdmin();

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    console.warn("Acceso denegado: Se requieren permisos de administrador");
    return <Navigate to="/apis" replace />;
  }

  return children;
};

export const AppRoutes = () => {
  return (
    <HashRouter>
      <Header />
      <main role="main">
        <Suspense
          fallback={
            <div
              style={{
                minHeight: "60vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              Cargando...
            </div>
          }
        >
          <Routes>
            {/* 🌍 RUTAS PÚBLICAS: Accesibles para todos */}
            <Route path="/" element={<Content />} />
            <Route path="/login" element={<Login />} />
            <Route path="/recover" element={<Recover />} />
            <Route path="/register" element={<Register />} />

            {/* 👑 RUTA DE ADMINISTRACIÓN: Gestión de la tabla de usuarios */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  {" "}
                  {/* Cambiado de AdminRoute a ProtectedRoute */}
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            {/* 👤 RUTA DE USUARIO: Aquí es donde verás tus APIs de Dragon Ball, Disney, etc. */}
            <Route
              path="/apis"
              element={
                <ProtectedRoute>
                  <Apis />
                </ProtectedRoute>
              }
            />

            {/* 🔄 REDIRECCIÓN AUTOMÁTICA SEGÚN ROL */}
            {/* Esta ruta ayuda a enviar al usuario a su lugar correcto tras el login */}
            <Route
              path="/auth-check"
              element={
                authService.isAdmin() ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <Navigate to="/apis" />
                )
              }
            />

            {/* 🚫 MANEJO DE ERROR 404 */}
            <Route
              path="*"
              element={
                <div
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    padding: "50px",
                  }}
                >
                  404 - Página no encontrada
                </div>
              }
            />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </HashRouter>
  );
};
