import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import AppDetails from "../Components/AppDetails/AppDetails";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import Games from "../pages/Games";
import UpdateProfilePage from "../pages/UpdateProfilePage";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import AppNotFound from "../Components/Error Page/AppNotFound";
import ForgotPassword from "../pages/ForgotPassword";

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
                path: "forgot-password",
                element: <ForgotPassword />
            },
            {
                path: "*",
                element: <AppNotFound />
            }
        ]
    }
]);