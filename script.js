document.addEventListener("DOMContentLoaded", () => {
    const timeline = document.getElementById("timeline");
    const modal = document.getElementById("modal");

    // Create modal content dynamically
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

    // Fetch events from JSON file
    fetch("events.json")
        .then(response => response.json())
        .then(events => {
            events.forEach(event => {
                const item = document.createElement("div");
                item.classList.add("timeline-item");

                const dot = document.createElement("div");
                dot.classList.add("timeline-dot");

                const content = document.createElement("div");
                content.classList.add("timeline-content");
                content.innerHTML = `<h3>${event.year}</h3><p>${event.title}</p>`;

                // Open modal on click
                dot.addEventListener("click", () => openModal(event));
                content.addEventListener("click", () => openModal(event));

                item.appendChild(dot);
                item.appendChild(content);
                timeline.appendChild(item);
            });
        })
        .catch(err => console.error("Error loading events:", err));

    function openModal(event) {
        document.getElementById("modal-title").textContent = event.title;
        document.getElementById("modal-year").textContent = `Year: ${event.year}`;
        document.getElementById("modal-image").src = event.imageURL;
        document.getElementById("modal-description").textContent = event.description;
        modal.style.display = "flex";
    }
});
