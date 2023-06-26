import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { createContext, useState, useEffect } from 'react';
import { currUser, getToken } from './utils/UserUtils';
import './App.css';

export const UserContext = createContext(null);

function App() {
    const [user, setUser] = useState(null);

    getToken();

    useEffect(() => {
        const getCurrUser = async () => {
            setUser(await currUser());
        };
        getCurrUser();
    }, []);

    return (
        <div>
            <Header />
            <UserContext.Provider value={{ user, setUser }}>
                <div className="md:grid grid-cols-4">
                    <Navbar />
                    <div className="col-span-3 text-center bg-gray-300 p-8">
                        <Outlet />
                    </div>
                </div>
            </UserContext.Provider>
        </div>
    );
}

export default App;
