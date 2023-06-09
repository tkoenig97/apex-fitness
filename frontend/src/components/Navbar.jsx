import { Link } from 'react-router-dom';
import { toggleMenu } from '../utils/NavUtils';

export const Navbar = () => {
    return (
        <div className="flex justify-between items-center bg-brown-500 col-span-1 text-brown-200">
            <h1>Apex Fitness</h1>
            <div
                className="px-4 cursor-pointer md:hidden"
                onClick={toggleMenu}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </div>
            <ul className="text-2xl justify-between hidden md:block" id="nav">
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
    );
};
