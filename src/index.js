"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetcher_1 = require("./fetcher");
const modal_1 = require("./modal");
const renderer_1 = require("./renderer");
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const modal = (0, modal_1.setupModal)();
        const events = await (0, fetcher_1.fetchEvents)();
        (0, renderer_1.renderTimeline)(events, modal);
    }
    catch (err) {
        console.error("Error:", err);
    }
});
//# sourceMappingURL=index.js.map