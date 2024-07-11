import { CircleCheck } from "lucide-react";

export function Activities () {
    return(
        <div className="space-y-8">
            <div className="space-y-2.5">
                <div className="flex gap-2 items-baseline">
                    <span className="text-xl text-zinc-300 font-semibold">Dia</span>
                    <span className="text-xs text-zinc-500">Dia da semana</span>
                </div>
                <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
            </div>

            <div className="space-y-2.5">
                <div className="flex gap-2 items-baseline">
                    <span className="text-xl text-zinc-300 font-semibold">Dia</span>
                    <span className="text-xs text-zinc-500">Dia da semana</span>
                </div>

                <div className="space-y-2.5">
                    <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                        <CircleCheck className="size-5 text-purple-300" />
                        <span className="text-zinc-100">Alguma atividade</span>
                        <span className="text-zinc-100 text-sm ml-auto">Horário</span>
                    </div>
                </div>
            </div>
        </div>
    );
}