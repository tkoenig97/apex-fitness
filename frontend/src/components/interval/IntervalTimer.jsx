import { useState, useEffect } from 'react';

export const IntervalTimer = () => {
    const [seconds, setSeconds] = useState(10);
    const [mode, setMode] = useState('rest');
    const [timerStarted, setTimerStarted] = useState(false);
    const [paused, setPaused] = useState(false);

    const handleClick = () => {
        // Start the timer if it hasn't started yet
        if (!timerStarted) {
            setTimerStarted(true);
        } else {
            // Toggle the pause state if the timer is already started
            setPaused(!paused);
        }
    };

    useEffect(() => {
        const handleSpacebarEvent = (event) => {
            if (event.code === 'Space') {
                handleClick();
            }
        };

        window.addEventListener('keydown', handleSpacebarEvent);

        let interval = null;

        if (timerStarted && !paused) {
            // Create the interval and update the seconds based on the mode
            interval = setInterval(() => {
                if (seconds > 1) {
                    setSeconds((prevSeconds) => prevSeconds - 1);
                } else {
                    // Switch between rest and work modes
                    if (mode === 'rest') {
                        setSeconds(20);
                        setMode('work');
                    } else {
                        setSeconds(10);
                        setMode('rest');
                    }
                }
            }, 1000);
        }

        // Clean up the interval on component unmount or when dependencies change
        return () => {
            window.removeEventListener('keydown', handleSpacebarEvent);
            clearInterval(interval);
        };
    }, [seconds, mode, timerStarted, paused]);

    return (
        <div
            className="rounded-full text-2xl border-2 border-black bg-green-400 w-40 h-40 items-center flex justify-center cursor-pointer"
            onClick={handleClick}
        >
            {seconds}
        </div>
    );
};
