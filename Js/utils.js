// utils.js
export function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function formatProgress(value) {
    return Math.min(Math.max(value, 0), 100);
}

export function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

export function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = randomBetween(0, i);
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}
