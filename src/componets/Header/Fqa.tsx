
const Fqa =() => {

    const faqsList = [
        {
            q: "¿Qué es MediTrack?",
            a: "MediTrack es una aplicación que te permite registrar, monitorear y analizar tus síntomas y hábitos de salud de forma sencilla y segura"
        },
        {
            q: "¿Para quién está pensada la app?",
            a: "Está diseñada para cualquier persona que quiera llevar un control de su bienestar, desde pacientes con tratamientos médicos hasta quienes solo desean cuidar su salud día a día."
        },
        {
            q: "¿Puedo registrar mis síntomas en tiempo real?",
            a: "Sí, puedes registrar tus síntomas al instante y ver los cambios a lo largo del tiempo."
        },
        {
            q: "¿Puedo generar reportes para mi médico?",
            a: "Claro, MediTrack genera reportes visuales que puedes compartir fácilmente con tu profesional de salud.."
        },
        {
            q: "¿La app envía recordatorios?",
            a: "Sí, puedes configurar recordatorios personalizados para tomar medicamentos, asistir a citas o registrar tu estado de salud"
        },
        {
            q: "¿Qué tipo de análisis realiza MediTrack?",
            a: "La app genera estadísticas y gráficas para ayudarte a identificar patrones en tus síntomas y mejorar el seguimiento médico."
        },        
    ]
  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Preguntas Frecuentes
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                   Si tienes dudas resuélvelas en las preguntas más frecuentes
                </p>
            </div>
            <div className="mt-14 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
                {
                    faqsList.map((item, idx) => (
                        <div 
                            className="space-y-3 mt-5"
                            key={idx}
                        >
                            <h4 className="text-xl text-gray-700 font-medium">
                                {item.q}
                            </h4>
                            <p className="text-gray-500">
                                {item.a}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Fqa