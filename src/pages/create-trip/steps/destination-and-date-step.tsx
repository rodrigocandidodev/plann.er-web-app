import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestinationAndDateStepProps {
    isGuestsInputOpen: boolean
    closeGuestsInput: () => void
    openGuestsInput: () => void
}

export function DestinationAndDateStep({
    isGuestsInputOpen, 
    closeGuestsInput, 
    openGuestsInput
} : DestinationAndDateStepProps) {
    return (
        <div className="h-16 bg-zinc-900  rounded-xl px-4 flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input 
                disabled={isGuestsInputOpen}
                type="text" 
                placeholder="Para onde você vai?"  
                className="bg-transparent text-lg placeholder-zinc-400 outline-none"/>
            </div>
            
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input 
                disabled={isGuestsInputOpen}
                type="text" 
                placeholder="Quando?" 
                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"/>
            </div>

            <div className="w-px  h-6 bg-zinc-800"></div>
            
            {isGuestsInputOpen ? (
              <button 
              onClick={closeGuestsInput}
              className="bg-zinc-800 text-purple-300 px-5 rounded-lg py-2 font-medium flex items-center gap-2 hover:bg-purple-300 hover:text-purple-950"
            >
              Alterar local/data
              <Settings2 className="size-5" />
              </button>
            ) : (
              <button 
              onClick={openGuestsInput}
              className="bg-purple-300 text-purple-950 px-5 rounded-lg py-2 font-medium flex items-center gap-2 hover:bg-purple-400"
            >
              <ArrowRight className="size-5" />
              Continuar</button>
            )}
            
          </div>
    );
}