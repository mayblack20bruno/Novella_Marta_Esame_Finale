import { EventDetailsType } from "./tipeDetails";
import { EventType } from "./tipeEvents";
import dayjs from "dayjs";

const URL = "https://its-events.davide-mantovani.workers.dev/events/";



export const getEvents = async (): Promise<EventType[]> => {
    const res: Response = await fetch(URL);
    if (res.status === 200) {
        const data = (await res.json()) as EventType[];
        return data;
    }
    return [];
};
// ho inserito anche null nel caso non fossero presenti i dati 
export const getEvent = async (eventId: number): Promise<EventDetailsType | null> => {
    // risposta api con funzione asincrona 
    const res: Response = await fetch(URL + eventId);
    // controllo della risposta 
    if (res.status === 200) {
        const data = (await res.json()) as EventDetailsType;
        /* Serve per gestire le ore  */ 
        const appoggioSlot= [];
        // appoggioslot è l'array di appoggio per gli slotdi tempo 
        appoggioSlot.push(dayjs(data?.date).format("HH:mm").toString() );

        // Crea gli slot orari da inserire all'interno del popup
        let aggiungi=0;
        // cicla creando massimo 6 slot 
        for (let index = 1; index < 6; index++) {
            // ogni 15 minuti
            aggiungi=aggiungi+15;
            // appoggioslot è l'array di appoggio per gli slotdi tempo 
            // add aggiunge minuti a quelli prestabiliti
            // push dello slot creato 
            // tostring converte quello creato in stringa 
            appoggioSlot.push(dayjs(data?.date).add(aggiungi,"m").format("HH:mm").toString() )
        }
        // necessario perchè ho messo null come possibile valore nella tipizzazine 
        if (data) {
            // inserisce la data
            data.slotTemporali=appoggioSlot;
        }
        return data;
    }
    return null;
};



