import "../App.css";
import { Link } from 'react-router-dom'; // Importo il componente Link 
import { useEvents } from "../hooks/useEvents"; // Importo il custom hook useEvents dal file


const HomePage = () => { // Definizione del componente HomePage
    const { events, isLoading } = useEvents();  // Destructuring per ottenere events e isLoading

    if (isLoading) {
         // Se isLoading è true, mostra caricamento
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
        </div>
    }

    return ( // Renderizza la pagina principale
<div className="HomeStart">
    
<div className="navbar">
    {/* Titolo della discoteca */}
    <h1 className="discoteca-nome">QuantuM</h1>
      {/* Logo della discoteca */}
    <img src="../src/assets/logo.svg" alt="Logo" style={{ width: '150px' }}/>
    {/* Link a un dettaglio dell'evento (in questo caso con id 3) */}
    <Link to="/detail/3" className="btn-primary">Evento del momento</Link>
</div>

    {/* <img src="..\src\assets\logo.svg" alt="" /> */}
        <div className="HomePage">
             {/* Mappa attraverso gli eventi e crea una card per ciascun evento */}
            {events.map((singleEvent, i) => ( 
                <div className="EventCard" key={i}>
                    <img src={singleEvent.coverImage} alt={singleEvent.name} /> {/* Mette immagine del evento e titolo alternativo */}

                    <div className="EventCardContent">
                        <div> <h6>Id Evento:  {singleEvent.id} </h6></div>  {/* Id dell'evento */}
                        <h2>{singleEvent.name}</h2>   {/* Nome dell'evento */}
                        <div>{singleEvent.date}</div> {/* Data e ora dell'evento */}
                        <h6>{singleEvent.price} $</h6>{/* Prezzo dell'evento */}
                        {/* Descrizione breve dell'evento */}
                        <div>{singleEvent.description.short}</div>
                        {/* Link che porta alla pagina di dettaglio specifica dell'evento */}
                        <Link to={`/detail/${singleEvent.id}`} className="btn-primary">
                                Voglio sapere di più
                        </Link>

                    </div>

                </div>
            ))}
        </div>
    </div>
    );
};

// Esporta il componente HomePage come default
export default HomePage;
