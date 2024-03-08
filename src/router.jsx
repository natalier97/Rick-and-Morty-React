import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import Characters from "./pages/Characters";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import CharacterDetails from "./pages/CharacterDetailsPage";
import Favorites from "./pages/Favorites";


const router = createBrowserRouter([
    {
        //this is the route, when url in browser matches this..
        path: '/',
        //render this component
        element: <App />,
        errorElement: <NotFound />,
        children:[
            {
                // index -- this is the first thing u see
                index: true,
                element: <HomePage />
            },
            {
                path: '/characters/',
                element: <Characters />
            },
            {
                path: 'about/',
                element: <AboutPage />
            },
            {
                path: '/characters/:id/',
                element: <CharacterDetails />
            },
            {
                path: 'favorites/',
                element: <Favorites />
            }
        ],
        
    },

]);

export default router;