// dom.js
export const DOM = {
    loadingScreen: document.getElementById('loadingScreen'),
    profileScreen: document.getElementById('profileScreen'),
    progressFill: document.getElementById('progressFill'),
    loadingStatus: document.getElementById('loadingStatus'),
    loadingText: document.getElementById('loadingText'),
    projectGrid: document.getElementById('projectGrid'),
    glitchOverlay: document.getElementById('glitchOverlay'),
    avatar: document.getElementById('avatar'),
};

export function getElement(selector) {
    return document.querySelector(selector);
}

export function getElements(selector) {
    return document.querySelectorAll(selector);
}

export function createElement(tag, className, content) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (content) el.textContent = content;
    return el;
}
