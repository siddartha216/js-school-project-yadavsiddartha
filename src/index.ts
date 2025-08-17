import { fetchEvents } from "./fetcher";
import { setupModal } from "./modal";
import { renderTimeline } from "./renderer";

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const modal = setupModal();
        const events = await fetchEvents();
        renderTimeline(events, modal);
    } catch (err) {
        console.error("Error:", err);
    }
});
