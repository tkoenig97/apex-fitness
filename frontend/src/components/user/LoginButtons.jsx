import { Link } from "react-router-dom"

export const LoginButtons = () => {
    return (
        <div className="flex justify-around">
            <Link to={'/login'} className="login-button">Log-In</Link>
            <Link to={'/signup'} className="login-button">Sign-Up</Link>
        </div>
    )
}