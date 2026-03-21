import './style.css';
import emailjs from '@emailjs/browser';

const btn = document.getElementById("revealBtn");
const info = document.getElementById("info");

let isOpen = false;
// init EmailJS
(function () {
  emailjs.init("CZPz38rF2tJA1tfEz");
})();
btn.addEventListener("click", () => {
  if (!isOpen) {
    // SHOW
    info.classList.remove("hidden");

    setTimeout(() => {
      info.classList.add("show");
    }, 50);

    btn.innerText = "Hide Details";
    isOpen = true;

  } else {
    // HIDE
    info.classList.remove("show");

    setTimeout(() => {
      info.classList.add("hidden");
    }, 400);

    btn.innerText = "Know More About Me";
    isOpen = false;
  }
});
const form = document.getElementById("contactForm");
const msg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_nlslxgj", "template_yiog9ne", form)
    .then(() => {
        alert("✅ Query sent successfully!");
      form.reset();
    })
    .catch(() => {
          alert("❌ Failed to send. Try again!");
        form.reset();

    });
});
const photoBtn = document.getElementById("photoBtn");
const gallery = document.getElementById("photoGallery");

let isPhotoOpen = false;

photoBtn.addEventListener("click", () => {
  if (!isPhotoOpen) {
    gallery.classList.remove("photo-hidden");
    photoBtn.innerText = "Hide Photos";
    isPhotoOpen = true;
  } else {
    gallery.classList.add("photo-hidden");
    photoBtn.innerText = "See Photos";
    isPhotoOpen = false;
  }
});
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");

const images = document.querySelectorAll(".photo-container img");

images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

// Close button
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close when clicking outside image
modal.addEventListener("click", (e) => {
  if (e.target !== modalImg) {
    modal.style.display = "none";
  }
});