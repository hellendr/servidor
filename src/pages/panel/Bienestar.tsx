

import { HealthTipvd } from "../../data/healthTipsData"; 

import List from "../../componets/DashBoard/bienestar/list"; 

function Bienestar() {
    return (
  <div className="p-10 min-h-screen bg-gray-50 font-sans">
            
            {}
            <h1 className="text-center bg-[#c7d4c8] text-2xl text-green-800 p-4 rounded-lg shadow-md mb-8">
                Tu Bienestar y Salud
            </h1>
            
            {}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto">
                {
                    HealthTipvd.map(item => ( 
                        <List key={item.id} item={item} />
                    ))
                }
            </div>
            
            {}
            <footer className="text-center mt-10 text-sm text-gray-500">
                <p> Cuida tu vida, cuida tu salud.</p>
            </footer>
        </div>
    );
}

export default Bienestar;