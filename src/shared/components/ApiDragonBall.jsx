import React, { useEffect, useState } from 'react';
import { Box, Paper } from "@mui/material";

const ApiDragonBall = () => {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters?page=${pages}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.items);
        setTotalPages(data.meta.totalPages);
      })
      .catch((error) => console.error('Error fetching Dragon Ball data:', error));
  }, [pages]);

  return (
    <Box sx={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
      position: "relative",
      padding: 3
    }}>
      
      {/* glow */}
      <Box sx={{
        position: "absolute",
        width: 400,
        height: 400,
        background: "radial-gradient(circle, rgba(59,130,246,0.4), transparent 70%)",
        filter: "blur(80px)",
        top: -120,
        left: -120
      }} />

      <Paper sx={{
        width: "100%",
        maxWidth: "1200px",
        p: 4,
        borderRadius: 5,
        background: "rgba(255,255,255,0.95)"
      }}>
        
        {/* PAGINACIÓN */}
        <div style={{ display: "flex", justifyContent: "center", gap: 15, marginBottom: 30 }}>
          <button onClick={() => setPages(p => Math.max(1, p - 1))}>Anterior</button>
          <span>{pages} / {totalPages}</span>
          <button onClick={() => setPages(p => Math.min(totalPages, p + 1))}>Siguiente</button>
        </div>

        {/* GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 20 }}>
          {characters.map((char) => (
            <div key={char.id} style={{
              background: "rgba(255,255,255,0.85)",
              borderRadius: 15,
              overflow: "hidden"
            }}>
              <img src={char.image} style={{ width: "100%", height: 300, objectFit: "contain" }} />
              <div style={{ padding: 15 }}>
                <h3>{char.name}</h3>
                <p style={{ color: "#ff9800" }}>{char.race}</p>
              </div>
            </div>
          ))}
        </div>

      </Paper>
    </Box>
  );
};

export default ApiDragonBall;