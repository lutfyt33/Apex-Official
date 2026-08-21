// glitch.js
import CONFIG from './config.js';
import { DOM } from './dom.js';
import { sleep } from './utils.js';

let isGlitching = false;

export async function triggerGlitch() {
    if (isGlitching) return;
    isGlitching = true;

    DOM.glitchOverlay.classList.add('active');

    for (let i = 0; i < 8; i++) {
        const line = document.createElement('div');
        line.className = 'glitch-line';
        line.style.top = (5 + Math.random() * 85) + '%';
        line.style.animationDuration = (0.3 + Math.random() * 0.5) + 's';
        DOM.glitchOverlay.appendChild(line);
        
        setTimeout(() => {
            if (line.parentNode) line.remove();
        }, 1000);
    }

    document.querySelector('.brand')?.classList.add('glitch-text');
    document.querySelector('.loading-indicator')?.classList.add('glitch-text');

    await sleep(CONFIG.glitchDuration);

    DOM.glitchOverlay.classList.remove('active');
    document.querySelectorAll('.glitch-line').forEach(el => el.remove());
    document.querySelector('.brand')?.classList.remove('glitch-text');
    document.querySelector('.loading-indicator')?.classList.remove('glitch-text');

    isGlitching = false;
}
