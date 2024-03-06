import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import Characters from "./pages/Characters";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";


const router = createBrowserRouter([
    {
        //this is the route, when url in browser matches this..
        path: '/',
        //render this component
        element: <App />,
        children:[
            {
                // index -- this is the first thing u see
                index: true,
                element: <HomePage />
            },
            {
                path: 'characters/',
                element: <Characters />
            },
            {
                path: 'about/',
                element: <AboutPage />
            }
        ],
        errorElement: <NotFound />
    },

]);

export default router;