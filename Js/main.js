// main.js
import { initRouter } from './router.js';
import { startLoading } from './loading.js';

function init() {
    console.log('APEX OFFICIAL v1.0.0');
    console.log('Data proyek ada di js/data.js');
    initRouter();
    startLoading();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
