import { ArrowRight, AtSign, Calendar, MapPin, Plus, Settings2, UserRoundPlus, X } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false)
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
              <button
                onClick={openGuestsModal}
                type="button" 
                className="flex items-center gap-2 flex-1 text-left"
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                <span className="text-zinc-400 text-lg flex-1">Quem estará na viagem?</span>
              </button>

              <div className="w-px  h-6 bg-zinc-800"></div>
              <button 
                onClick={openGuestsInput}
                className="bg-purple-300 text-purple-950 px-5 rounded-lg py-2 font-medium flex items-center gap-2 hover:bg-purple-400"
              >
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">Ao planejar sua viagem pela <span className="text-purple-300 font-medium">plann.er</span> você automaticamente concorda com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.</p>
      
        {isGuestsModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                  <button onClick={closeGuestsModal}>
                    <X className="size-5 text-zinc-400" />
                  </button>
                </div>

                <p className="text-sm text-left text-zinc-400">
                  Os convidados irão receber e-mails
                </p>
              </div>
              <div className="flex flex-wrap gap-2">

                <div className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-">
                  <span className="text-zinc-300">email@example.com</span>
                  <button type="button">
                    <X className="size-4 text-zinc-400"/>
                  </button>
                </div>

                <div className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-">
                  <span className="text-zinc-300">email@example.com</span>
                  <button type="button">
                    <X className="size-4 text-zinc-400"/>
                  </button>
                </div>

              </div>

              <div className="w-full h-px bg-zinc-800"></div>
              
              <form className="flex items-center gap-2 p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg">
                
                <div className="px-2 flex items-center flex-1 gap-2">
                  <AtSign className="text-zinc-400 size-5" />
                  <input 
                    type="text" 
                    placeholder="Digite o e-mail do convidado?" 
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                  />
                </div>
                
                <button 
                  onClick={closeGuestsModal}
                  className="bg-purple-300 text-purple-950 px-5 rounded-lg py-2 font-medium flex items-center gap-2 hover:bg-purple-400"
                >
                  Convidar
                  <Plus className="size-5" />
                </button>
              </form>
            </div>
          </div>
        )}"
      </div>
    </div>
  )
}