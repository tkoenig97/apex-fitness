import { createContext, useState } from 'react';
import { BmrForm } from '../components/bmr/BmrForm';
import { BmrInformation } from '../components/bmr/BmrInformation';

export const BmrContext = createContext(null);

export const BmrPage = () => {
    const [bmr, setBmr] = useState(0);

    return (
        <div>
            <h2 className="page-header">BMR Calculator</h2>
            <BmrContext.Provider value={{ bmr, setBmr }}>
                <BmrForm />
            </BmrContext.Provider>
            <h2 className="text-2xl font-bold">{ bmr } Calories</h2>
            <BmrInformation />
        </div>
    );
};
