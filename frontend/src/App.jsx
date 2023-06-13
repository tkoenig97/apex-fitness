import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import './App.css';
import { Header } from './components/Header';

function App() {
    return (
        <div>
            <Header />
            <div className="md:grid grid-cols-4">
                <Navbar />
                <div className="col-span-3 text-center bg-gray-300">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default App;
