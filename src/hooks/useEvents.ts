import { useEffect, useState } from "react";
import { EventType } from "../repo/tipeEvents";
import { getEvents } from "../repo";

// custom hook chiamata useEvents
export const useEvents = () => {
  // useState viene utilizzato per gestire lo stato di caricamento
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // useState, può essere usato dal componente funzionale una "memoria" per ricordare le cose
  // useState viene utilizzato per gestire lo stato dei dati dell'evento,
  const [events, setEvents] = useState<EventType[]>([]); // lo stato sarà un array di oggetti

  // UseEffect usato per eseguire azioni quando il componente viene montato, aggiornato o smontato.
  // useEffect viene utilizzato per recuperare l'evento quando il componente viene montato
  useEffect(() => {
    // Viene chiamata la funzione getEvent, che probabilmente recupera dati sull'evento in modo asincrono
    getEvents().then((events) => {
      // L'evento recuperato viene impostato nello stato dell'evento
      setEvents(events);
      // Lo stato di caricamento viene impostato su false, indicando che i dati sono stati caricati
      setIsLoading(false);
    });
  }, []);

  // hook restituisce dati sull'evento e stato di caricamento
  return { events, isLoading };
};
