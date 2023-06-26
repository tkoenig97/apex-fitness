import { useState } from 'react';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='px-64'>
            <h1>Log In:</h1>
            <form
                className="flex flex-col my-8"
            >
                <input
                    className='my-4'
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className='my-4'
                    placeholder="Password"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input className='submit-button' type="submit" value="Log In" />
                <p>
                    {/* Don't have an account? <Link to={'/signup'}>Sign-Up!</Link> */}
                </p>
            </form>
        </div>
    )
}