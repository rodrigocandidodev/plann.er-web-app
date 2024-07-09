import { ArrowRight, Calendar, MapPin } from "lucide-react";

export default function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-6">
        <div className="flex flex-col items-center py-4">
          <h1 className="text-3xl font-bold">plann.<span className="text-lime-300">er</span></h1>
        </div>
        <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        
        <div className="h-16 bg-zinc-900  rounded-xl px-4 flex items-center shadow-shape gap-3">
          <div className="flex items-center gap-2 flex-1">
            <MapPin className="size-5 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Para onde você vai?"  
              className="bg-transparent text-lg placeholder-zinc-400 outline-none"/>
          </div>
          
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Quando?" 
              className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"/>
          </div>

          <div className="w-px  h-6 bg-zinc-800"></div>
          <button 
            className="bg-lime-300 text-lime-950 px-5 rounded-lg py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
            <ArrowRight className="size-5" />
            Continuar</button>
        </div>

        <p className="text-sm text-zinc-500">Ao planejar sua viagem pela <span className="text-lime-300 font-medium">plann.er</span> você automaticamente concorda com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.</p>
      </div>
    </div>
    
  )
}