import type { EventData } from "./types";

import { openModal } from "./modal";

export function renderTimeline(events: EventData[], modal: HTMLElement): void {
    const timeline = document.getElementById("timeline");
    if (!timeline) return;

    events.forEach(event => {
        const item = document.createElement("div");
        item.classList.add("timeline-item");

        const dot = document.createElement("div");
        dot.classList.add("timeline-dot");

        const content = document.createElement("div");
        content.classList.add("timeline-content");
        content.innerHTML = `<h3>${event.year}</h3><p>${event.title}</p>`;

        dot.addEventListener("click", () => openModal(modal, event));
        content.addEventListener("click", () => openModal(modal, event));

        item.appendChild(dot);
        item.appendChild(content);
        timeline.appendChild(item);
    });
}

