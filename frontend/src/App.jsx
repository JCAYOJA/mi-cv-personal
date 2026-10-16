import React, { useEffect, useState } from 'react';

function App() {
  const [cvData, setCvData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/cv')
      .then((res) => {
        if (!res.ok) throw new Error('Error al conectar con el servidor');
        return res.json();
      })
      .then((data) => setCvData(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', padding: '0 20px' }}>
        <div style={{ backgroundColor: '#fdadad', color: '#8b0000', padding: '15px 25px', borderRadius: '8px', fontWeight: 'bold', width: '100%', maxWidth: '500px', textAlign: 'center' }}>
          ⚠️ Error de conexión: {error}
        </div>
      </div>
    );
  }

  if (!cvData) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f4f6f9', fontFamily: 'Segoe UI, sans-serif' }}>
        <div style={{ border: '4px solid #f3f3f3', borderTop: '4px solid #1a73e8', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite' }} />
        <p style={{ marginTop: '15px', color: '#5f6368', fontWeight: '500' }}>Cargando CV Personal...</p>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  const { persona, formacion } = cvData;

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '40px 20px',
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      boxSizing: 'border-box'
    }}>
      <div style={{ 
        backgroundColor: '#ffffff', 
        borderRadius: '20px', 
        boxShadow: '0 12px 32px rgba(0,0,0,0.15)', 
        width: '100%', 
        maxWidth: '550px', 
        overflow: 'hidden' 
      }}>
        
        {/* Banner Superior Estilo Profesional */}
        <div style={{ background: 'linear-gradient(90deg, #1a73e8 0%, #0d47a1 100%)', height: '120px' }} />
        
        {/* Cuerpo del CV */}
        <div style={{ padding: '0 30px 35px 30px', position: 'relative' }}>
          
          {/* Avatar / Fotografía */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-70px', marginBottom: '15px' }}>
            <img 
              src={persona?.foto || 'https://placeholder.com'} 
              alt="Foto de Perfil" 
              style={{ width: '130px', height: '130px', borderRadius: '50%', border: '5px solid #ffffff', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', objectFit: 'cover' }}
            />
          </div>

          {/* Información Personal */}
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h1 style={{ margin: '0 0 8px 0', color: '#202124', fontSize: '1.8rem', fontWeight: '700' }}>
              {persona?.nombre} {persona?.apellido}
            </h1>
            <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#f1f3f4', padding: '6px 16px', borderRadius: '20px', color: '#3c4043', fontSize: '0.9rem', fontWeight: '600' }}>
              <span style={{ marginRight: '5px', color: '#d93025' }}>📍</span> {persona?.ciudad}, Bolivia
            </div>
          </div>

          <hr style={{ border: '0', height: '1px', backgroundColor: '#e8eaed', margin: '25px 0' }} />

          {/* Sección de Formación Académica */}
          <div>
            <h2 style={{ color: '#1a73e8', fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 20px 0', display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px', fontSize: '1.2rem' }}>🎓</span> Formación Académica
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {formacion?.map((item, index) => (
                <div 
                  key={item.id || index} 
                  style={{ 
                    backgroundColor: '#f8f9fa', 
                    border: '1px solid #e8eaed', 
                    borderRadius: '12px', 
                    padding: '15px 20px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ fontWeight: '700', color: '#202124', fontSize: '1.05rem', marginBottom: '4px' }}>
                    {item.titulo}
                  </div>
                  <div style={{ color: '#5f6368', fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '8px' }}>
                    {item.institucion}
                  </div>
                  <div style={{ display: 'inline-block', backgroundColor: '#e8f0fe', color: '#1a73e8', fontSize: '0.75rem', fontWeight: '700', padding: '4px 8px', borderRadius: '4px' }}>
                    Año de Egreso: {item.anio}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
