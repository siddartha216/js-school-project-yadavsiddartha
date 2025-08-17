"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTimeline = renderTimeline;
const types_1 = require("./types");
const modal_1 = require("./modal");
function renderTimeline(events, modal) {
    const timeline = document.getElementById("timeline");
    if (!timeline)
        return;
    events.forEach(event => {
        const item = document.createElement("div");
        item.classList.add("timeline-item");
        const dot = document.createElement("div");
        dot.classList.add("timeline-dot");
        const content = document.createElement("div");
        content.classList.add("timeline-content");
        content.innerHTML = `<h3>${event.year}</h3><p>${event.title}</p>`;
        dot.addEventListener("click", () => (0, modal_1.openModal)(modal, event));
        content.addEventListener("click", () => (0, modal_1.openModal)(modal, event));
        item.appendChild(dot);
        item.appendChild(content);
        timeline.appendChild(item);
    });
}
//# sourceMappingURL=renderer.js.map