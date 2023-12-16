import { useEffect, useState } from "react";
import { getEvent } from "../repo";
import { EventDetailsType } from "../repo/tipeDetails";
import { useParams } from "react-router-dom";


export const useEvent = () => {
    let idNum:number= 1;
    const {id}=useParams<string>();
    if (id){idNum=parseInt(id)}; 


    // Spazio di memoria in cui dichiarare se l'API
    // sta caricando o meno. Inizialmente è true.
    const [isLoading, setIsLoading] = useState<boolean>(true);
    // Spazio di memoria in cui caricare gli utenti ricevuti
    // tramite API. Inizialmente è un array vuoto.
    const [event, setEvent] = useState<EventDetailsType>();
    // Il seguente useEffect carica la lista degli utenti
    // all'avvio del componente (nessuna dipendenza specificata
    // nell'array delle dipendenze).
    useEffect(() => {
        // Chiamo l'API di caricamento utenti.
        getEvent(idNum).then((event) => {
            // Salvo la risposta (users: UserType[]) nello stato.
            setEvent(event);
            // Imposto isLoading a false perché il caricamento
            // è terminato.
            setIsLoading(false);
        });
    }, []);

    // Ritorno un oggetto contenente le informazioni che servono
    // alla vista.
    return { event, isLoading };
};