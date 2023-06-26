import { useContext, useState } from 'react';
import { BmrContext } from '../../pages/BmrPage';
import { CalculateBmr, convertFtToIn } from '../../utils/BmrUtils';

export const BmrForm = () => {
    const { setBmr } = useContext(BmrContext);
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');
    const [heightFt, setHeightFt] = useState(0);
    const [heightIn, setHeightIn] = useState(0);
    const [weight, setWeight] = useState(0);
    const [tenthWeight, setTenthWeight] = useState(0);

    const handleBmrFormSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Call the conversion function and CalculateBmr with the form values
        const convertedHeight = convertFtToIn(heightFt, heightIn);
        const calculatedBmr = CalculateBmr(
            age,
            gender,
            convertedHeight,
            weight + tenthWeight / 10
        );

        // Update the BmrContext with the calculated BMR
        setBmr(calculatedBmr);
    };

    return (
        <div>
            <form className="flex flex-col my-8" onSubmit={handleBmrFormSubmit}>
                <div className="my-2">
                    <label>Age: </label>
                    <input
                        type="number"
                        min="1"
                        max="100"
                        value={age}
                        onChange={(e) => setAge(parseInt(e.target.value))}
                    ></input>
                </div>
                <label>Gender:</label>
                <div className="my-2">
                    <input
                        type="radio"
                        className="mx-2"
                        value="male"
                        checked={gender === 'male'}
                        onChange={() => setGender('male')}
                    />
                    <label>Male</label>

                    <input
                        type="radio"
                        className="mx-2"
                        value="female"
                        checked={gender === 'female'}
                        onChange={() => setGender('female')}
                    />
                    <label>Female</label>
                </div>
                <div className="my-2 flex justify-center">
                    <label>Height: </label>
                    <input
                        className="mx-2"
                        type="number"
                        min="1"
                        max="10"
                        value={heightFt}
                        onChange={(e) => setHeightFt(parseInt(e.target.value))}
                    ></input>
                    <h2>ft</h2>
                    <input
                        className="mx-2"
                        type="number"
                        min="0"
                        max="11"
                        value={heightIn}
                        onChange={(e) => setHeightIn(parseInt(e.target.value))}
                    ></input>
                    <h2>in</h2>
                </div>
                <div className="my-2 flex justify-center">
                    <label>Weight: </label>
                    <input
                        className="mx-2"
                        type="number"
                        min="0"
                        max="1000"
                        value={weight}
                        onChange={(e) => setWeight(parseInt(e.target.value))}
                    ></input>
                    <h2>.</h2>
                    <input
                        className="mx-2"
                        type="number"
                        min="0"
                        max="9"
                        value={tenthWeight}
                        onChange={(e) => setTenthWeight(e.target.value)}
                    ></input>
                    <h2>pounds</h2>
                </div>
                <div>
                    <input
                        type="submit"
                        value="Submit"
                        className="submit-button"
                    ></input>
                </div>
            </form>
        </div>
    );
};
