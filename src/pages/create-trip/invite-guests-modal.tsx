import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";

interface InviteGuestsModalProps {
    closeGuestsModal: () => void,
    emailsToInvite: string[],
    addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
    removeEmailFromInvites: (email: string) => void,
}
export function InviteGuestsModal({
    closeGuestsModal, 
    emailsToInvite,
    addNewEmailToInvite,
    removeEmailFromInvites
}: InviteGuestsModalProps) {
    return (
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

                {emailsToInvite.map(email => {
                  return (
                    <div
                      key={email} 
                      className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
                    >
                      <span className="text-zinc-300">{email}</span>
                      <button 
                        type="button"
                        onClick={() => removeEmailFromInvites(email)}
                      >
                        <X className="size-4 text-zinc-400"/>
                      </button>
                    </div>
                  )
                })}
              </div>

              <div className="w-full h-px bg-zinc-800"></div>
              
              <form 

                onSubmit={addNewEmailToInvite}
                className="flex items-center gap-2 p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg">
                
                <div className="px-2 flex items-center flex-1 gap-2">
                  <AtSign className="text-zinc-400 size-5" />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Digite o e-mail do convidado?" 
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="bg-purple-300 text-purple-950 px-5 rounded-lg py-2 font-medium flex items-center gap-2 hover:bg-purple-400"
                >
                  Convidar
                  <Plus className="size-5" />
                </button>
              </form>
            </div>
          </div>
    );
}