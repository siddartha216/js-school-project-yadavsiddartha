import type { EventData } from "./types";


export function setupModal(): HTMLElement {
    const modal = document.getElementById("modal") as HTMLElement;

    modal.innerHTML = `
    <div id="modal-content">
      <span id="close-modal" style="cursor:pointer;float:right;font-size:20px;">&times;</span>
      <h2 id="modal-title"></h2>
      <p id="modal-year"></p>
      <img id="modal-image" src="" alt="" style="max-width:100%;border-radius:6px;"/>
      <p id="modal-description"></p>
    </div>
  `;

    const closeModal = document.getElementById("close-modal")!;
    closeModal.addEventListener("click", () => modal.style.display = "none");

    return modal;
}

export function openModal(modal: HTMLElement, event: EventData): void {
    (document.getElementById("modal-title") as HTMLElement).textContent = event.title;
    (document.getElementById("modal-year") as HTMLElement).textContent = `Year: ${event.year}`;
    (document.getElementById("modal-image") as HTMLImageElement).src = event.imageURL;
    (document.getElementById("modal-description") as HTMLElement).textContent = event.description;
    modal.style.display = "flex";
}
