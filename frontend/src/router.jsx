import { createBrowserRouter } from 'react-router-dom'
import { IndexPage } from './pages/IndexPage';
import App from './App'
import { IntervalPage } from './pages/IntervalPage';

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
                element: <IntervalPage />
            },
        ]
    }
])

export default Router;