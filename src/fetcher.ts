import type { EventData } from "./types";


export async function fetchEvents(): Promise<EventData[]> {
    const response = await fetch("events.json");
    if (!response.ok) throw new Error("Error loading events");
    return response.json();
}
