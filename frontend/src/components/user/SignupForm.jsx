import { useState } from 'react';
import { signUp } from '../../utils/UserUtils';

export const SignUpForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();

        signUp(firstName, lastName, email, password);

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="px-64">
            <h1 className="text-3xl">Sign Up:</h1>
            <form
                className="flex flex-col my-8"
                onSubmit={handleSignUp}
            >
                <div className="flex justify-center">
                    <input
                        className="my-4 mx-4"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        className="my-4"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <input
                    className="my-4"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="my-4"
                    placeholder="Password"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    className="submit-button"
                    type="submit"
                    value="Sign Up"
                />
            </form>
        </div>
    );
};
