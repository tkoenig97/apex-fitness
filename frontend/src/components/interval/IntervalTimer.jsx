import { useState, useEffect } from 'react';
import { getTimerBgColor } from '../../utils/IntervalUtils';

export const IntervalTimer = () => {
    const [seconds, setSeconds] = useState(10);
    const [mode, setMode] = useState('PAUSED'); // Update initial state to "paused"
    const [timerStarted, setTimerStarted] = useState(false);
    const [paused, setPaused] = useState(false);

    const handleTimerActivation = () => {
        // Start the timer if it hasn't started yet
        if (!timerStarted) {
            setTimerStarted(true);
            setMode('REST'); // Set mode to "rest" when the timer starts
        } else {
            // Toggle the pause state if the timer is already started
            setPaused(!paused);
        }
    };

    useEffect(() => {
        const handleSpacebarEvent = (event) => {
            if (event.code === 'Space') {
                handleTimerActivation();
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
                    if (mode === 'REST') {
                        setSeconds(20);
                        setMode('WORK');
                    } else {
                        setSeconds(10);
                        setMode('REST');
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
            className={`flex flex-col justify-around rounded-full text-2xl border-2 border-black ${getTimerBgColor(
                timerStarted,
                paused,
                mode
            )} w-40 h-40 items-center flex justify-center cursor-pointer`}
            onClick={handleTimerActivation}
        >
            <div>{paused ? 'PAUSED' : mode}</div>
            {seconds}
            <div className="text-xl">workout</div>
        </div>
    );
};
