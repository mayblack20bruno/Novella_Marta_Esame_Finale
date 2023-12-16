import { useEffect, useState } from "react";
import { EventType } from "../repo/tipeEvents";
import { getEvents } from "../repo";



export const useEvents = () => {
    // Spazio di memoria in cui dichiarare se l'API
    // sta caricando o meno. Inizialmente è true.
    const [isLoading, setIsLoading] = useState<boolean>(true);
    // Spazio di memoria in cui caricare gli utenti ricevuti
    // tramite API. Inizialmente è un array vuoto.
    const [events, setEvents] = useState<EventType[]>([]);
    // Il seguente useEffect carica la lista degli utenti
    // all'avvio del componente (nessuna dipendenza specificata
    // nell'array delle dipendenze).
    useEffect(() => {
        // Chiamo l'API di caricamento utenti.
        getEvents().then((events) => {
            // Salvo la risposta (users: UserType[]) nello stato.
            setEvents(events);
            // Imposto isLoading a false perché il caricamento
            // è terminato.
            setIsLoading(false);
        });
    }, []);

    // Ritorno un oggetto contenente le informazioni che servono
    // alla vista.
    return { events, isLoading };
};