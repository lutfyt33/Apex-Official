// router.js
import { events } from './events.js';
import { showProfile, renderProjects } from './profile.js';
import { triggerGlitch } from './glitch.js';
import { startLoading } from './loading.js';

export function initRouter() {
    events.on('loadingComplete', async () => {
        await triggerGlitch();
        renderProjects();
        showProfile();
    });

    window.addEventListener('load', () => {
        startLoading();
    });

    window.addEventListener('popstate', () => {
        // handle back/forward
    });
}
