function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

/* Smooth Scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


/* ================================
   MOBILE NAVIGATION
================================ */
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

/* ================================
   SMOOTH SCROLL
================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });

    // Close mobile menu after click
    const nav = document.getElementById("nav-links");
    if (window.innerWidth < 768) {
      nav.style.display = "none";
    }
  });
});

/* ================================
   PROJECT IMAGE MODAL
================================ */
function openModal(card) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const caption = document.getElementById("modalCaption");

  modal.style.display = "block";
  modalImg.src = card.querySelector("img").src;

  const title = card.querySelector("h3").innerText;
  const desc = card.querySelector("p").innerHTML;
  caption.innerHTML = `<strong>${title}</strong><br>${desc}`;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

/* Close modal on outside click */
window.onclick = function (event) {
  const modal = document.getElementById("imageModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

/* Close modal with ESC key */
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
