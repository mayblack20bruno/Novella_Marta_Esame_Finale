import { useEffect, useState } from "react";
import { getEvent } from "../repo";
import { EventDetailsType } from "../repo/tipeDetails";
import { useParams } from "react-router-dom";

// custom hook di React chiamata useEvent.
export const useEvent = () => {
    
    // Inizializzazione di idNum a 1 come valore predefinito.
    let idNum:number= 1;
    // Utilizzo di useParams per ottenere il parametro "id" dall'URL.
    const {id}=useParams<string>();
    
    // Se id è presente, converte il suo valore in un numero e lo assegna a idNum.
    if (id){idNum=parseInt(id)}; 

     // useState viene utilizzato per gestire lo stato di caricamento.
    const [isLoading, setIsLoading] = useState<boolean>(true);
    // useState viene utilizzato per gestire lo stato dei dettagli dell'evento.
    const [event, setEvent] = useState<EventDetailsType>();

    // useEffect viene utilizzato per recuperare l'evento quando il componente viene montato.
    useEffect(() => {
        // Viene chiamata la funzione getEvent con l'idNum, che recupera dati sull'evento
        getEvent(idNum).then((event) => {
            // L'evento viene impostato nello stato degli eventi.
            setEvent(event);
            // Lo stato di caricamento viene impostato su false, indicando che i dati sono stati caricati.
            setIsLoading(false);
        });
    }, []);

    // L'hook restituisce i dettagli dell'evento e lo stato di caricamento.
    return { event, isLoading };
};