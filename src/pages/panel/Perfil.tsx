import React from 'react';


interface ProfileDetailProps {
    label: string;
    
    value: string; 
}


const ProfileDetail: React.FC<ProfileDetailProps> = ({ label, value }) => (
    
    <div className={`py-3 ${label !== 'Alergias' ? 'border-b border-gray-200' : ''}`}>
        <p className="text-blue-500 text-sm mb-0.5">{label}</p>
        {}
        <p className="text-gray-800 text-base font-medium">{value}</p>
    </div>
);


const Perfil: React.FC = () => {
    
    const DATA_PLACEHOLDER = "— — —"; 
    
    return (
        <div className="min-h-screen bg-white">
            {}
            <header>
                <h1 className="text-left bg-[#4589b1] text-2xl text-cyan-100 p-4 shadow-md mb-0 relative">
                    Perfil
                    <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-lg text-blue-600 font-normal cursor-pointer hover:text-blue-700 transition-colors">
                        Editar
                    </button>
                </h1>
            </header>

            {}
            <div className="flex flex-col items-center p-6 border-b border-gray-100">
                <div className="relative mb-3">
                    {}
                    <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-600">
                        USUARIO
                    </div>
                    {}
                    <button className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center text-blue-600 text-xs">
                        {}
                    </button>
                </div>
                {}
                <p className="text-xl font-semibold text-gray-800">{DATA_PLACEHOLDER}</p> 
                {}
                <p className="text-sm text-gray-500">{DATA_PLACEHOLDER}</p> 
            </div>

            {}
            <div className="px-6 pt-4 pb-2">
                <ProfileDetail label="Nombre" value={DATA_PLACEHOLDER} />
                <ProfileDetail label="Apellido" value={DATA_PLACEHOLDER} />
                <ProfileDetail label="Teléfono" value={DATA_PLACEHOLDER} />
                <ProfileDetail label="Alergias" value={DATA_PLACEHOLDER} />
            </div>

            {}
            <div className="mt-6 px-6">
                {}
                <button className="flex items-center justify-between w-full py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors group">
                    <div className="flex items-center space-x-3">
                        {}
                        <div className="w-6 h-6 text-blue-500 flex items-center justify-center"></div>
                        <span className="text-base font-medium">Cambiar Contraseña</span>
                    </div>
                    {}
                    <div className="w-4 h-4 text-gray-400 flex items-center justify-center">&gt;</div>
                </button>

                {}
                <button className="flex items-center w-full py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors mt-1">
                    {}
                    <div className="w-6 h-6 text-red-600 flex items-center justify-center"></div>
                    <span className="text-base font-medium ml-3">Cerrar Sesión</span>
                </button>
            </div>
        </div>
    );
};

export default Perfil;