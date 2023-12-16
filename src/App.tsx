import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';

// Creazione di un oggetto router con percorsi e relativi componenti associati.
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
        // {path: "*", element: <h1> 404 </h1>} potrebbe essere utilizzata per gestire la pagina 404. 
    },
    {
        path: '/detail/:id', 
        element: <DetailPage/>
    },
    {
        
        path: "*",
        element: <Navigate to="/" />
        // Se viene richiesta una rotta non esistente, reindirizza l'utente alla homepage ("/").
    }
    
]);

// Il componente principale dell'applicazione, che utilizza RouterProvider per fornire il router all'applicazione.
function App() {
    return <RouterProvider router={router} />
}

export default App