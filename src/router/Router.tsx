import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import NotFound from '../pages/NotFound';
import Welcome from '../pages/Welcome';
import Register from '../pages/Register';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Welcome/>,
        },
        {
            path: '/signin',
            element: <SignIn/>,
        },
        {
            path: '/register',
            element: <Register/>,
        },
        {
            path: '/homw',
            element: 'Home',
        },
        {
            path: '/users',
            element: 'Users',
        },
        {
            path: '/user/:id',
            element: 'User',
        },
        {
            path: '*',
            element: <NotFound/>,
        },
    ]);
    return <RouterProvider router={router} />;
};

export default Router;
