import { createBrowserRouter } from 'react-router-dom'
import { IndexPage } from './pages/IndexPage';
import App from './App'
import { IntervalPage } from './pages/IntervalPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <IndexPage />,
            },
            {
                path: '/interval',
                element: <IntervalPage />,
            },
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/signup',
                element: <SignupPage />,
            }
        ]
    }
])

export default Router;