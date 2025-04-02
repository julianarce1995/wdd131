const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Cali Colombia",
    location: "Cali, Colombia",
    dedicated: "2025, March, 1",
    area: 9500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/cali-colombia-temple/cali-colombia-temple-22101-main.jpg",
  },
  {
    templeName: "Caracas Venezuela",
    location: "Caracas, Venezuela",
    dedicated: "2000, August, 20",
    area: 15332,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/096-Caracas-Venezuela-Temple.jpg",
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 12",
    area: 41010,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg",
  },
  // Add more temple objects here...
];

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

createTempleCard(temples);
 
const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
  createTempleCard(temples);
});

const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
    const templesFilteredByOldTime = temples.filter((temple) => parseInt(temple.dedicated.split(",")[0]) < 1900)
    createTempleCard(templesFilteredByOldTime);
})

const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
  const templesFilteredByNewTime = temples.filter(
    (temple) => parseInt(temple.dedicated.split(",")[0]) > 2000
  );
  createTempleCard(templesFilteredByNewTime);
});

const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
  const templesFilteredByLarge = temples.filter((temple) => temple.area >  90000);
  createTempleCard(templesFilteredByLarge);
});

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
  const templesFilteredBySmall = temples.filter(
    (temple) => temple.area < 10000
  );
  createTempleCard(templesFilteredBySmall);
});

function createTempleCard(templesData) {
    document.querySelector(".grid-container").innerHTML = "";
    templesData.forEach(temple => {
        let card = document.createElement("section")
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="card-location">Location:</span>${temple.location}`;
        dedication.innerHTML = `<span class="card-dedicated">Dedicated:</span>${temple.dedicated}`;
        area.innerHTML = `<span class="card-area">Area:</span>${temple.area}`;
        img.setAttribute("class", "image-temple");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        document.querySelector(".grid-container").appendChild(card);
    })
}


/*
<figure class="grid-item">
    <img class="image-temple" src="images/templo.jpeg" alt="image of the new temple of the church of jesus christ in Cali Colombia">
    <figcaption>Templo Cali Colombia</figcaption>
</figure>
*/