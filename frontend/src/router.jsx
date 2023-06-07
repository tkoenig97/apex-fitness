import { createBrowserRouter } from 'react-router-dom'
import { IndexPage } from './pages/IndexPage';
import App from './App'

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <IndexPage />,
            },
        ]
    }
])

export default Router;