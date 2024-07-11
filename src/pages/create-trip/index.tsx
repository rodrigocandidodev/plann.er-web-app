import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./invite-guests-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
import { InviteGuestsStep } from "./steps/invite-guests-step";

export default function CreateTripPage() {

  const navigate = useNavigate();

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState([""]);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);

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

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true)
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get('email')?.toString();

    if(!email){
      return;
    }

    if (emailsToInvite.includes(email)) {
      return;
    }

    setEmailsToInvite([
      ...emailsToInvite,
       email
    ]);

    event.currentTarget.reset();
  }

  function removeEmailFromInvites(emailToRemove: string) {
    const newEmailsToInvite = emailsToInvite.filter((email) => email !== emailToRemove);
    
    setEmailsToInvite(newEmailsToInvite);
  }

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/trips/1");
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-6">
        <div className="flex flex-col items-center py-4">
          <h1 className="text-3xl font-bold">plann.<span className="text-purple-300">er</span></h1>
        </div>
        <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        
        <div className="space-y-4">
          <DestinationAndDateStep 
            closeGuestsInput={closeGuestsInput}
            isGuestsInputOpen={isGuestsInputOpen}
            openGuestsInput={openGuestsInput}
          />

          {isGuestsInputOpen && (
            <InviteGuestsStep 
              emailsToInvite={emailsToInvite}
              openConfirmTripModal={openConfirmTripModal}
              openGuestsModal={openGuestsModal}
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">Ao planejar sua viagem pela <span className="text-purple-300 font-medium">plann.er</span> você automaticamente concorda com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.</p>
      
        {isGuestsModalOpen && (
          <InviteGuestsModal 
            emailsToInvite={emailsToInvite}
            addNewEmailToInvite={addNewEmailToInvite}
            removeEmailFromInvites={removeEmailFromInvites}  
            closeGuestsModal={closeGuestsModal}
          />
        )}

        {isConfirmTripModalOpen && (
          <ConfirmTripModal 
            closeConfirmTripModal={closeConfirmTripModal}
            createTrip={createTrip}
          />
        )}
      </div>
    </div>
  )
}