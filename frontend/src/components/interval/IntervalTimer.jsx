import { useState, useEffect } from 'react';

export const IntervalTimer = () => {
    const [seconds, setSeconds] = useState(10);
    const [mode, setMode] = useState('rest');
    const [timerStarted, setTimerStarted] = useState(false);
    const [paused, setPaused] = useState(false);

    const handleClick = () => {
        if (!timerStarted) {
            setTimerStarted(true);
        } else {
            setPaused(!paused);
        }
    };

    useEffect(() => {
        let interval = null;

        if (timerStarted && !paused) {
            interval = setInterval(() => {
                if (seconds > 1) {
                    setSeconds((prevSeconds) => prevSeconds - 1);
                } else {
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

        return () => {
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
