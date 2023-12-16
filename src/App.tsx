import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home /> /* avendo questo abbiamo una rotta   */
        // {path: "*", element: <h1> 404 </h1>} --> serve in caso non venga trovata una pagina mostra l'errore 404  
    },
    {
        // serve quando non si ha nessuna rotta matchata e riporta alla home 
        path: "*",
        element: <Navigate to="/" />
        /* fallback redirect o wildcard match--> valore di fallback è un valore in caso non venga matchato nulla fa quello  */
    },
    {
        path: '/detail/:id', /* serve per fare pagina dettaglio id è n numero a caso  */
        element: <DetailPage/>
    }
]);

function App() {
    return <RouterProvider router={router} />
}

export default App