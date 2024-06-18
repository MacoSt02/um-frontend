import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Welcome from '../pages/Welcome';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Welcome/>,
        },
        {
            path: '/login',
            element: <Login/>,
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
