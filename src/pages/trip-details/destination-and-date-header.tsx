import { Calendar, MapPin, Settings2 } from "lucide-react";

export function DestinationAndDateHeader() {
    return(
        <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
            <div className="flex items-center gap-2">
                <MapPin className="size-5 text-zinc-400"/>
                <span className="text-zinnv-100">Cidade, Brasil</span>
            </div>

            <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                    <Calendar className="size-5 text-zinc-400"/>
                    <span className="text-zinnv-100">Data</span>
                </div>
            
                <div className="w-px  h-6 bg-zinc-800"></div>
                
                <button 
                    className="bg-zinc-800 text-purple-300 px-5 rounded-lg py-2 font-medium flex items-center gap-2 hover:bg-purple-300 hover:text-purple-950"
                >
                    Alterar local/data
                    <Settings2 className="size-5" />
                </button>
            </div>
        </div>
    );
}