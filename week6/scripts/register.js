const products = [
  {
    id: "fc-1888",
    name: "Cali",
  },
  {
    id: "fc-2050",
    name: "Toronto",
  },
  {
    id: "fs-1987",
    name: "Washington",
  },
  {
    id: "ac-2000",
    name: "Sao Pablo",
  },
  {
    id: "jj-1969",
    name: "Buenos Aires",
  },
];

const selectElement = document.getElementById("product");

products.forEach((product) => {
  const option = document.createElement("option");
  option.value = product.name;
  option.textContent = product.name;
  option.id = product.id;
  selectElement.appendChild(option);
});
