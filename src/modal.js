"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupModal = setupModal;
exports.openModal = openModal;
const types_1 = require("./types");
function setupModal() {
    const modal = document.getElementById("modal");
    modal.innerHTML = `
    <div id="modal-content">
      <span id="close-modal" style="cursor:pointer;float:right;font-size:20px;">&times;</span>
      <h2 id="modal-title"></h2>
      <p id="modal-year"></p>
      <img id="modal-image" src="" alt="" style="max-width:100%;border-radius:6px;"/>
      <p id="modal-description"></p>
    </div>
  `;
    const closeModal = document.getElementById("close-modal");
    closeModal.addEventListener("click", () => modal.style.display = "none");
    return modal;
}
function openModal(modal, event) {
    document.getElementById("modal-title").textContent = event.title;
    document.getElementById("modal-year").textContent = `Year: ${event.year}`;
    document.getElementById("modal-image").src = event.imageURL;
    document.getElementById("modal-description").textContent = event.description;
    modal.style.display = "flex";
}
//# sourceMappingURL=modal.js.map