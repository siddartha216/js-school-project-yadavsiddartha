"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchEvents = fetchEvents;
const types_1 = require("./types");
async function fetchEvents() {
    const response = await fetch("events.json");
    if (!response.ok)
        throw new Error("Error loading events");
    return response.json();
}
//# sourceMappingURL=fetcher.js.map