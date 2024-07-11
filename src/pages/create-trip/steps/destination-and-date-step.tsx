import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DatePickerModal } from "../date-picker-modal";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";

interface DestinationAndDateStepProps {
    isGuestsInputOpen: boolean
    closeGuestsInput: () => void
    openGuestsInput: () => void
    setDestination: (destination: string) => void
    setEventStartAndEndDates: (dateRange: DateRange | undefined) => void
    eventStartAndEndDates: DateRange | undefined
  }

export function DestinationAndDateStep({
    isGuestsInputOpen, 
    closeGuestsInput, 
    openGuestsInput,
    setDestination,
    setEventStartAndEndDates,
    eventStartAndEndDates
} : DestinationAndDateStepProps) {

    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    function openDatePicker() {
        setIsDatePickerOpen(true);
    }

    function closeDatePicker() {
        setIsDatePickerOpen(false);
    }

    const displayedDate = eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to 
    ? format(eventStartAndEndDates.from, "d' de 'LLL").concat(' até ').concat(format(eventStartAndEndDates.to,"d' de 'LLL"))
    : null;

    return (
        <div className="h-16 bg-zinc-900  rounded-xl px-4 flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input 
                onChange={event => setDestination(event.target.value)}
                disabled={isGuestsInputOpen}
                type="text" 
                placeholder="Para onde você vai?"  
                className="bg-transparent text-lg placeholder-zinc-400 outline-none"/>
            </div>
            
            <button 
              onClick={openDatePicker}
              disabled={isGuestsInputOpen}
              className="flex items-center text-left gap-2 w-56 ">
              <Calendar className="size-5 text-zinc-400" />
              <span className="text-lg text-zinc-400 w-40 flex-1">
                {displayedDate || 'Quando?'}
              </span>
            </button>

            <div className="w-px  h-6 bg-zinc-800"></div>
            
            {isGuestsInputOpen ? (
              <Button 
                onClick={closeGuestsInput}
                variant="secondary" 
                size="default">
                  Alterar local/data
                  <Settings2 className="size-5" />
              </Button>
            ) : (
              <Button 
                onClick={openGuestsInput}
                variant="primary" 
                size="default">
                    Continuar
                    <ArrowRight className="size-5" />
                </Button>
            )}

            {isDatePickerOpen && (
              <DatePickerModal closeDatePicker={closeDatePicker} eventStartAndEndDates={eventStartAndEndDates} setEventStarAndEndDates={setEventStartAndEndDates}/>
            )}
          </div>
    );
}