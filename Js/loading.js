// loading.js
import CONFIG from './config.js';
import { DOM } from './dom.js';
import { formatProgress } from './utils.js';
import { events } from './events.js';

let progress = 0;
let interval = null;
let isComplete = false;

export function startLoading() {
    if (interval) return;
    
    progress = 0;
    isComplete = false;
    DOM.loadingScreen.classList.remove('hide');
    DOM.profileScreen.classList.remove('active');
    DOM.progressFill.style.width = '0%';
    DOM.loadingStatus.textContent = '0%';
    DOM.loadingText.textContent = 'loading sistem informasi';

    interval = setInterval(() => {
        progress += CONFIG.progressStep;
        if (progress > 100) progress = 100;
        
        DOM.progressFill.style.width = progress + '%';
        DOM.loadingStatus.textContent = Math.round(progress) + '%';
        
        if (progress < 30) {
            DOM.loadingText.textContent = 'loading sistem informasi';
        } else if (progress < 60) {
            DOM.loadingText.textContent = 'memuat data proyek';
        } else if (progress < 85) {
            DOM.loadingText.textContent = 'menyiapkan tampilan';
        } else {
            DOM.loadingText.textContent = 'hampir selesai...';
        }

        if (progress >= 100) {
            clearInterval(interval);
            interval = null;
            isComplete = true;
            events.emit('loadingComplete');
        }
    }, CONFIG.progressInterval);
}

export function getLoadingProgress() {
    return progress;
}

export function isLoadingComplete() {
    return isComplete;
}
