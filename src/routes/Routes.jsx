import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import AppDetails from "../Components/AppDetails/AppDetails";
import Games from "../pages/Games";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import AppNotFound from "../Components/Error Page/AppNotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <AppNotFound />,
        children: [
            {
                index: true,
                loader: () => fetch('/AppData.json'),
                element: <HomePage />
            },
            {
                path: 'app/:id',
                loader: () => fetch('/AppData.json'),
                element: <PrivateRoute><AppDetails /></PrivateRoute>
            },
            {
                path: 'games',
                loader: () => fetch('/AppData.json'),
                element: <Games />
            }
        ]
    }
]);