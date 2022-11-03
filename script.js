document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

function scrollHeader() {
  const scrollHeader = document.getElementById("header");
  if (this.scrollY > 50) {
  } else {
  }
}

window.addEventListener("scroll", scrollHeader);

function scrollTop() {
  const scrollTop = document.getElementById("scroll-up");
  if (this.scrollY > 450) {
    scrollTop.classList.add("scroll-top");
  } else {
    scrollTop.classList.remove("scroll-top");
  }
}

window.addEventListener("scroll", scrollTop);

const myScrollReveal = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

myScrollReveal.reveal(
  `.pumpkins, .section-header, .register-wrapper, .shop li`
);
