import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to={'/'}></Link>
            <Link to={'/routines'}>Routines</Link>
            <Link to={'/interval'}>Interval Training</Link>
            <Link to={'/progress'}>Progress</Link>
            <Link to={'/log'}>Daily Log</Link>
        </div>
    );
};
