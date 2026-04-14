import React, { useEffect, useState } from 'react';
import { Box, Paper } from "@mui/material";

const ApiDisney = () => {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(1);
  const [info, setInfo] = useState({ pages: 0 });

  useEffect(() => {
    fetch(`https://api.disneyapi.dev/character?page=${pages}&pageSize=12`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.data || []);
        setInfo({ pages: data.info.totalPages || 0 });
      })
      .catch((error) => console.error('Error fetching Disney data:', error));
  }, [pages]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
        position: "relative",
        padding: 3,
        overflow: "hidden"
      }}
    >
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

      <Box sx={{
        position: "absolute",
        width: 300,
        height: 300,
        background: "radial-gradient(circle, rgba(6,182,212,0.25), transparent 70%)",
        filter: "blur(70px)",
        bottom: -80,
        right: -80
      }} />

      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: "1200px",
          p: 4,
          borderRadius: 5,
          background: "rgba(255,255,255,0.95)",
          boxShadow: "0px 20px 50px rgba(0,0,0,0.25)"
        }}
      >
        {/* PAGINACIÓN */}
        <div style={{ display: "flex", justifyContent: "center", gap: 15, marginBottom: 30 }}>
          <button onClick={() => setPages(p => Math.max(1, p - 1))}>Anterior</button>
          <span>Página {pages} de {info.pages}</span>
          <button onClick={() => setPages(p => p + 1)}>Siguiente</button>
        </div>

        {/* GRID */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: 20
        }}>
          {characters.map((char) => (
            <div key={char._id} style={{
              background: "rgba(255,255,255,0.8)",
              borderRadius: 15,
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
            }}>
              <img src={char.imageUrl} style={{ width: "100%", height: 220, objectFit: "cover" }} />
              <div style={{ padding: 15 }}>
                <h3>{char.name}</h3>
                <p style={{ color: "#1976d2" }}>Disney Character</p>
              </div>
            </div>
          ))}
        </div>
      </Paper>
    </Box>
  );
};

export default ApiDisney;