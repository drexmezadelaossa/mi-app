import React from 'react'
import { useNavigate } from 'react-router-dom';
import { authService } from '../auth/services/authService';
import ApiRyc from '../../shared/components/apiRyC'
import ApiDisney from '../../shared/components/ApiDisney'
import ApiDragonBall from '../../shared/components/ApiDragonBall';

export const Apis = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  };

  return (
    <div style={{ backgroundColor: "#0a192f", minHeight: "100vh" }}>
      {/* Barra de navegación con lógica de botones */}
      <nav style={{ 
        padding: '15px 40px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: '#112240',
        borderBottom: '1px solid #233554',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <button 
          onClick={() => navigate("/dashboard")} // ✅ ESTO HACE QUE EL BOTÓN SIRVA
          style={{ backgroundColor: '#00a8ff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Ir al Panel
        </button>
        <h2 style={{ color: 'white', margin: 0, fontSize: '1.2rem' }}>Galería de APIs</h2>
        <button 
          onClick={handleLogout} // ✅ Lógica de salir
          style={{ backgroundColor: '#ff4757', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Salir
        </button>
      </nav>

      {/* Tus componentes originales */}
      <ApiRyc />
      <ApiDisney />
      <ApiDragonBall />
    </div>
  )
}

export default Apis;