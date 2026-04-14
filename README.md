#  FRONTEND APRENDICES

> Aplicación web moderna de gestión de transacciones financieras personales, construida como proyecto formativo en el SENA.

---

## 📝 Descripción

**Frontend Aprendices** es una aplicación web de gestión de transacciones financieras personales desarrollada con React + Vite. Es una Aplicación de Página Única (SPA) que se comunica con una API REST a través de Axios.

Su objetivo principal es permitir a los usuarios:

- 🔐 Autenticarse de forma segura con registro e inicio de sesión
- 💳 Gestionar transacciones financieras (crear, listar, visualizar)
- 🎯 Explorar beneficios y pasos informativos de la plataforma
- 📊 Visualizar precios y planes disponibles

---

## ✨ Características principales

- 🔐 **Autenticación completa** — Registro e inicio de sesión con validación mediante `AuthContext`
- 💳 **Gestión de transacciones** — Listado, creación y visualización con `transactionItem.jsx`
- 🌐 **Integración con API REST** — Comunicación con backend mediante Axios (`auth.service.js`, `transaction.service.js`)
- 🧭 **Enrutamiento protegido** — Rutas privadas/públicas configuradas en `AppRoutes.jsx`
- 🎨 **Portal de acceso** — Componente `portal.jsx` para la entrada principal al sistema
- 📱 **Diseño responsivo** — Interfaz adaptable a distintos tamaños de pantalla con CSS modular
- ⚡ **Build optimizado** — Configuración de Vite para alta velocidad en desarrollo y producción

---

## ⚙️ Instalación

**1. Clonar el repositorio:**

```bash
git clone https://github.com/drexmezadelaossa/mi-app.git
```

**2. Acceder al proyecto:**

```bash
cd frontend-aprendices
```

**3. Instalar dependencias:**

```bash
npm install
```

**4. Iniciar el servidor de desarrollo:**

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

---

## 📁 Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con HMR |
| `npm run build` | Genera el build de producción en `/dist` |
| `npm run preview` | Previsualiza el build de producción localmente |
| `npm run lint` | Ejecuta ESLint para revisar el código |

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Descripción | Versión |
|---|---|---|
| ⚛️ React.js | Framework principal de UI | 19.x |
| ⚡ Vite | Build tool y servidor de desarrollo | 6.x |
| 🎨 Material UI (MUI) | Librería de componentes UI | 7.x |
| 💅 Bootstrap + CSS3 | Estilos y diseño responsivo | 5.x |
| 🌐 Axios | Cliente HTTP para consumo de API | 1.x |
| 🧭 React Router DOM | Enrutamiento de la SPA | 7.x |
| 🔄 React Context API | Manejo de estado global | Built-in |
| 📱 vite-plugin-pwa | Soporte para Progressive Web App | 1.x |
| 🔍 ESLint | Linter de código | 9.x |

---

## ⚙️ Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
VITE_API_URL=https://backend-user.onrender.com/api
```

> ⚠️ **Importante:** Nunca subas tu archivo `.env` real a GitHub. Asegúrate de que esté incluido en el `.gitignore`.

---

## 🌐 URLs del proyecto

| Entorno | URL |
|---|---|
| 🖥️ Frontend (Producción) | https://frotend-user.vercel.app |
| ⚙️ Backend (Producción) | https://backend-user.onrender.com/api |
| 🗄️ Base de datos | MongoDB Atlas — Cluster0 |

---

## 🏗️ Arquitectura del proyecto

El proyecto sigue una arquitectura modular basada en features:

```
FRONTEND-APRENDICES/
│
├── dist/                               # Build de producción generado por Vite
├── public/
│   ├── img/                            # Imágenes estáticas
│   └── sw.js                           # Service Worker (PWA)
│
├── src/
│   ├── features/
│   │   ├── auth/
│   │   │   ├── api/
│   │   │   │   └── axios.js            # Instancia configurada de Axios
│   │   │   ├── components/
│   │   │   │   ├── Myaccount.jsx       # Vista de cuenta del usuario
│   │   │   │   ├── portal.jsx          # Pantalla de acceso principal
│   │   │   │   ├── transactionForm.jsx # Formulario de transacciones
│   │   │   │   ├── transactionItem.jsx # Tarjeta individual de transacción
│   │   │   │   └── transactionList.jsx # Listado de transacciones
│   │   │   ├── context/
│   │   │   │   └── AuthContext.jsx     # Contexto global de autenticación
│   │   │   └── services/
│   │   │       ├── auth.service.js     # Servicios de autenticación
│   │   │       └── transaction.service.js # Servicios de transacciones
│   │   │
│   │   ├── layout/
│   │   │   ├── Content.jsx             # Contenido principal de la app
│   │   │   ├── Footer.jsx              # Pie de página global
│   │   │   └── Header.jsx              # Encabezado y navegación global
│   │   │
│   │   └── view/
│   │       └── components/
│   │           ├── Beneficios.jsx      # Sección de beneficios
│   │           ├── Pasos.jsx           # Guía de pasos de uso
│   │           └── Precios.jsx         # Sección de precios/planes
│   │
│   ├── shared/
│   │   └── components/
│   │       ├── ApiRy.jsx               # Componente compartido de API
│   │       └── styles.css              # Estilos globales compartidos
│   │
│   ├── App.jsx                         # Componente raíz de la aplicación
│   ├── AppRoutes.jsx                   # Configuración de rutas
│   └── main.jsx                        # Punto de entrada de la aplicación
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### 📌 Descripción de carpetas

| Carpeta | Descripción |
|---|---|
| `features/auth/` | Módulo de autenticación y gestión de transacciones |
| `features/auth/api/` | Configuración de Axios |
| `features/auth/components/` | Componentes de la feature de autenticación |
| `features/auth/context/` | Contexto global de autenticación |
| `features/auth/services/` | Lógica de consumo de la API |
| `features/layout/` | Estructura visual global (header, footer) |
| `features/view/` | Vistas informativas (beneficios, pasos, precios) |
| `shared/` | Componentes y estilos reutilizables de uso global |

---

## 📸 Screenshot de la interfaz

> _(Agrega aquí una imagen de tu aplicación)_

---

## 👩‍💻 Autor

| | |
|---|---|
| **Nombre** | Andrés Mauricio Meza |
| **Rol** | Desarrollador Frontend / UI Designer |
| **Institución** | SENA |
| **Programa** | Tecnología en Análisis y Desarrollo de Software (ADSO) |
| **GitHub** | (https://github.com/drexmezadelaossa/mi-app.git) |
| **Email** | andresmauriciomeza392@gmail.com |

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**.

---

<div align="center">
  Hecho con dedicación durante la formación🎓<br><br>
  <strong>Frontend Aprendices © 2026</strong>
</div>
