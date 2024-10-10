import {createBrowserRouter} from 'react-router-dom'
import DefaultLayout from './pages/layouts/defaultLayout';
import GuestLayout from './pages/layouts/guestLayout';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Users from './pages/users/users';
import Home from './pages/home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/users',
                element: <Users/>
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])

export default router;