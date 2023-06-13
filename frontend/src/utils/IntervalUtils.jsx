export const getTimerBgColor = (timerStarted, paused, mode) => {
    let backgroundColor = '';

    if (!timerStarted || paused) {
        backgroundColor = 'bg-yellow-400';
    } else if (mode === 'rest') {
        backgroundColor = 'bg-red-400';
    } else {
        backgroundColor = 'bg-green-400';
    }
    return backgroundColor
}