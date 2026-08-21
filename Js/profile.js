// profile.js
import PROJECTS from './data.js';
import { DOM } from './dom.js';
import { createElement } from './dom.js';
import { shuffleArray } from './utils.js';

export function renderProjects() {
    const grid = DOM.projectGrid;
    grid.innerHTML = '';

    const shuffled = shuffleArray(PROJECTS);

    shuffled.forEach((project, index) => {
        const btn = createElement('button', 'project-btn');
        const span = createElement('span', '', project.name);
        btn.appendChild(span);
        
        const delay = Math.min(index * 0.04, 0.5);
        btn.style.animationDelay = delay + 's';
        btn.classList.add('fade-in');

        btn.addEventListener('click', () => {
            window.open(project.url, '_blank');
        });

        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-3px)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });

        grid.appendChild(btn);
    });
}

export function showProfile() {
    DOM.loadingScreen.classList.add('hide');
    DOM.profileScreen.classList.add('active');
    DOM.avatar.classList.add('pulse-animation');
}

export function updateAvatarText(text) {
    if (DOM.avatar) {
        DOM.avatar.textContent = text || 'AP';
    }
}
