import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";

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
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'profile',
                element: <MyProfile />
            },
            {
                path: 'games',
                loader: () => fetch('/AppData.json'),
                element: <Games />
            },
            {
                path: 'update-profile',
                element: <UpdateProfilePage />
            },
            {
                path: "*",
                element: <AppNotFound />
            }
        ]
    }
]);