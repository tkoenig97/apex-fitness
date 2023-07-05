import { createBrowserRouter } from 'react-router-dom'
import { IndexPage } from './pages/IndexPage';
import { IntervalPage } from './pages/IntervalPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { BmrPage } from './pages/BmrPage';
import App from './App'
import { TrainerPage } from './pages/TrainerPage';

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
                path: '/bmr',
                element: <BmrPage />,
            },
            {
                path: '/trainer',
                element: <TrainerPage />,
            },
            {
                path: 'user/login',
                element: <LoginPage />,
            },
            {
                path: 'user/signup',
                element: <SignupPage />,
            }
        ]
    }
])

export default Router;