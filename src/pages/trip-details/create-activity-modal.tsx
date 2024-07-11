import { Calendar, Tag, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface CreateActivityModalProps {
    closeCreateActivityModal: () => void,
    createActivity: (event: FormEvent<HTMLFormElement>) => void
}

export function CreateActivityModal({
    closeCreateActivityModal,
    createActivity
}:CreateActivityModalProps) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
                  <button onClick={closeCreateActivityModal}>
                    <X className="size-5 text-zinc-400" />
                  </button>
                </div>

                <p className="text-sm text-left text-zinc-400">
                  Todos os convidados podem ver as atividades.</p>
              </div>

              <form 
                onSubmit={createActivity}
                className="space-y-3">
                <div className="flex items-center gap-2 h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg">
                  <Tag className="text-zinc-400 size-5" />
                  <input 
                    name="name" 
                    placeholder="Qual a sua atividade?" 
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                  />
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex flex-1 items-center gap-2 h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg">
                        <Calendar className="text-zinc-400 size-5" />
                        <input 
                            type="datetime-local"
                            name="name" 
                            placeholder="Data e horário" 
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-scheme:dark]"
                        />
                    </div>
                </div>

                <Button 
                  type="submit"
                  variant="primary" 
                  size="full">
                    Salvar atividade
                </Button>
              </form>
            </div>
          </div>
    );
}