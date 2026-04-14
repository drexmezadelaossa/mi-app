📌 MI-APP
📝 Descripción

MI-APP es una aplicación web desarrollada con React que implementa un sistema de autenticación y un panel de usuario (dashboard). La aplicación está organizada bajo una arquitectura modular basada en features, lo que facilita su escalabilidad, mantenimiento y reutilización de componentes.

Incluye funcionalidades como inicio de sesión, registro, recuperación de contraseña y visualización de información en un dashboard.

🚀 Características principales
🔐 Sistema de autenticación (Login, Registro, Recuperación)
📊 Dashboard de usuario
🧩 Arquitectura modular basada en features
🔄 Manejo de servicios para consumo de APIs
⚛️ Uso de hooks personalizados
🧱 Componentes reutilizables
📁 Separación clara de responsabilidades
⚙️ Instalación
Clonar el repositorio:
git clone https://github.com/drexmezadelaossa/mi-app.git
Acceder al proyecto:
cd mi-app
Instalar dependencias:
npm install
▶️ Ejecución

Para ejecutar el proyecto en entorno de desarrollo:

npm run build

npm run preview

Luego abre tu navegador en:

http://localhost:4173

🛠️ Tecnologías utilizadas
⚛️ React
⚡ Vite
🟨 JavaScript (ES6+)
🎨 CSS
📦 Node.js / npm
🏗️ Arquitectura / Estructura del proyecto

El proyecto sigue una arquitectura basada en features:

src/
│
├── features/
│   └── auth/
│       ├── components/
│       ├── dashboard/
│       ├── hooks/
│       │   └── useUsers.js
│       ├── pages/
│       │   ├── Dashboard.jsx
│       │   ├── Login.jsx
│       │   ├── Recover.jsx
│       │   └── Registre.jsx
│       └── services/
│           ├── authService.jsx
│           └── userService.js
│
├── layout/
│   ├── Apis.jsx
│   ├── content.jsx
│   ├── footer.jsx
│   └── header.jsx
│
├── shared/
├── firebase/
├── App.jsx
├── appRoutes.jsx
└── main.jsx
📌 Descripción de carpetas
features/: Contiene módulos funcionales (ej: autenticación)
hooks/: Hooks personalizados
pages/: Vistas principales
services/: Lógica de consumo de APIs
layout/: Estructura visual (header, footer, etc.)
shared/: Componentes reutilizables globales
📸 Screenshot de la interfaz

(Agrega aquí una imagen de tu aplicación)

![Screenshot](img/image.png)
👨‍💻 Datos importantes del Autor
Nombre: Andres Mauricio Meza
GitHub: https://github.com/drexmezadelaossa/mi-app.git
Email: andresmauriciomeza392@gmail.com
Rol: Desarrollador Frontend
📄 Licencia

Este proyecto está bajo la licencia MIT.