

import type { HealthTip } from '../../../types'; 

type ListProps = {
    item: HealthTip; 
};


export default function List({ item }: ListProps) {
    return (
        
        <div 
            className="
                p-5 
                border border-gray-200 
                rounded-lg 
                shadow-lg 
                bg-white 
                transition-all 
                duration-300 
                ease-in-out 
                transform 
                hover:shadow-xl 
                hover:scale-[1.02]
                hover:bg-green-100 
                cursor-pointer
            "
        >
            {}
            <div>
                <h3 className="text-xl font-semibold text-blue-600 border-b border-green-200 pb-2 mb-2">
                    {item.id}. {item.title}
                </h3>
            </div>
            <div>
                <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
            
            {}
            <footer className="mt-4 text-xs text-gray-500 italic">
                <p>Cuida tu vida, cuida tu salud</p>
            </footer>
        </div>
    );
}