import { Link } from "react-router-dom"

export const LoginButtons = () => {
    return (
        <div className="flex justify-around">
            <Link to={'user/login'} className="login-button">Log-In</Link>
            <Link to={'user/signup'} className="login-button">Sign-Up</Link>
        </div>
    )
}