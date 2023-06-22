import { createContext, useState } from 'react';
import { BmrForm } from '../components/bmr/BmrForm';

export const BmrContext = createContext(null);

export const BmrPage = () => {
    const [bmr, setBmr] = useState(0);

    return (
        <div>
            <h2 className="text-2xl my-5">BMR Calculator</h2>
            <BmrContext.Provider value={{ bmr, setBmr }}>
                <BmrForm />
            </BmrContext.Provider>
            <h2>{ bmr } Calories</h2>
        </div>
    );
};
