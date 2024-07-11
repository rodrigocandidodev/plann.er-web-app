import { CircleDashed, UserCog } from "lucide-react";

export function Guests() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                        <span className="block font-medium text-zinc-100">Convidado 1</span>
                        <span className="block text-xs text-zinc-400 truncate">email@example.com</span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5" />
                </div>
            </div>
            <button 
                className="bg-zinc-800 w-full justify-center text-purple-300 px-5 rounded-lg h-11 font-medium flex items-center gap-2 hover:bg-purple-300 hover:text-purple-950"
            >
                Gerenciar convidados
                <UserCog className="size-5" />
            </button>
        </div>

    );
}