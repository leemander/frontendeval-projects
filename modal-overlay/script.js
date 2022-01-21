const main = document.getElementById("main");
const openBtn = document.getElementById("open-modal");
const modalContainer = document.getElementById("modal-container");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const acceptBtn = document.getElementById("accept-btn");

function openModal() {
  modalContainer.classList.add("open");
}

function closeModal(e) {
  modalContainer.classList.remove("open");
}

function acceptOffer() {
  closeModal();
  main.innerHTML = "Offer Accepted!";
}

openBtn.addEventListener("click", openModal);

modalContainer.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    closeModal();
  }
});

closeBtn.addEventListener("click", closeModal);
acceptBtn.addEventListener("click", acceptOffer);
