import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepsProps {
    openGuestsModal: () => void;
    emailsToInvite: string[];
    openConfirmTripModal: () => void;
}

export function InviteGuestsStep({
    openGuestsModal,
    emailsToInvite,
    openConfirmTripModal
}: InviteGuestsStepsProps) {
    return (
        <div className="h-16 bg-zinc-900  rounded-xl px-4 flex items-center shadow-shape gap-3">
            <button
            onClick={openGuestsModal}
            type="button" 
            className="flex items-center gap-2 flex-1 text-left"
            >
            <UserRoundPlus className="size-5 text-zinc-400" />
            {emailsToInvite.length > 0 ? (
                <span className="text-zinc-100">{emailsToInvite.length} pessoa(s) convidada(s)</span>
            ) : (
                <span className="text-zinc-400 text-lg flex-1">Quem estará na viagem?</span>
            )}
            
            </button>

            <div className="w-px  h-6 bg-zinc-800"></div>
            <button 
            onClick={openConfirmTripModal}
            className="bg-purple-300 text-purple-950 px-5 rounded-lg py-2 font-medium flex items-center gap-2 hover:bg-purple-400"
            >
            Confirmar viagem
            <ArrowRight className="size-5" />
            </button>
        </div>

    );
}