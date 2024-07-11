import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks() {
    return(
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                        <span className="block font-medium text-zinc-100">Reserva</span>
                        <a href="https://www.google.com" target="_blank" className="block text-xs text-zinc-400 truncate">https://www.google.com</a>
                    </div>
                    <Link2 className="text-zinc-400 size-5" />
                </div>
            </div>
            
            <Button 
                type="button"
                variant="secondary" 
                size="full"
            >
                Cadastrar novo link
                <Plus className="size-5" />
            </Button>
        </div>
    )
}