export const BmrForm = () => {
    return (
        <div>
            <form className="flex flex-col my-8">
                <div className="my-2">
                    <label>Age: </label>
                    <input type="number" min="1" max="100"></input>
                </div>
                <label>Gender:</label>
                <div className="my-2">
                    <input type="radio" className="mx-2" />
                    <label>Male</label>

                    <input type="radio" className="mx-2" />
                    <label>Female</label>
                </div>
                <div className="my-2 flex justify-center">
                    <label>Height: </label>
                    <input
                        className="mx-2"
                        type="number"
                        min="1"
                        max="10"
                    ></input>
                    <h2>ft</h2>
                    <input
                        className="mx-2"
                        type="number"
                        min="0"
                        max="11"
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
                    ></input>
                    <h2>.</h2>
                    <input
                        className="mx-2"
                        type="number"
                        min="0"
                        max="9"
                    ></input>
                    <h2>pounds</h2>
                </div>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
};
