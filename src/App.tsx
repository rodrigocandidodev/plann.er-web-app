import { ArrowRight, Calendar, MapPin, Settings2, UserRoundPlus } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-6">
        <div className="flex flex-col items-center py-4">
          <h1 className="text-3xl font-bold">plann.<span className="text-purple-300">er</span></h1>
        </div>
        <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        
        <div className="space-y-4">
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

          {isGuestsInputOpen && (
            <div className="h-16 bg-zinc-900  rounded-xl px-4 flex items-center shadow-shape gap-3">
              <div className="flex items-center gap-2 flex-1">
                <UserRoundPlus className="size-5 text-zinc-400" />
                <input 
                  type="text" 
                  placeholder="Quem estará na viagem?"  
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none"/>
              </div>

              <div className="w-px  h-6 bg-zinc-800"></div>
              <button 
                onClick={openGuestsInput}
                className="bg-purple-300 text-purple-950 px-5 rounded-lg py-2 font-medium flex items-center gap-2 hover:bg-purple-400"
              >
                <ArrowRight className="size-5" />
                Confirmar viagem</button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">Ao planejar sua viagem pela <span className="text-purple-300 font-medium">plann.er</span> você automaticamente concorda com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.</p>
      </div>
    </div>
    
  )
}