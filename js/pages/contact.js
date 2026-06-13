import { sendWhatsAppMessage } from "../utils/whatsapp.js";

export function initContactPage() {
  const form = document.getElementById("contactForm");

  if (!form) return;

  setupTransferField();
  setupFormSubmit(form);
}

function setupTransferField() {
  const transferSelect = document.getElementById("hasTransfer");
  const transferField = document.getElementById("transferField");

  if (!transferSelect || !transferField) return;

  transferSelect.addEventListener("change", () => {
    transferField.classList.toggle(
      "d-none",
      transferSelect.value !== "sim"
    );
  });
}

function setupFormSubmit(form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    sendWhatsAppMessage();
  });
}