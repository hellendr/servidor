import React, { useState } from 'react';
import '../panel/estilo css/GuardarRegistroButton.css'; 





type Intensidad = 'Leve' | 'Moderada' | 'Alta';

interface Sintoma {
  

  id: number;
  nombre: string;
  intensidad: Intensidad;
  descripcion: string;
}
interface EstadoProps {
  onGuardarSintomas?: (sintomas: Sintoma[]) => void;
}

const Estado: React.FC<EstadoProps> = ({ onGuardarSintomas }) => {

  const [nuevoSintoma, setNuevoSintoma] = useState('');
  const [sintomasRegistrados, setSintomasRegistrados] = useState<Sintoma[]>([
    { id: 1, nombre: 'Dolor de espalda', intensidad: 'Moderada', descripcion: '' },
    { id: 2, nombre: 'Fatiga', intensidad: 'Leve', descripcion: 'Me siento cansado todo el día, sin energía.' },
  ]);
  let nextId = 3; // Contador básico para IDs

  // --- Manejo de Síntomas ---
  
  const handleAñadirSintoma = () => {
    if (nuevoSintoma.trim() === '') return;

    const nuevoRegistro: Sintoma = {
      id: nextId++,
      nombre: nuevoSintoma,
      intensidad: 'Leve', // Intensidad por defecto
      descripcion: '',
    };

    setSintomasRegistrados([...sintomasRegistrados, nuevoRegistro]);
    setNuevoSintoma('');
  };

  const handleEliminarSintoma = (id: number) => {
    setSintomasRegistrados(sintomasRegistrados.filter(s => s.id !== id));
  };

  const handleCambiarIntensidad = (id: number, intensidad: Intensidad) => {
    setSintomasRegistrados(
      sintomasRegistrados.map(s => (s.id === id ? { ...s, intensidad } : s))
    );
  };

  const handleCambiarDescripcion = (id: number, descripcion: string) => {
    setSintomasRegistrados(
      sintomasRegistrados.map(s => (s.id === id ? { ...s, descripcion } : s))
    );
  };

  const handleGuardarRegistro = () => {
    console.log('Registro guardado:', sintomasRegistrados);
    alert('Registro de síntomas guardado con éxito.');
    if (onGuardarSintomas) {
  onGuardarSintomas(sintomasRegistrados);
}

  };

  // --- Componente de Tarjeta de Síntoma ---

  const SintomaCard: React.FC<{ sintoma: Sintoma }> = ({ sintoma }) => (
    <div className="sintoma-card">
      <div className="sintoma-header">
        <h3 className="sintoma-nombre">{sintoma.nombre}</h3>
        <button 
          className="btn-eliminar" 
          onClick={() => handleEliminarSintoma(sintoma.id)}
        >
          🗑
        </button>
      </div>
      
      <div className="intensidad-selector">
        {['Leve', 'Moderada', 'Alta'].map(nivel => (
          <button
            key={nivel}
            className={`btn-intensidad ${sintoma.intensidad === nivel ? 'activo' : ''}`}
            onClick={() => handleCambiarIntensidad(sintoma.id, nivel as Intensidad)}
          >
            {nivel}
          </button>
        ))}
      </div>
      
      <input
        type="text"
        placeholder="Añade una descripción (opcional)..."
        value={sintoma.descripcion}
        onChange={(e) => handleCambiarDescripcion(sintoma.id, e.target.value)}
        className="input-descripcion"
      />
    </div>
  );

  // --- Renderizado Principal ---
  
  return (
    <div className="page-container">
      <header className="header">
        <span className='span'>Mi Salud</span>
      </header>
      
      <div className="formulario-container">
        <h1 className="titulo">Registro de Síntomas</h1>
        <p className="subtitulo">Añade los síntomas que sientes y su intensidad.</p>
        
        {/* Sección: Añadir un síntoma */}
        <section className="seccion-añadir">
          <label className="label-seccion">Añadir un síntoma</label>
          <div className="input-group">
            <input
              type="text"
              placeholder="Dolor de cabeza, Náuseas, Fatiga..."
              value={nuevoSintoma}
              onChange={(e) => setNuevoSintoma(e.target.value)}
              className="input-sintoma"
              onKeyPress={(e) => {
                  if (e.key === 'Enter') handleAñadirSintoma();
              }}
            />
            <button className="btn-añadir" onClick={handleAñadirSintoma}>
              <span className="icon-mas">+</span> Añadir
            </button>
          </div>
        </section>

        {/* Sección: Síntomas registrados */}
        <section className="seccion-registrados">
          <label className="label-seccion">Mis Síntomas</label>
          <div className="sintomas-list">
            {sintomasRegistrados.map(sintoma => (
              <SintomaCard key={sintoma.id} sintoma={sintoma} />
            ))}
          </div>
        </section>

        {/* Botón Guardar Registro */}
        <button className="btn-guardar-registro" onClick={handleGuardarRegistro}>
          <span className="icon-guardar">&#x1F4BE;</span> 
          Guardar Registro
        </button>
        
      </div>
    </div>
  );
};

export default Estado;