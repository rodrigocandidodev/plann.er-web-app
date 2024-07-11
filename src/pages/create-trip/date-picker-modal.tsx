import { X } from "lucide-react";
import { DateRange, DayPicker, SelectRangeEventHandler } from "react-day-picker";
import "react-day-picker/dist/style.css";


interface ConfirmTripModalProps {
    closeDatePicker: () => void,
    eventStartAndEndDates: DateRange | undefined,
    setEventStarAndEndDates: SelectRangeEventHandler| undefined
}


export function DatePickerModal({
    closeDatePicker,
    eventStartAndEndDates,
    setEventStarAndEndDates
}:ConfirmTripModalProps) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Selecione a data</h2>
                    <button onClick={closeDatePicker}>
                        <X className="size-5 text-zinc-400" />
                    </button>
                    </div>
                </div>

                <DayPicker mode="range" selected={eventStartAndEndDates} onSelect={setEventStarAndEndDates}/>
            </div>
        </div>
    );
}