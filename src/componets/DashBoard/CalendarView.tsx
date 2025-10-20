// src/components/DashBoard/CalendarView.tsx
import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { es } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";

type Intensidad = "Leve" | "Moderada" | "Alta";

interface Sintoma {
  id: number;
  nombre: string;
  intensidad: Intensidad;
  descripcion: string;
  fecha?: Date; // puedes agregarlo luego desde Estado si quieres guardar fechas
}

interface CalendarViewProps {
  sintomas: Sintoma[];
}

const locales = { es };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const CalendarView: React.FC<CalendarViewProps> = ({ sintomas }) => {
  // Convertir síntomas a eventos del calendario
  const events = sintomas.map((s) => ({
    title: `${s.nombre} (${s.intensidad})`,
    start: new Date(), // Aquí puedes reemplazar con s.fecha
    end: new Date(),
    allDay: true,
  }));

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{
          height: 500,
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "10px",
        }}
      />
    </div>
  );
};

export default CalendarView;
