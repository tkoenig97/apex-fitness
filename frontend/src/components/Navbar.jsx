import { Link } from 'react-router-dom';
import { LoginButtons } from './user/LoginButtons';

export const Navbar = () => {
    return (
        <div className="bg-brown-500 col-span-1 text-brown-200 ">
            <ul
                className="flex flex-col justify-center text-2xl hidden md:block"
                id="nav"
            >
                <li>
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
                <li>
                    <Link to={'/bmr'}>BMR Calculator</Link>
                </li>
                <li className="mt-6">
                    <LoginButtons />
                </li>
            </ul>
        </div>
    );
};
