const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("open");
});

const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.textContent = `${today.getFullYear()}`;

const lastModified = document.querySelector("#lastModified");
const nLastModif = document.lastModified;
lastModified.innerHTML = `last modified: ${nLastModif.toLocaleString()}`;
