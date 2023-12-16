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

export const getEvent = async (eventId: number): Promise<EventDetailsType | null> => {
    const res: Response = await fetch(URL + eventId);
    if (res.status === 200) {
        const data = (await res.json()) as EventDetailsType;
        /* Serve per gestire le ore  */ 
        const appoggioSlot= [];
        appoggioSlot.push(dayjs(data?.date).format("HH:mm").toString() );

        let aggiungi=0;
        for (let index = 1; index < 6; index++) {
            aggiungi=aggiungi+15;
            appoggioSlot.push(dayjs(data?.date).add(aggiungi,"m").format("HH:mm").toString() )
        }
        if (data) {
            data.slotTemporali=appoggioSlot;
        }
        return data;
    }
    return null;
};



