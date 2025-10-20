
import React, { useState } from "react";
import CalendarView from "../../componets/DashBoard/CalendarView";
import Estado from "./Estado";
import "../../pages/panel/estilo css/estilo_historial.css";

type Intensidad = "Leve" | "Moderada" | "Alta";

interface Sintoma {
  id: number;
  nombre: string;
  intensidad: Intensidad;
  descripcion: string;
}

const Historial: React.FC = () => {
  const [sintomas, setSintomas] = useState<Sintoma[]>([]);

  const handleGuardarSintomas = (nuevosSintomas: Sintoma[]) => {
    setSintomas(nuevosSintomas);
  };

  return (
    <div className="historial-container">
      <header className="historial-header">
        <h1>Mi Historial</h1>
        <p>Gestione sus síntomas y registros de forma sencilla</p>
      </header>

      <div className="historial-tabs">
        <button className="tab-activo">Calendario</button>
        <button>Lista</button>
      </div>

      <hr className="historial-separador" />

      {/* Calendario */}
      <section className="calendario-section">
        <CalendarView sintomas={sintomas} />
      </section>

      {/* Lista debajo */}
      <section className="lista-section">
        <h2>Mis Registros</h2>
        {sintomas.length === 0 ? (
          <p>No hay síntomas registrados aún.</p>
        ) : (
          <ul>
            {sintomas.map((s) => (
              <li key={s.id}>
                <strong>{s.nombre}</strong> — {s.intensidad}
                <br />
                <em>{s.descripcion}</em>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* El componente Estado no se muestra visualmente, solo envía datos */}
      <Estado onGuardarSintomas={handleGuardarSintomas} />
    </div>
  );
};

export default Historial;
