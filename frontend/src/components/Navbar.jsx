import { Link } from 'react-router-dom';
import { Header } from './Header';

export const Navbar = () => {
    return (
        <div className="bg-brown-500 col-span-1 text-brown-200 ">
            <Header />
            <div className="flex justify-center">
                <ul
                    className="text-2xl justify-between hidden md:block"
                    id="nav"
                >
                    <li className="mt-6">
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className="mt-6">
                        <Link to={'/routines'}>Routines</Link>
                    </li>
                    <li className="mt-6">
                        <Link to={'/interval'}>Interval Training</Link>
                    </li>
                    <li className="mt-6">
                        <Link to={'/progress'}>Progress</Link>
                    </li>
                    <li className="mt-6">
                        <Link to={'/log'}>Daily Log</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
