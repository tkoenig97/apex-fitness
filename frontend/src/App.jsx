import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import './App.css';

function App() {
    return (
        <div className="md:grid grid-cols-4">
            <Navbar />
            <div className="col-span-3 text-center bg-gray-300">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
