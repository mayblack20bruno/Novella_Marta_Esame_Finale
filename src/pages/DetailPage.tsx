    import "../App.css";
    import "../index.css"; // il file CSS principale
    import { Link } from "react-router-dom"; // Importa componente Link da React Router per la navigazione
    import { useEvent } from "../hooks/useEvent"; // Importa hook personalizzato useEvent
    import { useState } from "react"; // Importa React e il suo hook useState

    const DetailPage = () => {
    const { event, isLoading } = useEvent(); // Utilizza l'hook useEvent per ottenere i dettagli dell'evento
    const [showPopup, setShowPopup] = useState(false); // Stato per gestire la visibilità del popup
    const [orarioPrenotato, setOrarioPrenotato] = useState<string | null>(null); // Stato per tracciare l'orario prenotato

    // Definisco una funzione chiamata handlePrenota che accetta un parametro di tipo stringa chiamato orario
    const handlePrenota = (orario: string) => {
        
        // Imposto il valore della variabile di stato orarioPrenotato con il valore fornito in orario
        setOrarioPrenotato(orario);
        
        // Imposto il valore della variabile di stato showPopup a false
        setShowPopup(false);
    };

    if (isLoading) {
        // Se il caricamento è in corso, mostra un messaggio di caricamento
        return <div className="svgLoading"><svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 100 100" enableBackground="new 0 0 0 0">
        <rect x="20" y="50" width="4" height="10" fill="#fff">
            <animateTransform attributeType="xml"
            attributeName="transform" type="translate"
            values="0 0; 0 20; 0 0"
            begin="0" dur="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="30" y="50" width="4" height="10" fill="#fff">
            <animateTransform attributeType="xml"
            attributeName="transform" type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.2s" dur="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="40" y="50" width="4" height="10" fill="#fff">
            <animateTransform attributeType="xml"
            attributeName="transform" type="translate"
            values="0 0; 0 20; 0 0"
            begin="0.4s" dur="0.6s" repeatCount="indefinite" />
        </rect>
    </svg>
    </div>;
    }

    return (
        <>

        {/* Header della pagina */}
        <div className="HomeStart">
            <div className="navbar">
            <h1 className="discoteca-nome">QuantuM</h1>
            <img
                src="../src/assets/logo.svg"
                alt="Logo"
                style={{ width: "150px" }}
            />

            {/* Link per tornare alla Home */}
            <Link to="/" className="btn-primary">
                Home
            </Link>
            </div>
        </div>

        {/* Card dell'evento */}
        <div className="CardContainer">
            <div className="Card">
            <img
                src={event?.coverImage}
                className="Card-img-top"
                alt="immagine evento"
            />

            <div className="CardBody">
                
                {/* Titolo dell'evento */}
                <h5 className="CardTitle">{event?.name}</h5>
                <h6>Id Evento: {event?.id}</h6>
                
                {/* Descrizione dell'evento */}
                <p className="CardDescrizione">
                - {event?.description.long.join(" ")}{" "}
                </p>
                
                {/* Data dell'evento */}
                <p className="CardData">- L'evento si svolgerà il {event?.date} </p>
                
                {/* Drink inclusi */}
                <p className="CardDrink">
                - Drink inclusi: {event?.includedDrinks.join(", ")}{" "}
                </p>
                
                {/* Tags dell'evento */}
                <p className="CardTags">- I tag sono: {event?.tags.join(", ")} </p>
                
                {/* Aperitivo incluso */}
                <p className="CardApeIncl">
                - L'apertivio è incluso? {event?.isAperitivoIncluded.toString()}{" "}</p>
                
                {/* Dresscode dell'evento */}
                <p className="CardDresscode">
                - Qaul'è il dresscode: {event?.dresscode}{" "} </p>
                
                {/* Prezzo dell'evento */}
                <h6>{event?.price} $</h6>
                
                {/* Mostra i piatti inclusi solo se sono inclusi */}
                {event?.isAperitivoIncluded && (
                <div className="CardIncludedDishes">
                    - Il cibo è incluso?{" "}
                    {event?.includedDishes.map((cibo, i) => {
                    return <div key={i} >Cibo incluso: {cibo.name};</div>;
                    })}
                </div>
                )}
                <div>
                    
                {/* Pulsante per aprire il popup di prenotazione */}
                <button
                    onClick={() => setShowPopup(true)}
                    className="btn-primary"
                > Prenota
                </button>

                {/* Visualizza l'orario prenotato */}
                <h3>Hai prenotato l'orario: {orarioPrenotato}</h3>
                </div>

                {/* Link per tornare alla Home */}
                <Link to="/" className="btn-primary">
                Torna alla Home
                </Link>

                {/* Mostra il popup se showPopup è true */}
                {showPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                    <h1>Prenota</h1>
                    <h2>Quale orario preferiresti?</h2>

                    {/* Mostra gli orari disponibili per la prenotazione */}
                    {event?.slotTemporali.map((slotTemporale, index) => (
                        <div key={index}>
                        <button onClick={() => handlePrenota(slotTemporale)}>
                            {slotTemporale}
                        </button>
                        </div>
                    ))}

                    {/* Pulsante per chiudere il popup */}
                    <div>
                        <button onClick={() => setShowPopup(false)}>Chiudi</button>
                    </div>
                    </div>
                </div>
                )}
            </div>
            </div>
        </div>
        </>
    );
    };

    export default DetailPage;
