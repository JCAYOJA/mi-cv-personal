const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión interna de Docker usando el pool
const db = mysql.createPool({
  host: process.env.DB_HOST || 'database', 
  port: 3306,
  user: process.env.DB_USER || 'cv_user',
  password: process.env.DB_PASSWORD || 'user_password',
  database: process.env.DB_NAME || 'cv_database',
  charset: 'utf8mb4',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// ENDPOINT: GET /cv
app.get('/cv', (req, res) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  
  // 1. Consultar los datos de la tabla persona
  db.query('SELECT * FROM persona LIMIT 1', (err, personaRes) => {
    if (err) return res.status(500).json({ error: err.message });
    if (personaRes.length === 0) return res.json({ persona: {}, formacion: [] });

    // CORRECCIÓN: Extraer el objeto individual del arreglo
    const datosPersona = personaRes[0];

    // 2. Consultar la formación académica usando el ID correcto
    db.query('SELECT id, titulo, institucion, anio FROM formacion WHERE persona_id = ?', [datosPersona.id], (errForm, formacionRes) => {
      if (errForm) return res.status(500).json({ error: errForm.message });
      
      // Retorna el formato JSON estructurado perfectamente
      res.json({
        persona: datosPersona,
        formacion: formacionRes
      });
    });
  });
});

// Puerto oficial solicitado
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto ${PORT}`);
});
